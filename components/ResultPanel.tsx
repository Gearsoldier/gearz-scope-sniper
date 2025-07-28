"use client";

import { useEffect, useState } from "react";

interface ResultPanelProps {
  result: string;
  inScope: string[];
  outOfScope: string[];
}

export default function ResultPanel({ result, inScope, outOfScope }: ResultPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 w-full max-w-3xl bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-xl">
      <h2 className="text-xl font-bold text-green-400 mb-2">🛰️ Scope Analysis</h2>

      <div className="text-sm text-zinc-300 whitespace-pre-wrap mb-4">{result}</div>

      <div className="flex justify-between items-center gap-4 mt-4">
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm"
        >
          {copied ? "✅ Copied" : "📋 Copy Results"}
        </button>
        <div className="text-xs text-zinc-400 italic">
          In-scope domains: {inScope.length} | Out-of-scope: {outOfScope.length}
        </div>
      </div>
    </div>
  );
}
