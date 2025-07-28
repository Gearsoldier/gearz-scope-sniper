# 🎯 GEARZ Scope Sniper

**GEARZ Scope Sniper** is an AI-powered scope analyzer for bug bounty hunters and red teamers. Just paste in-scope and out-of-scope targets from a bug bounty program, and Scope Sniper returns:

- 🏷️ Tagged domains by type (auth, staging, wildcard, etc.)
- ⚠️ Suggested vulnerable paths (e.g., `/api/login`, `/graphql`)
- ✅ AI-generated attack checklists
- 🚫 Warnings for out-of-scope items

Built for speed. Powered by [Ollama](https://ollama.com/). No API keys required.

---

## ⚙️ Requirements

- Node.js 18+
- Ollama installed and running locally
- `llama3:instruct` model pulled

---

## 🧠 Setup Instructions

### 1. Pull the LLM model with Ollama

```bash
ollama pull llama3:instruct
ℹ️ This project uses llama3:instruct by default. You can change the model in lib/ai.ts.

2. Clone the repo
bash
Copy
Edit
git clone https://github.com/Gearsoldier/gearz-scope-sniper.git
cd gearz-scope-sniper
3. Install dependencies

npm install
4. Run the app locally

npm run dev
Then visit:
http://localhost:3000

📋 How to Use
Paste your bug bounty scope (including in-scope and out-of-scope lines)

Click “Analyze Scope”

Review:

Tagged domains (wildcard, dev, API, etc.)

Suggested vulnerable endpoints

AI-generated attack checklist

Hunt smart. Stay in scope.

🛡️ Powered by the GEARZ Stack
This tool is part of the GEARZ portfolio — tactical cybersecurity tools designed for hunters who don’t miss.

🧠 Local AI via Ollama

⚡ Zero config startup

🔍 Scope-first attack planning

🧠 About the Creator
Built by a cybersecurity architect & full-stack dev blending bug bounty
 automation with AI.

🔗 LinkedIn https: https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BUhNtZhuVTS26%2FGQ3UuTPKw%3D%3D
🧠 Projects: Payload Smith · Bug Chain Forge

🧪 Example Scope Input

api.dev.target.com
auth.target.com
dev.target.com
target.com
*.target-cdn.com

out-of-scope: admin.target.com
out of scope: dev2.target.com
