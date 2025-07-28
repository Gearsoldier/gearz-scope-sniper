import { NextResponse } from "next/server";
import { analyzeScopeWithAI } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { scopeText } = await req.json();

    if (!scopeText || typeof scopeText !== "string") {
      return NextResponse.json({ error: "Missing or invalid scopeText." }, { status: 400 });
    }

    // Split into lines, remove empties
    const lines = scopeText
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0);

    const inScope: string[] = [];
    const outOfScope: string[] = [];

    for (const line of lines) {
      if (/out[-\s]?of[-\s]?scope:/i.test(line)) {
        // Special format: "out-of-scope: domain.com"
        const out = line.split(":")[1]?.trim();
        if (out) outOfScope.push(out);
      } else if (line.toLowerCase().startsWith("out-of-scope") || line.toLowerCase().startsWith("out of scope")) {
        const domain = line.split(":")[1]?.trim() || line.split(" ").slice(2).join(" ").trim();
        if (domain) outOfScope.push(domain);
      } else {
        inScope.push(line);
      }
    }

    // Combine data to send to AI
    const analysisPrompt = `
You are a cybersecurity assistant. Given this list of in-scope domains and out-of-scope domains from a bug bounty program, analyze the targets.

1. Extract and tag in-scope domains by type (e.g., auth portal, API, dev, staging, wildcard).
2. Suggest possible vulnerability-prone paths per domain (e.g., /api/auth, /graphql).
3. Generate a checklist of attack ideas (e.g., "🧪 Test IDOR on /api/users/:id").
4. Clearly mark anything that is out-of-scope so it should be avoided.

In-scope:
${inScope.join("\n")}

Out-of-scope:
${outOfScope.join("\n")}
`;

    const aiResult = await analyzeScopeWithAI(analysisPrompt);

    return NextResponse.json({
      result: aiResult,
      inScope,
      outOfScope
    });
  } catch (error) {
    console.error("[ANALYZE_SCOPE_ERROR]", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
