/* ==========================================================================
   PORTFOLIO SCRIPT
   Everything is driven by CONFIG in js/config.js
   ========================================================================== */

const $  = id => document.getElementById(id);
const C  = CONFIG;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- tiny helpers ---------- */
const esc = s => String(s ?? "").replace(/[&<>"']/g, m =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

function setText(el, text) { if (el) el.textContent = text; }
function setHTML(el, html) { if (el) el.innerHTML = html; }

/* ==========================================================================
   THEME
   ========================================================================== */
(function theme() {
  let saved = null;
  try { saved = localStorage.getItem("pf_theme"); } catch (e) { /* file:// mode */ }
  const prefersLight = matchMedia("(prefers-color-scheme: light)").matches;
  const mode = saved || (prefersLight ? "light" : "dark");
  apply(mode);

  function apply(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    const icon = $("themeIcon");
    if (icon) icon.textContent = mode === "light" ? "☀" : "☾";
  }

  $("themeBtn").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    try { localStorage.setItem("pf_theme", next); } catch (e) {}
    apply(next);
  });
})();

/* ==========================================================================
   CUSTOM CURSOR
   ========================================================================== */
(function cursor() {
  if (matchMedia("(hover: none)").matches) return;
  const ring = $("cursor"), dot = $("cursorDot");
  let rx = 0, ry = 0, mx = 0, my = 0;

  addEventListener("pointermove", e => {
    mx = e.clientX; my = e.clientY;
    document.body.classList.add("cursorOn");
    dot.style.transform = `translate(${mx - 2.5}px, ${my - 2.5}px)`;
  });
  addEventListener("pointerleave", () => document.body.classList.remove("cursorOn"));

  (function loop() {
    rx += (mx - rx) * .16;
    ry += (my - ry) * .16;
    ring.style.transform = `translate(${rx - 17}px, ${ry - 17}px)`;
    requestAnimationFrame(loop);
  })();

  document.addEventListener("pointerover", e => {
    const t = e.target.closest("a, button, .work, .filter, [data-cursor='link']");
    ring.classList.toggle("grow", !!t);
  });
})();

/* ==========================================================================
   HEADER + MOBILE MENU
   ========================================================================== */
