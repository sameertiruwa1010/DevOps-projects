# 🃏 GitCard

> **GitHub Profile README Generator — terminal ma answers deu, stunning README paaunu**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Shell: Bash](https://img.shields.io/badge/Shell-Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white)](https://www.gnu.org/software/bash/)
[![Platform: Linux](https://img.shields.io/badge/Platform-Linux%20%7C%20macOS-blue?style=for-the-badge)](https://www.linux.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![GitHub stars](https://img.shields.io/github/stars/sameertiruwa1010/GitCard?style=social)](https://github.com/sameertiruwa1010/GitCard/stargazers)

A terminal-based interactive generator that asks you simple questions and produces a **professional, beautiful GitHub profile README** — with animated headers, tech badges, GitHub stats, streak cards, and social links. Zero design skills needed.

---

## 📸 Preview

```
$ bash gitcard.sh

   ██████╗ ██╗████████╗ ██████╗ █████╗ ██████╗ ██████╗
  ██╔════╝ ██║╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔══██╗
  ██║  ███╗██║   ██║   ██║     ███████║██████╔╝██║  ██║
  ...

  ✨ GitHub Profile README Generator
  Answer a few questions → get a stunning README.md

  ▶  Basic Information

  → Your full name:
  → Your GitHub username:
  → Your job title / role:
  ...

  ✅ README.md generated successfully!
```

---

## 🎨 3 Template Styles

| Style | Best For |
|-------|----------|
| **1. Minimal** | Clean, simple, text-focused professionals |
| **2. Developer** | Stats-heavy, badges, tech-forward devs |
| **3. Creative** | Animated headers, visual, eye-catching profiles |

---

## ✨ What Gets Generated

- 🎯 **Animated typing header** (Fira Code typewriter effect)
- 🏷️ **Auto tech badges** — just type "React, Docker, Python" and badges appear
- 📊 **GitHub Stats card** with your theme of choice
- 🔥 **GitHub Streak stats**
- 🌐 **Social links** (LinkedIn, Twitter, Dev.to, YouTube, Email)
- 🌊 **Animated wave header/footer** (Creative style)
- 👁️ **Profile view counter**
- 💭 **Personal quote/motto**

---

## 🛠️ Installation & Usage

### Run directly (no install needed)

```bash
curl -fsSL https://raw.githubusercontent.com/sameertiruwa1010/GitCard/main/gitcard.sh | bash
```

### Or download and run

```bash
curl -fsSL https://raw.githubusercontent.com/sameertiruwa1010/GitCard/main/gitcard.sh -o gitcard.sh
chmod +x gitcard.sh
bash gitcard.sh
```

---

## 🚀 After Running

The script saves `README.md` in your current directory.

```bash
# 1. Create your GitHub profile repo (username/username)
#    Go to: https://github.com/new → repo name = your username

# 2. Clone it
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.git
cd YOUR_USERNAME

# 3. Copy the generated file
cp ~/README.md .

# 4. Push it live
git add README.md
git commit -m "✨ Add profile README via GitCard"
git push origin main
```

Your profile at `github.com/YOUR_USERNAME` will show it immediately. 🎉

---

## 🎯 Supported Tech Badges

GitCard auto-recognizes these — just type the name:

**Languages:** JavaScript, TypeScript, Python, Bash, Go, Rust, Java, PHP, C++

**Frontend:** React, Vue, Next.js, Svelte, Tailwind, HTML5, CSS3

**Backend:** Node.js, Express, Django, Laravel, FastAPI

**Databases:** MySQL, PostgreSQL, MongoDB, Redis, SQLite

**DevOps:** Docker, Kubernetes, AWS, GCP, Azure, Nginx, Linux

**Tools:** Git, GitHub, VS Code, Figma, Postman

> Don't see your tech? Type it anyway — GitCard will create a generic badge for it.

---

## 🎨 Stats Themes

When asked for a theme, choose from:

`default` `dark` `radical` `merko` `gruvbox` `tokyonight` `dracula` `cobalt` `synthwave` `highcontrast`

---

## 📁 Project Structure

```
GitCard/
├── gitcard.sh     # Main generator script
├── README.md      # This file
└── LICENSE
```

---

## 🤝 Contributing

```bash
git clone https://github.com/sameertiruwa1010/GitCard.git
cd GitCard
git checkout -b feature/add-new-badge

# Add your changes
git commit -m "feat: add Kotlin badge support"
git push origin feature/add-new-badge
# Open a Pull Request
```

**Ideas welcome:**
- More tech badge support
- New template styles
- Export to clipboard directly
- Interactive preview mode

---

## 📜 License

[MIT](./LICENSE) — free to use, fork, and modify.

---

## 👨‍💻 Author

**Sameer Tiruwa**
- GitHub: [@sameertiruwa1010](https://github.com/sameertiruwa1010)

---

> *"Afno GitHub profile ramro banau — GitCard le easy banauxa."* 🇳🇵

---

⭐ **If GitCard helped you, star it!** It helps other Nepali developers find it too.
