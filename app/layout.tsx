import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEARZ Scope Sniper",
  description: "AI-powered bug bounty scope analyzer built with Next.js, Tailwind, and Ollama.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white font-sans min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