(function header() {
  const head = $("header");
  const onScroll = () => head.classList.toggle("stuck", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  $("menuBtn").addEventListener("click", () => {
    document.body.classList.toggle("menuOpen");
    document.body.style.overflow = document.body.classList.contains("menuOpen") ? "hidden" : "";
  });
  document.querySelectorAll(".nav a").forEach(a =>
    a.addEventListener("click", () => {
      document.body.classList.remove("menuOpen");
      document.body.style.overflow = "";
    }));
})();

/* ==========================================================================
   LOADER
   ========================================================================== */
(function loader() {
  const el = $("loader"), count = $("loaderCount"), fill = $("loaderFill");
  let n = 0;
  const timer = setInterval(() => {
    n += Math.random() * 14 + 5;
    if (n >= 100) n = 100;
    count.textContent = Math.floor(n);
    fill.style.width = n + "%";
    if (n === 100) {
      clearInterval(timer);
      setTimeout(() => {
        el.classList.add("done");
        document.body.style.overflow = "";
        startHero();
        setTimeout(() => el.remove(), 800);
      }, 350);
    }
  }, reduced ? 10 : 130);

  document.body.style.overflow = "hidden";
})();

/* ==========================================================================
   HERO
   ========================================================================== */
function startHero() {
  const words = C.name.trim().split(/\s+/);
  const line1 = words.length > 1 ? words.slice(0, -1).join(" ") : C.name;
  const line2 = words.length > 1 ? words[words.length - 1] : C.role;

  const l1 = $("heroLine1"), l2 = $("heroLine2");
  l1.innerHTML = `<span>${esc(line1)}</span>`;
  l2.innerHTML = `<span>${esc(line2)}</span>`;

  const s1 = l1.querySelector("span"), s2 = l2.querySelector("span");

  if (reduced) {
    s1.style.transform = s2.style.transform = "none";
    s1.style.opacity = s2.style.opacity = 1;
    return;
  }

  const ease = "cubic-bezier(.22,1,.36,1)";
  s1.style.transition = `transform .9s ${ease}, opacity .9s ${ease}`;
  s2.style.transition = `transform .9s ${ease} .12s, opacity .9s ${ease} .12s`;
  s1.style.transform = s2.style.transform = "translateY(110%)";
  s1.style.opacity = s2.style.opacity = 0;

  const show1 = () => { s1.style.transform = "translateY(0)"; s1.style.opacity = 1; };
  const show2 = () => { s2.style.transform = "translateY(0)"; s2.style.opacity = 1; };

  // rAF for the smooth start, with a timer as a safety net
  requestAnimationFrame(() => {
    show1();
    setTimeout(show2, 140);
  });
  setTimeout(show1, 60);
  setTimeout(show2, 260);
}

/* ==========================================================================
   STATIC CONTENT
   ========================================================================== */
(function fill() {
  document.title = `${C.name} — Portfolio`;
  setText($("loaderName"), C.name);
  setText($("logoText"), C.name);
  setText($("heroAvail"), C.availability);
  setText($("heroLoc"), C.location);
  setText($("heroKicker"), C.role);
  setText($("heroTagline"), C.intro);
  setText($("heroBadge"), C.heroBadge);
  setText($("footerName"), C.name);
  setText($("footerNote"), C.footerNote);
  setText($("workSub"), "A few things I have designed, built and shipped.");
  setText($("contactHeading"), C.contact.heading);
  setText($("contactText"), C.contact.text);
  setText($("emailText"), C.email);
  setText($("phoneText"), C.phone);
  setText($("year"), new Date().getFullYear() || C.year);

  $("emailLink").href = `mailto:${C.email}`;
  $("phoneLink").href = `tel:${String(C.phone).replace(/\s/g, "")}`;
  $("footerMail").href = `mailto:${C.email}`;
  $("footerMail").textContent = C.email;
  $("footerBig").textContent = "Let's talk";

  const cvBtn = $("cvBtn");
  if (C.cvUrl) { cvBtn.href = C.cvUrl; cvBtn.setAttribute("target", "_blank"); cvBtn.setAttribute("rel", "noopener"); }
  else cvBtn.remove();

  // contact form name (Netlify needs it in the markup at build time)
  const form = $("contactForm");
  form.setAttribute("name", C.contact.formName);
  form.querySelector('input[name="form-name"]').value = C.contact.formName;

  /* ---- about ---- */
  const portrait = $("portrait");
  portrait.onerror = () => {
    portrait.remove();
    portrait.parentElement.classList.add("noImg");
  };
  portrait.src = C.about.portrait;

  setText($("aboutLead"), C.about.text[0]);
  setHTML($("aboutText"), C.about.text.slice(1).map(t => `<p>${esc(t)}</p>`).join(""));

  setHTML($("stats"), C.about.stats.map(s =>
    `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join(""));

  /* ---- skills ---- */
  setHTML($("skills"), C.skills.map(s =>
    `<div class="skillRow">
       <div class="skillTop"><span>${esc(s.name)}</span><span>${s.level}%</span></div>
       <div class="skillBar"><i data-level="${s.level}"></i></div>
     </div>`).join(""));

  setHTML($("tools"), C.tools.map(t => `<span class="tool">${esc(t)}</span>`).join(""));

  /* ---- services ---- */
  setHTML($("serviceGrid"), C.services.map(s =>
    `<article class="service">
       <span class="ico">${esc(s.icon)}</span>
       <h3>${esc(s.title)}</h3>
       <p>${esc(s.text)}</p>
     </article>`).join(""));

  /* ---- process ---- */
  setHTML($("processList"), C.process.map(p =>
    `<div class="proc">
       <span class="step">${esc(p.step)}</span>
       <h3>${esc(p.title)}</h3>
       <p>${esc(p.text)}</p>
     </div>`).join(""));

  /* ---- socials ---- */
  setHTML($("socials"), C.socials.map(s =>
    `<a class="social" href="${esc(s.url)}" target="_blank" rel="noopener"
        title="${esc(s.label)}" aria-label="${esc(s.label)}" data-cursor="link">${esc(s.icon)}</a>`).join(""));

  /* ---- marquees ---- */
  const mk = list => list.map(t => `<span>${esc(t)}</span>`).join("") ;
  const strip = list => mk(list) + mk(list);
  $("marqueeTop").innerHTML = strip(C.marquee);
  $("marqueeBottom").innerHTML = strip(C.marquee.slice().reverse());
})();

/* ==========================================================================
   WORK GRID + FILTERS
   ========================================================================== */
let currentFilter = "All";
const workCards = [];

(function work() {
  const grid = $("workGrid");

  C.works.forEach((w, i) => {
    const card = document.createElement("article");
    const isWide = w.wide !== undefined ? w.wide : i % 3 === 0;
    card.className = "work" + (isWide ? " wide" : "");
    card.style.transitionDelay = (i % 3) * 80 + "ms";
    const repoUrl = w.link || (w.repo && C.github ? `https://github.com/${C.github}/${w.repo}` : "");
    card.innerHTML = `
      <div class="workMedia">
        <img src="${esc(w.cover)}" alt="${esc(w.title)}" loading="lazy">
        <div class="workOverlay">
          <div class="woTags">${(w.stack || []).slice(0, 4).map(t => `<span>${esc(t)}</span>`).join("")}</div>
          <h3>${esc(w.title)}</h3>
          <p>${esc(w.summary)}</p>
          ${w.metrics?.length ? `<div class="woMetrics">${w.metrics.map(m => `<span>${esc(m)}</span>`).join("")}</div>` : ""}
        </div>
      </div>
      <div class="workBody">
        <span class="workIndex">${String(i + 1).padStart(2, "0")}</span>
        <div class="workMain">
          <h3>${esc(w.title)}</h3>
          <span class="workMeta">${esc(w.category)} · ${esc(w.year)}</span>
        </div>
        ${w.stack?.length ? `<div class="workStack">${w.stack.slice(0, 3).map(t => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
        ${repoUrl ? `<a class="workRepo" href="${esc(repoUrl)}" target="_blank" rel="noopener" data-cursor="link" aria-label="View ${esc(w.title)} on GitHub"><span class="wrLong">View on GitHub</span><span class="wrShort">GitHub</span> <span class="wrArrow">↗</span></a>` : ""}
        <span class="workArrow">↗</span>
      </div>`;

    const img = card.querySelector("img");
    img.onerror = () => {
      img.remove();
      const media = card.querySelector(".workMedia");
      media.style.background = `linear-gradient(140deg, ${w.accent}44, var(--bg2))`;
    };

    card.addEventListener("click", e => {
      if (e.target.closest("a")) return;
      openLightbox(i);
    });
    grid.appendChild(card);
    workCards.push(card);
  });

  const cats = ["All", ...new Set(C.works.map(w => w.category))];
  const filters = $("filters");
  filters.innerHTML = cats.map((c, i) =>
    `<button class="filter${i === 0 ? " active" : ""}" type="button" data-cat="${esc(c)}">${esc(c)}</button>`).join("");

  filters.addEventListener("click", e => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    currentFilter = btn.dataset.cat;
    filters.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === btn));
    C.works.forEach((w, i) => {
      const show = currentFilter === "All" || w.category === currentFilter;
      workCards[i].classList.toggle("hidden", !show);
    });
  });
})();

/* ==========================================================================
   LIGHTBOX
   ========================================================================== */
let lbIndex = 0, lbList = [], lbWorkIndex = 0;

function openLightbox(i) {
  lbWorkIndex = i;
  lbList = C.works[i].gallery?.length ? C.works[i].gallery : [C.works[i].cover];
  lbIndex = 0;
  showLightbox(i, 0);
  $("lightbox").hidden = false;
  document.body.style.overflow = "hidden";
}

function showLightbox(workIndex, imgIndex) {
  const w = C.works[workIndex];
  const src = lbList[imgIndex];
  const img = $("lbImg");
  img.dataset.failed = "";
  img.onerror = () => {
    if (img.dataset.failed) return;
    img.dataset.failed = "1";
    img.removeAttribute("src");
    img.style.background = `linear-gradient(140deg, ${w.accent}44, var(--panel))`;
  };
  img.src = src;
  $("lbTitle").textContent = w.title;
  $("lbSummary").textContent = w.summary;
  setHTML($("lbMetrics"), (w.metrics || []).map(m => `<span>${esc(m)}</span>`).join(""));
  setHTML($("lbStack"), (w.stack || []).map(t => `<span>${esc(t)}</span>`).join(""));
  setHTML($("lbTags"), (w.tags || []).map(t => `<span>${esc(t)}</span>`).join(""));
  const link = $("lbLink");
  const url = w.link || (w.repo && C.github ? `https://github.com/${C.github}/${w.repo}` : "");
  if (url) {
    link.href = url;
    link.textContent = w.link && !w.repo ? "View project ↗" : "View on GitHub ↗";
    link.style.display = "";
  } else {
    link.style.display = "none";
  }
  const multi = lbList.length > 1;
  $("lbPrev").style.display = multi ? "" : "none";
  $("lbNext").style.display = multi ? "" : "none";
}

function closeLightbox() {
  $("lightbox").hidden = true;
  document.body.style.overflow = "";
}

$("lbClose").addEventListener("click", closeLightbox);
$("lbPrev").addEventListener("click", () => {
  lbIndex = (lbIndex - 1 + lbList.length) % lbList.length;
  showLightbox(lbWorkIndex, lbIndex);
});
$("lbNext").addEventListener("click", () => {
  lbIndex = (lbIndex + 1) % lbList.length;
  showLightbox(lbWorkIndex, lbIndex);
});
$("lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") closeLightbox(); });
addEventListener("keydown", e => {
  if ($("lightbox").hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") $("lbPrev").click();
  if (e.key === "ArrowRight") $("lbNext").click();
});

/* ==========================================================================
   SCROLL REVEAL
   ========================================================================== */
(function reveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      io.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  document.querySelectorAll(".work").forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 90 + "ms";
    io.observe(el);
  });
  document.querySelectorAll(".service").forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 90 + "ms";
    io.observe(el);
  });
  document.querySelectorAll(".proc").forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 80 + "ms";
    io.observe(el);
  });

  // skill bars fill when they come into view
  const bars = document.querySelectorAll(".skillBar i");
  const barIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.style.width = en.target.dataset.level + "%";
      barIO.unobserve(en.target);
    });
  }, { threshold: 0.4 });
  bars.forEach(b => barIO.observe(b));
})();

