export async function analyzeScopeWithAI(prompt: string): Promise<string> {
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama3:instruct",
      prompt,
      stream: false
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Ollama request failed: ${err}`);
  }

  const result = await response.json();
  return result.response.trim();
}
