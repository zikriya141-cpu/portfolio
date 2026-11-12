// ============================================================================
//  PORTFOLIO CONFIG
//  All the text lives here. Change values, leave the structure alone.
// ============================================================================

const CONFIG = {

  // ---------------------------------------------------------------- basics
  name: "Zikriya Khan",
  role: "Full-stack developer · ML",
  location: "Jehangira, Swabi, Pakistan",
  availability: "Open to internships and freelance work",
  email: "zikriya141@gmail.com",
  phone: "+92 333 8802939",

  intro:
    "I build ML models, the web apps around them, and the interfaces that make them usable. " +
    "Final-year CS student in Swabi, Pakistan.",

  // Link to your CV / resume
  cvUrl: "assets/Zikriya-Khan-CV.pdf",

  // Your GitHub username. Used to build the "View on GitHub" links
  // from the "repo" field of each project below.
  github: "zikriya141-cpu",

  // ---------------------------------------------------------------- socials
  socials: [
    { label: "GitHub",   icon: "GH", url: "https://github.com/zikriya141-cpu" },
    { label: "LinkedIn", icon: "in", url: "https://www.linkedin.com/in/zikriya-khan-660086417/" },
    { label: "Email",    icon: "@",  url: "mailto:zikriya141@gmail.com" }
  ],

  // ---------------------------------------------------------------- about
  about: {
    portrait: "assets/portrait.svg",
    heading: "About me",
    text: [
      "I’m Zikriya. I’m in my final year of a Computer Science degree, and most of what I build starts with a small annoyance or a question I can’t answer.",
      "The X-ray project came from wanting to know if a model could flag pneumonia without hiding how it got there. EduPredict came from watching students get one number at the end of a term and no explanation. The traffic project was an excuse to work with video and forecasting in the same place.",
      "I work mostly in Python and JavaScript. On the ML side that means PyTorch, scikit-learn, and more time cleaning data than training models. On the web side it’s Flask, FastAPI or Laravel, with plain HTML and CSS when a framework would be overkill.",
      "I’m still early in this. I’d rather ship something small that works, then improve it, than plan a perfect system I never finish."
    ],
    stats: [
      { value: "8",    label: "Projects built" },
      { value: "81%",  label: "Best model accuracy" },
      { value: "17",   label: "Tests on EduPredict" },
      { value: "2026", label: "Graduating" }
    ]
  },

  // ---------------------------------------------------------------- stack
  // Grouped by what I actually reach for. No percentage bars.
  skills: [
    { group: "ML",       items: ["Python", "PyTorch", "scikit-learn", "SHAP", "pandas"] },
    { group: "Backend",  items: ["Flask", "FastAPI", "Laravel", "MySQL", "SQLite"] },
    { group: "Frontend", items: ["JavaScript", "HTML & CSS", "Tailwind", "Chart.js"] },
    { group: "Tools",    items: ["Git", "Vite", "Streamlit", "Netlify"] }
  ],

  // ---------------------------------------------------------------- services
  services: [
    {
      title: "ML prototypes",
      text: "A model trained on your data, wrapped in a small app you can actually try. You also get a plain note on what it can and cannot do."
    },
    {
      title: "Flask / FastAPI backends",
      text: "APIs and small services with a sensible structure, auth where it’s needed, and tests around the parts that would hurt to break."
    },
    {
      title: "Laravel web apps",
      text: "Multi-role apps with real database design: customers, staff, admins, and the boring screens that hold everything together."
    },
    {
      title: "Front-end build-outs",
      text: "Turning a design into responsive HTML, CSS and JavaScript. No framework if the project doesn’t need one."
    }
  ],

  // ---------------------------------------------------------------- work
  // Filters are generated from the "category" field.
  // Covers live in assets/works/.
  works: [
    {
      title: "AI X-Ray Assistant",
      category: "AI / ML",
      year: "2026",
      cover: "assets/works/xray.svg",
      gallery: ["assets/works/xray.svg"],
      summary:
        "A chest X-ray screening tool built as my final year project. Two DenseNet121 models handle pediatric and adult scans, Grad-CAM shows what the model looked at, and the Streamlit app supports batch screening and PDF reports. Started from an open-source base by Muhammad Saad Khan.",
      note: "Two models, one screening flow, and Grad-CAM so the prediction can be checked.",
      stack: ["Python", "PyTorch", "DenseNet121", "Streamlit", "Grad-CAM"],
      metrics: ["~87% test accuracy", "98.6% sensitivity", "Pediatric + adult models", "Grad-CAM heatmaps"],
      repo: "chest-xray-analysis",
      accent: "#38bdf8",
      wide: true
    },
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
        "A student performance predictor that also explains itself. A Random Forest sorts students into Good, Average or At Risk, a second model estimates the final score, and SHAP values show which factors pushed the result.",
      note: "Predicts the score, then shows which factors moved it.",
      stack: ["Python", "Flask", "scikit-learn", "SHAP", "SQLAlchemy"],
      metrics: ["81% test accuracy", "82.5% CV F1", "MAE 3.37 / R² 0.86", "17 pytest tests"],
      repo: "EduPredict",
      accent: "#2dd4bf",
      wide: true
    },
    {
      title: "Traffic Intelligence",
      category: "AI / ML",
      year: "2026",
      cover: "assets/works/traffic.svg",
      gallery: ["assets/works/traffic.svg", "assets/works/traffic-logo.png"],
      summary:
        "A traffic system built around one question: can you forecast congestion early enough to do something about it? A Bi-LSTM with attention forecasts lane-level congestion, YOLOv8 counts vehicles from a live feed, and a simple controller splits green time between lanes.",
      note: "Forecasts congestion, counts cars, and gives lanes green time.",
      stack: ["Python", "PyTorch", "YOLOv8", "FastAPI", "ONNX"],
      metrics: ["Lane-level forecasting", "Bi-LSTM + attention", "ONNX inference", "Render deploy"],
      repo: "AI-Traffic-Intelligence-and-Congestion-Predictor",
      accent: "#fbbf24",
      wide: true
    },
    {
      title: "EcoScrap",
      category: "Web",
      year: "2026",
      cover: "assets/works/ecoscrap.svg",
      gallery: ["assets/works/ecoscrap.svg"],
      summary:
        "A scrap recycling marketplace built on Laravel. Customers browse and order, agents manage pickups, and admins control categories and bookings. Three roles, one database, a lot of edge cases.",
      note: "Customers, agents and admins. The unglamorous parts are the point.",
      stack: ["Laravel", "PHP", "Blade", "MySQL", "Tailwind"],
      metrics: ["3 role tiers", "12 migrations", "Full CRUD admin", "Order tracking"],
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
        "The page you’re on. Hand-written HTML, CSS and JavaScript with a single config file for the content. No framework, no build step, no dependencies.",
      note: "Hand-written, no framework, one config file.",
      stack: ["HTML", "CSS", "JavaScript", "Netlify Forms"],
      metrics: ["No dependencies", "Single config file", "Light & dark", "Keyboard lightbox"],
      repo: "portfolio",
      accent: "#818cf8"
    },
    {
      title: "TaskFlow",
      category: "Web",
      year: "2026",
      cover: "assets/works/taskflow.svg",
      gallery: ["assets/works/taskflow.svg"],
      summary:
        "A task manager that keeps its data. An Express API sits on top of SQLite, and a plain-JavaScript front end does the rest: create, edit, toggle between pending and completed, delete. Built in the first week of a remote internship as a full working flow rather than a demo, then put through a 12-point test checklist.",
      note: "Create, edit, toggle, delete — and it survives a refresh.",
      stack: ["Node.js", "Express", "SQLite", "JavaScript", "REST API"],
      metrics: ["4 REST endpoints", "SQLite persistence", "12-point test checklist", "Server-side validation"],
      repo: "taskflow",
      accent: "#f472b6",
      wide: true
    },
    {
      title: "LearnTrack",
      category: "Web",
      year: "2026",
      cover: "assets/works/learntrack.svg",
      gallery: ["assets/works/learntrack.svg"],
      summary:
        "A learning platform for small tuition centres. Instructors publish a course with lesson text and multiple-choice questions; students read the lesson, sit the quiz and see their attempt history. Answers are scored on the server against the stored key, so a tampered browser cannot fake a result. Passwords are hashed with bcrypt, and foreign keys tie users, courses, questions and attempts together.",
      note: "Courses, quizzes and attempts — scored on the server, not in the browser.",
      stack: ["Node.js", "Express", "SQLite", "bcryptjs", "JavaScript"],
      metrics: ["8 REST endpoints", "Server-side scoring", "4 linked tables", "Student + instructor roles"],
      repo: "learntrack",
      accent: "#c084fc",
      wide: true
    },
    {
      title: "OrderFlow",
      category: "Web",
      year: "2026",
      cover: "assets/works/orderflow.svg",
      gallery: ["assets/works/orderflow.svg"],
      summary:
        "A hardware storefront and an admin order desk in one Express app. Customers browse live stock, build a cart and check out; the server re-checks every quantity and prices the order from SQLite, ignoring whatever the browser sent. Admins move orders through a fixed lifecycle — Pending to Confirmed to Fulfilled, or Cancelled — and cancelling puts the stock back.",
      note: "Stock and totals are settled on the server, not in the browser.",
      stack: ["Node.js", "Express", "node:sqlite", "JavaScript", "REST API"],
      metrics: ["5 REST endpoints", "3 linked tables", "4 API tests", "Stock restored on cancel"],
      repo: "orderflow",
      accent: "#f97316",
      wide: true
    }
  ],

  // ---------------------------------------------------------------- process
  process: [
    { step: "01", title: "Understand", text: "I ask questions until the problem is clear. If the data isn’t there or the scope is wrong, I’ll say so before writing code." },
    { step: "02", title: "Sketch",     text: "A short plan: what the first version does, what it deliberately doesn’t do, and how we’ll know it works." },
    { step: "03", title: "Build",      text: "Small commits, readable code, and tests around the parts that would hurt to break." },
    { step: "04", title: "Hand over",  text: "A running deploy, a short README, and a walkthrough. You should be able to run it without me." }
  ],

  // ---------------------------------------------------------------- contact
  contact: {
    heading: "Say hello",
    text: "Have a project, an internship, or a question? Email me directly. I read everything and usually reply within a day or two.",
    // The form is a Netlify form. Elsewhere it opens the visitor’s mail app.
    formName: "portfolio-contact"
  },

  // ---------------------------------------------------------------- section copy
  workSub: "Eight projects, from a chest X-ray screener to this page.",
  footerHeading: "Get in touch",
  footerNote: "Hand-written HTML, CSS and JS.",

  // Year is detected automatically; this is only a fallback
  year: "2026"
};