/* ==========================================================================
   CONTACT FORM
   ========================================================================== */
$("contactForm").addEventListener("submit", async e => {
  e.preventDefault();
  const status = $("formStatus");
  const data = Object.fromEntries(new FormData(e.target).entries());
  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !message) {
    status.className = "formStatus err";
    status.textContent = "Please fill in your name, email and message.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.className = "formStatus err";
    status.textContent = "That email address does not look right.";
    return;
  }

  status.className = "formStatus";
  status.textContent = "Sending...";

  const body = new URLSearchParams({
    "form-name": C.contact.formName,
    "bot-field": "",
    name, email, message,
    budget: data.budget || ""
  }).toString();

  let sent = false;
  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body
    });
    sent = res.ok;
  } catch (err) { sent = false; }

  if (sent) {
    status.className = "formStatus ok";
    status.textContent = "Message sent — I will get back to you soon.";
    e.target.reset();
  } else {
    // not on Netlify: open the visitor's mail app instead
    status.className = "formStatus ok";
    status.textContent = "Opening your mail app...";
    location.href = `mailto:${C.email}?subject=${encodeURIComponent("Portfolio enquiry from " + name)}&body=${encodeURIComponent(message + "\n\n— " + name + " (" + email + ")")}`;
  }
});

/* ==========================================================================
   BACK TO TOP
   ========================================================================== */
$("toTop").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
