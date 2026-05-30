export const siteConfig = {
  name: "Gagan Chandra",
  title: "Gagan Chandra | Backend Engineer & AI Developer",
  description:
    "Backend Engineer & AI Developer building scalable APIs, intelligent applications, and production-ready software.",
  url: "https://gagannchandra.vercel.app",
  ogImage: "/og.png",
  email: "gaganchandra02@gmail.com",
  location: "Kanpur, Uttar Pradesh, India",
  github: "https://github.com/gagannchandra",
  linkedin: "https://linkedin.com/in/gagan-chandra",
  portfolio: "https://gagannchandra.vercel.app",
  /** Upload resume to public/resume.pdf */
  resumeUrl: "/resume.pdf",
  githubUsername: "gagannchandra",
  githubJoinYear: 2020,
  tagline: "Still learning. Always building.",
};

export const hero = {
  greeting: "Hi, I'm Gagan Chandra",
  subheadline:
    "Backend Engineer & AI Developer building scalable software and intelligent systems.",
  description:
    "I build APIs, AI-powered applications, backend infrastructure, and production-ready software focused on performance, scalability, and user experience.",
};

export const about = {
  bio: "I am a final-year Computer Science student specializing in Artificial Intelligence who enjoys building backend systems, machine learning applications, developer tools, and full-stack products.",
  focus: [
    "Backend Engineering",
    "API Design",
    "AI Applications",
    "Machine Learning Deployment",
    "Database Systems",
    "Software Architecture",
    "Developer Tooling",
  ],
  education: {
    degree: "B.Tech CSE (AI)",
    school: "PSIT, AKTU",
    graduation: "July 2026",
  },
  metrics: [
    { label: "DSA Problems", value: "520+" },
    { label: "GATE 2026", value: "Qualified" },
    { label: "Deployments", value: "Production" },
    { label: "Projects", value: "Full-Stack" },
  ],
};

export const skillCategories = [
  {
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "XGBoost",
      "LLM Integration",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis"],
  },
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Git",
      "Linux",
      "GitHub Actions",
      "CI/CD",
      "Render",
      "Railway",
      "Vercel",
    ],
  },
];

export const projects = [
  {
    id: "healthai",
    name: "HealthAI",
    tagline: "Symptom-based disease prediction with ensemble ML",
    github: "https://github.com/gagannchandra/healthai-disease-prediction",
    live: "https://healthai-disease-prediction.vercel.app/",
    demo: null,
    gradient: "from-indigo-500/20 via-violet-500/10 to-slate-900",
    tech: ["Python", "FastAPI", "Scikit-learn", "React", "Tailwind"],
    highlights: [
      "87.84% accuracy across 141 disease classes",
      "Soft-voting ensemble over Decision Tree, RF, Naive Bayes",
      "Voice symptom input via Web Speech API",
      "~5.3 ms avg response, ~187 req/sec per core",
    ],
    metrics: [
      { label: "Accuracy", value: "87.84%" },
      { label: "Classes", value: "141" },
    ],
  },
  {
    id: "github-health",
    name: "GitHub Repository Health Checker",
    tagline: "AI-powered repository health analysis",
    github: "https://github.com/gagannchandra/github-health-checker",
    live: "https://github-health-checker-ktmb.onrender.com/",
    demo: "https://youtu.be/M27N7L4T-bE",
    gradient: "from-violet-500/20 via-indigo-500/10 to-slate-900",
    tech: ["FastAPI", "GitHub API", "LLaMA 3.1", "Uvicorn"],
    highlights: [
      "Concurrent GitHub API metric collection",
      "NVIDIA LLaMA 3.1 structured analysis",
      "Active / Inactive / Needs Review badges",
      "Async FastAPI with dark card UI",
    ],
    metrics: [
      { label: "Model", value: "LLaMA 3.1" },
      { label: "API", value: "Async" },
    ],
  },
  {
    id: "shortly",
    name: "Shortly",
    tagline: "URL shortener with analytics & QR codes",
    github: "https://github.com/gagannchandra/shortly-url-shortener",
    live: "https://shortly-pxjs.onrender.com/",
    demo: null,
    gradient: "from-purple-500/20 via-indigo-500/10 to-slate-900",
    tech: ["Flask", "MongoDB", "Docker", "GitHub Actions"],
    highlights: [
      "MongoDB TTL indexes for auto-expiring links",
      "QR codes as base64 on every new link",
      "14-day analytics chart with zero-fill",
      "Multi-stage Docker + CI test suite",
    ],
    metrics: [
      { label: "Stack", value: "Flask v2" },
      { label: "Deploy", value: "Docker" },
    ],
  },
  {
    id: "taskflow",
    name: "TaskFlow",
    tagline: "Team task manager with role-based access",
    github: "https://github.com/gagannchandra/team-task-manager",
    live: "https://team-task-managerr.up.railway.app",
    demo: null,
    gradient: "from-blue-500/20 via-indigo-500/10 to-slate-900",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    highlights: [
      "JWT + bcrypt with Admin vs Member roles",
      "Kanban board with status tracking",
      "Single Railway service monorepo deploy",
      "express-validator on all inputs",
    ],
    metrics: [
      { label: "Stack", value: "MERN" },
      { label: "Auth", value: "JWT RBAC" },
    ],
  },
];

export type Achievement = {
  title: string;
  value: string;
  description: string;
  tag?: string;
};

export const achievements: Achievement[] = [
  {
    title: "DSA Problems Solved",
    value: "520+",
    description: "LeetCode, GeeksforGeeks & HackerRank combined",
  },
  {
    title: "2026 Dual Qualifier",
    value: "GATE",
    description: "Qualified in Computer Science & IT and Data Science & AI",
  },
  {
    title: "HackerRank",
    value: "5-Star",
    description: "Achieved across Problem Solving and Python tracks",
  },
  {
    title: "Salesforce Agentblazer",
    value: "Champion",
    description: "Achieved Mountaineer Rank with 46+ badges earned",
  },
];

export const experience = [
  {
    company: "Independent Software Developer",
    role: "Backend & AI Engineer",
    start: "Jan 2025",
    end: "Present",
    highlights: [
      "Backend systems & REST API development",
      "AI integration & ML model deployment",
      "Database design & optimization",
      "DevOps, CI/CD & production deployment",
    ],
  },
];

export type CertificationIconId = "harvard" | "google" | "ibm" | "coursera";

export const certifications: {
  name: string;
  issuer: string;
  icon: CertificationIconId;
}[] = [
  {
    name: "CS50: Introduction to Computer Science",
    issuer: "Harvard University",
    icon: "harvard",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    icon: "google",
  },
  {
    name: "Introduction to Data Science",
    issuer: "IBM (edX)",
    icon: "ibm",
  },
  {
    name: "Agile with Atlassian Jira",
    issuer: "Coursera",
    icon: "coursera",
  },
];

export const navLinks = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Achievements", href: "#achievements" },
];
