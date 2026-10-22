# Portfolio — Zikriya Khan

A creative, hand-built portfolio website. **Plain HTML, CSS and JavaScript** —
no framework, no build step, no `npm install`. Clone it and it runs.

🔗 **Live site:** deploy karo — [app.netlify.com/drop](https://app.netlify.com/drop) par is folder ko drag karo.

---

## ✨ Features

- **Loading sequence** with an animated counter
- **Hero reveal** — the name types in with a staggered slide-up
- **Custom cursor** that grows over interactive elements (desktop)
- **Filterable work grid** — categories are generated automatically from the projects
- **Lightbox** with gallery navigation, arrow keys and `Esc` to close
- **Animated skill bars** that fill when they scroll into view
- **Light / dark theme** toggle, saved in the browser
- **Scroll-reveal animations** via `IntersectionObserver`
- **Working contact form** (Netlify Forms, with a `mailto:` fallback)
- **Fully responsive** down to mobile, with a slide-in menu
- **Respects `prefers-reduced-motion`**

---

## 🚀 Run it locally

```bash
# option 1 — double click start.bat (Windows)

# option 2 — any static server
python -m http.server 8000
```

Then open <http://localhost:8000>.

---

## 📁 Structure

```
portfolio/
├── index.html        # markup only — never edit for content
├── css/style.css     # colours + fonts live in :root at the top
├── js/config.js      # ⭐ ALL your content lives here
├── js/main.js        # rendering + animation logic
├── assets/
│   ├── works/        # project cover images
│   └── portrait.svg  # your photo
└── start.bat         # one-click local server
```

---

## ✏️ Editing

Everything you will ever need to change is in **`js/config.js`** — one plain
object. Change the values, save, refresh. The grid, filters, lightbox, skills
and contact form all rebuild themselves from it.

```js
const CONFIG = {
  name: "Zikriya Khan",
  role: "Full-Stack Developer · AI / ML Engineer",
  github: "zikriya141-cpu",       // used to build the "View on GitHub" links
  email: "zikriya141@gmail.com",
  socials: [{ label, icon, url }],
  skills: [{ name, level }],
  works: [{
    title, category, year,
    cover, gallery: [...],
    summary, stack: [...], metrics: [...],
    repo: "RepoName",          // -> github.com/<github>/<repo>
    accent: "#2dd4bf"
  }],
  services: [...],
  process: [...],
  contact: { heading, text, formName }
};
```

### Adding a project

Append one object to the `works` array. Drop the image in `assets/works/`,
set `cover`, list extra shots in `gallery`, and you are done — the filter
button, the card, the lightbox and the GitHub link all appear on their own.

### Changing the colours or fonts

`css/style.css` → the `:root` block at the very top. One place, twelve
variables, both themes.

---

## 🚀 Deploy

**Netlify Drop** (30 seconds): drag the folder onto
[app.netlify.com/drop](https://app.netlify.com/drop).

**Netlify from GitHub:** connect the repo, build command `leave empty`,
publish directory `.`.

**GitHub Pages:** push to a repo, then *Settings → Pages → deploy from branch*.

---

## 🛠 Built with

HTML5 · CSS3 (custom properties, grid, flexbox) · Vanilla JavaScript ·
IntersectionObserver · Canvas-free CSS animation · Netlify Forms

No dependencies. No build. Nothing to install.

---

<div align="center">
  <sub>© 2026 Zikriya Khan — designed and built from scratch, no templates.</sub>
</div>
