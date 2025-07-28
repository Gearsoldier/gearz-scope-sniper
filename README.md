# 🧠 GEARZ Scope Sniper

GEARZ Scope Sniper is an AI-powered scope analyzer for bug bounty hunters. Just paste a target’s scope — it will:

- 🗂️ Categorize targets by type (API, auth, staging, etc.)
- 🔥 Suggest vuln-prone paths per domain
- ✅ Generate a checklist of attack vectors
- ❌ Flag all out-of-scope domains for safety

No config. No hassle. Just instant recon planning.

![screenshot](public/scope-sniper-bg.png)

---

## ⚙️ Setup Instructions

> This app runs **offline via [Ollama](https://ollama.com/)** and requires no API keys or cloud dependencies.

### 1. Clone the project

```bash
git clone https://github.com/Gearsoldier/gearz-scope-sniper.git
cd gearz-scope-sniper

### windows

### npm install
### curl -fsSL https://ollama.com/install.sh | sh
### ollama run llama3:instruct

### macOS

### brew install ollama
### ollama run llama3:instruct

###ollama run llama3:instruct


###🚀 Run the App

### npm run dev

📍 http://localhost:3000
