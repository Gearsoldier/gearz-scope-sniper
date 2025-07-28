"use client";

import { useState } from "react";
import ResultPanel from "@/components/ResultPanel";

export default function HomePage() {
  const [scopeText, setScopeText] = useState("");
  const [result, setResult] = useState("");
  const [inScope, setInScope] = useState<string[]>([]);
  const [outOfScope, setOutOfScope] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeScope = async () => {
    setLoading(true);
    setError("");
    setResult("");
    try {
      const res = await fetch("/api/analyze-scope", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scopeText }),
      });

      const data = await res.json();

      if (res.ok) {
        setResult(data.result);
        setInScope(data.inScope);
        setOutOfScope(data.outOfScope);
      } else {
        setError(data.error || "Unknown error.");
      }
    } catch (err: any) {
      setError("Failed to analyze scope.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen text-white px-4 py-12 flex flex-col items-center"
      style={{
        backgroundImage: "url('/scope-sniper-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl w-full bg-black/80 backdrop-blur-sm p-6 rounded-lg shadow-2xl border border-zinc-800">
        <h1 className="text-3xl font-bold text-green-400 mb-4">
          🗃️ GEARZ Scope Sniper
        </h1>
        <p className="text-sm text-zinc-400 mb-4">
          Paste your program's scope below — we'll analyze targets, tag risks,
          and generate a checklist for your recon.
        </p>

        <textarea
          rows={10}
          className="w-full text-sm p-3 bg-zinc-900 border border-zinc-700 rounded-md text-white resize-none"
          placeholder={`https://login.target.com\nhttps://api.target.com\nout-of-scope: dev.target.io`}
          value={scopeText}
          onChange={(e) => setScopeText(e.target.value)}
        />

        <button
          onClick={analyzeScope}
          disabled={loading || !scopeText.trim()}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "🧠 Analyze Scope"}
        </button>

        {error && (
          <p className="mt-4 text-sm text-red-400 font-mono">{error}</p>
        )}

        {result && (
          <ResultPanel
            result={result}
            inScope={inScope}
            outOfScope={outOfScope}
          />
        )}
      </div>
    </div>
  );
}
