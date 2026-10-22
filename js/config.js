// ============================================================================
//  PORTFOLIO CONFIG  —  apna saara content sirf yahan change karo.
//  Structure / layout nahi chhedna hai, sirf values badalni hain.
// ============================================================================

const CONFIG = {

  // ---------------------------------------------------------------- basics
  name: "Zikriya Khan",
  role: "Full-Stack Developer · AI / ML Engineer",
  location: "Jehangira, District Swabi, Pakistan",
  availability: "Open to new work",
  email: "zikriya141@gmail.com",
  phone: "+92 333 8802939",

  tagline:
    "I build real, working software — AI systems that predict, web apps people " +
    "actually use, and interfaces that feel good to touch.",

  intro:
    "Final-year Computer Science student focused on AI and full-stack development. " +
    "I like taking a messy real-world problem, modelling it properly, and shipping " +
    "something that works end to end.",

  marquee: [
    "Python",
    "Flask",
    "FastAPI",
    "Laravel",
    "Machine Learning",
    "Deep Learning",
    "Tailwind CSS",
    "JavaScript"
  ],

  // Link to your CV / resume (leave "" to hide the button)
  cvUrl: "",

  // Your GitHub username — used to build every "View on GitHub" link
  // automatically from the "repo" field of each project below.
  github: "zikriya141-cpu",

  // ---------------------------------------------------------------- socials
  socials: [
    { label: "GitHub",   icon: "⌥",  url: "https://github.com/zikriya141-cpu" },
    { label: "LinkedIn", icon: "in", url: "https://www.linkedin.com/in/zikriya-khan-660086417/" },
    { label: "Email",    icon: "@",  url: "mailto:zikriya141@gmail.com" }
  ],

  // ---------------------------------------------------------------- about
  about: {
    portrait: "assets/portrait.svg",   // apni photo yahan (jpg/png bhi chalega)
    heading: "A little about me",
    text: [
      "I'm Zikriya — I build things that are heavy on the logic and still easy on the eyes.",
      "Most of my work sits where machine learning meets the web: a student-performance predictor, a traffic-congestion system, and a marketplace built on Laravel. Every one of them started as a 'what if this actually worked?' idea and ended with a deployed, tested application.",
      "I build the model and the interface, the database and the deployment — and I care about the boring parts too: tests, error states, and code that the next person can read."
    ],
    stats: [
      { value: "4",   label: "Projects shipped" },
      { value: "81%", label: "Model test accuracy" },
      { value: "17",  label: "Automated tests" },
      { value: "3",   label: "Stacks in production" }
    ]
  },

  // ---------------------------------------------------------------- skills
  skills: [
    { name: "Python",           level: 92 },
    { name: "Machine Learning", level: 86 },
    { name: "Laravel / PHP",    level: 84 },
    { name: "JavaScript",       level: 78 },
    { name: "HTML & CSS",       level: 90 },
    { name: "Deep Learning",    level: 74 }
  ],

  tools: [
    "Python", "Flask", "FastAPI", "PyTorch", "Scikit-learn", "SHAP",
    "Laravel", "PHP", "Blade", "MySQL", "SQLite", "JavaScript",
    "Tailwind CSS", "Bootstrap 5", "Chart.js", "Vite", "Git", "Netlify"
  ],

  // ---------------------------------------------------------------- services
  services: [
    {
      icon: "◐",
      title: "AI / ML Systems",
      text: "Classification, forecasting and explainable models — trained, evaluated, and wired into a working app."
    },
    {
      icon: "◇",
      title: "Full-Stack Web Apps",
      text: "Laravel and Flask applications with real auth, roles, dashboards and clean database design."
    },
    {
      icon: "△",
      title: "APIs & Backends",
      text: "REST APIs with validation, error handling, background jobs and documentation."
    },
    {
      icon: "◎",
      title: "Front-End Interfaces",
      text: "Responsive, accessible dashboards and landing pages — built to look sharp on every screen."
    }
  ],

  // ---------------------------------------------------------------- work
  // Filters are auto-generated from the "category" field.
  // Images live in assets/works/ (the .svg covers are generated placeholders).
  works: [
    {
      title: "EduPredict",
      category: "AI / ML",
      year: "2026",
      cover: "assets/works/edupredict.svg",
      gallery: [
        "assets/works/edupredict.svg",
        "assets/works/edupredict-metrics.png",
        "assets/works/edupredict-scatter.png"
      ],
      summary:
        "A student-performance prediction and recommendation system. A tuned Random Forest classifies each student as Good, Average or At Risk, a second regressor estimates the exact final score, and a rule engine plus SHAP values explain exactly which factors pushed the result.",
      stack: ["Python", "Flask", "Scikit-learn", "SHAP", "SQLAlchemy", "Bootstrap 5", "Chart.js"],
      metrics: ["81% test accuracy", "82.5% CV F1", "MAE 3.37 / R² 0.86", "17 pytest tests"],
      repo: "EduPredict",
      accent: "#2dd4bf",
      wide: true
    },
    {
      title: "Traffic Intelligence & Congestion Control",
      category: "AI / ML",
      year: "2026",
      cover: "assets/works/traffic.svg",
      gallery: ["assets/works/traffic.svg", "assets/works/traffic-logo.png"],
      summary:
        "A research-grade traffic system: Bi-LSTM with multi-head self-attention forecasts lane-level congestion, YOLOv8 counts vehicles per lane from a live camera, and a proportional controller allocates green time per lane. Exported to ONNX for fast inference.",
      stack: ["Python", "PyTorch", "YOLOv8", "FastAPI", "ONNX", "Tailwind CSS"],
      metrics: ["Lane-level forecasting", "Bi-LSTM + attention", "ONNX inference", "Render blueprint"],
      repo: "AI-Traffic-Intelligence-and-Congestion-Predictor",
      accent: "#fbbf24",
      wide: true
    },
    {
      title: "EcoScrap",
      category: "Web App",
      year: "2026",
      cover: "assets/works/ecoscrap.svg",
      gallery: ["assets/works/ecoscrap.svg"],
      summary:
        "A scrap-recycling marketplace built on Laravel 13 with a three-tier role system. Customers browse categories, add items to a cart, place orders and track delivery, while agents manage pickups and admins control categories, sub-admins and bookings.",
      stack: ["Laravel 13", "PHP", "Blade", "MySQL", "Tailwind CSS 4", "Vite"],
      metrics: ["3 role tiers", "12 DB migrations", "Full CRUD admin", "Order tracking"],
      repo: "Ecoscrap",
      accent: "#4ade80"
    },
    {
      title: "This Portfolio",
      category: "Web",
      year: "2026",
      cover: "assets/works/portfolio.svg",
      gallery: ["assets/works/portfolio.svg"],
      summary:
        "The site you are reading. A hand-built creative portfolio with a loading sequence, a filterable work grid, a keyboard-navigable lightbox, animated skill bars, a dark/light theme and a working contact form — no frameworks, no build step.",
      stack: ["HTML", "CSS", "JavaScript", "IntersectionObserver", "Netlify Forms"],
      metrics: ["No dependencies", "Single config file", "Lightbox + filters", "Light & dark theme"],
      repo: "portfolio",
      accent: "#818cf8"
    }
  ],

  // ---------------------------------------------------------------- process
  process: [
    { step: "01", title: "Understand", text: "I dig into the actual problem, the data and the people who will use it before writing any code." },
    { step: "02", title: "Model",      text: "For ML work that means cleaning data, choosing features and validating the approach with real metrics." },
    { step: "03", title: "Build",      text: "Clean, tested code — routes, models, views, auth, and the error states nobody wants to build." },
    { step: "04", title: "Ship",       text: "Deploy it, watch it in production, and fix what breaks. A project is not done until it runs." }
  ],

  // ---------------------------------------------------------------- contact
  contact: {
    heading: "Let's build something",
    text: "Whether it is a full-stack application, an AI model, or a polished front-end — I am always up for a good problem. Drop a message and I will reply.",
    // The form is a Netlify form (works on Netlify Drop). Elsewhere it
    // opens the visitor's mail app with the message pre-filled.
    formName: "portfolio-contact"
  },

  // ---------------------------------------------------------------- footer
  footerNote: "Designed and built from scratch. No templates.",

  // ---------------------------------------------------------------- extras
  heroBadge: "Open to work",
  // Year is auto-detected, this is only a fallback
  year: "2026"
};
