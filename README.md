# Portfolio — Zikriya Khan

A hand-built portfolio. Plain HTML, CSS and JavaScript: no framework, no build
step, no dependencies. Clone it and it runs.

**Live:** <https://zikriya141-cpu.github.io/portfolio/>

---

## What's in it

- Filterable project grid, generated from a single config file
- Lightbox with gallery navigation, arrow keys and `Esc`
- Light / dark theme, remembered in the browser
- Scroll reveals via `IntersectionObserver`, disabled under `prefers-reduced-motion`
- Contact form (Netlify Forms, with a `mailto:` fallback)
- Responsive down to 320px, with a slide-in menu on phones

---

## Run it locally

```bash
# option 1 — double click start.bat (Windows)

# option 2 — any static server
python -m http.server 8000
```

Then open <http://localhost:8000>.

---

## Structure

```
portfolio/
├── index.html        # markup only — content comes from config.js
├── css/style.css     # colours + fonts live in :root at the top
├── js/config.js      # ALL the text and project data lives here
├── js/main.js        # rendering + interaction
├── assets/
│   ├── works/        # project cover art
│   ├── portrait.svg  # monogram card
│   └── Zikriya-Khan-CV.pdf
└── start.bat         # one-click local server
```

---

## Editing

Everything you would want to change is in `js/config.js`. Change a value, save,
refresh. The grid, filters, lightbox, stack list and contact form rebuild
themselves from it.

```js
const CONFIG = {
  name: "Zikriya Khan",
  role: "Full-stack developer · ML",
  github: "zikriya141-cpu",     // builds the "View on GitHub" links
  email: "zikriya141@gmail.com",
  socials: [{ label, icon, url }],
  skills: [{ group, items: [...] }],
  works: [{
    title, category, year,
    cover, gallery: [...],
    summary, note, stack: [...], metrics: [...],
    repo: "RepoName",           // -> github.com/<github>/<repo>
    accent: "#2dd4bf",
    wide: true                  // full-width card
  }],
  services: [...],
  process: [...],
  contact: { heading, text, formName }
};
```

### Adding a project

Append one object to `works`. Drop the cover in `assets/works/`, set `cover`,
list extra shots in `gallery`. The filter button, card, lightbox and GitHub
link all appear on their own.

### Changing colours or fonts

`css/style.css`, `:root` block at the very top. One place, both themes.

---

## Deploy

The site is static, so any host works.

- **GitHub Pages** (current): Settings → Pages → deploy from branch `main`, root.
- **Netlify Drop**: drag the folder onto <https://app.netlify.com/drop>.
  Use this if you want the contact form to actually send mail.
- **Netlify from GitHub**: connect the repo, leave the build command empty,
  publish directory `.`.

---

<div align="center">
  <sub>© 2026 Zikriya Khan — designed and built from scratch, no templates.</sub>
</div>
