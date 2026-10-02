# GEARZ Scope Sniper 🎯

GEARZ Scope Sniper is a local AI-assisted planning tool for reviewing bug bounty scope. Paste a line-by-line list of assets and exclusions to receive suggested asset tags, areas to investigate, and a review checklist from Ollama.

The application uses Next.js, React, TypeScript, and Tailwind CSS. It analyzes the text you provide; it does not contact or scan the listed assets.

## What it does

- Separates scope text into in-scope and explicitly excluded entries
- Asks the local `llama3:instruct` model to suggest domain tags, possible paths, and investigation ideas
- Displays the generated analysis with counts of parsed entries
- Copies the generated analysis to the clipboard

AI output does not establish authorization or prove a vulnerability. Always check the program's current rules yourself before taking action.

## Requirements

- Node.js and npm, using a maintained Node.js version compatible with the root `package-lock.json`
- [Ollama](https://ollama.com/) installed on the machine running the Next.js server
- The `llama3:instruct` model downloaded locally

No hosted AI API key is required by the current implementation.

## Local setup

### 1. Prepare Ollama

Start Ollama if it is not already running:

```bash
ollama serve
```

In another terminal, download the model:

```bash
ollama pull llama3:instruct
```

### 2. Run the application

```bash
git clone https://github.com/Gearsoldier/gearz-scope-sniper.git
cd gearz-scope-sniper
npm ci
npm run dev -- --hostname 127.0.0.1
```

Open [http://localhost:3000](http://localhost:3000).

Run these commands from the repository root. The nested `gearz-scope-sniper/` directory contains a separate create-next-app scaffold, not the Scope Sniper interface described here.

## Scope input

Use one asset per line. For exclusions, use the explicit `out-of-scope:` prefix:

```text
api.example.com
auth.example.com
staging.example.com
*.example.net
out-of-scope: admin.example.com
out of scope: excluded.example.net
```

Select **Analyze Scope**, review the results against the original program rules, and use **Copy Results** if you want to keep the analysis.

The parser treats every nonempty line that it does not recognize as an exclusion as in scope. It does not validate domains, expand wildcards, deduplicate entries, resolve conflicting rules, or interpret a full policy document. Headings and prose can therefore be counted as assets. The displayed totals are parsed-entry counts, not verified target counts.

## Configuration

The model name and endpoint are in `lib/ai.ts`:

- Model: `llama3:instruct`
- Endpoint: `http://localhost:11434/api/generate`

The Next.js API route calls Ollama from the server. If you move the app to another machine or a container, `localhost` refers to that server environment.

## Development

Root-level npm scripts:

- `npm run dev`: start the development server
- `npm run build`: create a production build
- `npm start`: serve a completed production build
- `npm run lint`: invoke `next lint`

The root package does not declare ESLint or include a root ESLint configuration, so the lint command may require setup. No automated test script or GitHub Actions workflow is included.

### Source map

- `app/page.tsx`: scope form, loading state, and error display
- `app/api/analyze-scope/route.ts`: line parsing and analysis prompt
- `lib/ai.ts`: Ollama request
- `components/ResultPanel.tsx`: result display, counts, and copy action
- `public/scope-sniper-bg.png`: background artwork

## Limitations and responsible use

This prototype does not enforce scope, verify suggested paths, or save analysis history. Generated tags and investigation ideas can be wrong. The API has no authentication or rate limiting, so keep it local unless appropriate deployment controls are added.

Use only information you are authorized to process, and remove secrets or unnecessary personal data before submitting scope text.

## GEARZ portfolio

Created as part of the GEARZ cybersecurity tool portfolio, alongside Payload Smith and Bug Chain Forge.
