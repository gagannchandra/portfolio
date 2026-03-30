import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Gagan Chandra — Backend Engineer & AI Developer",
  author: "Gagan Chandra",
  description:
    "Final-year B.Tech CSE (AI) student specializing in scalable backend systems and ML pipelines. GATE 2026 qualified in both CS and Data Science/AI. Salesforce Agentblazer Champion.",
  lang: "en",
  siteLogo: "/gagan-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/gagan-chandra" },
    { text: "Github", href: "https://github.com/gagannchandra" },
    { text: "Email", href: "mailto:gaganchandra02@gmail.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://gaganchandra.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Gagan Chandra",
    specialty: "Backend Engineer & AI Developer",
    summary:
      "Final-year B.Tech CSE (AI) student at PSIT, building production-ready backend systems and ML pipelines. GATE 2026 qualified in both CS & IT and Data Science & AI. Salesforce Agentblazer Champion with 46+ Trailhead badges.",
    email: "gaganchandra02@gmail.com",
  },
  experience: [
    {
      company: "Pranveer Singh Institute of Technology",
      position: "B.Tech — Computer Science Engineering (AI)",
      startDate: "Aug 2022",
      endDate: "Present",
      summary: [
        "Pursuing B.Tech in Computer Science Engineering with specialization in Artificial Intelligence. CGPA: 70.09%.",
        "Qualified GATE 2026 in both CS & IT (Score: 316) and Data Science & AI (Score: 285) — one of very few candidates to clear both tracks in the same year.",
        "Solved 520+ DSA problems on LeetCode and HackerRank. Earned 5-Star rating in both Problem Solving and Python on HackerRank (top percentile globally).",
      ],
    },
    {
      company: "Salesforce Trailhead",
      position: "Agentblazer Champion — Mountaineer Rank",
      startDate: "2023",
      endDate: "Present",
      summary: [
        "Achieved Agentblazer Champion status with Mountaineer Rank, earning 46+ Trailhead badges across Salesforce platform modules including AI, automation, and CRM fundamentals.",
        "Deep hands-on knowledge of role-based permission models, platform architecture, and AI agent design patterns — directly aligned with enterprise engineering culture.",
      ],
    },
    {
      company: "Self-Directed Engineering",
      position: "Backend & ML Engineer (Project Work)",
      startDate: "Jan 2026",
      endDate: "Present",
      summary: [
        "Architected and shipped three production-grade projects — a Retail Order Management System, a Binance Futures Trading Bot, and an NLP Sentiment Analysis pipeline — each with modular architecture, full test coverage, and operational observability.",
        "Certifications: Harvard CS50, Google AI Essentials, IBM Introduction to Data Science, and Infosys OOP & Programming Fundamentals series.",
      ],
    },
  ],
  projects: [
    {
      name: "Retail Order & Inventory System",
      summary:
        "Scalable Node.js + MySQL backend serving 5+ entity domains with RBAC-secured REST APIs, 30+ Postman test cases, and a React UI. Reduced data redundancy and improved join performance by 40%+ through strategic indexing.",
      linkPreview: "/",
      linkSource: "https://github.com/gagannchandra/retail-order-inventory-management",
      image: "/project-retail.png",
    },
    {
      name: "Binance Futures Testnet Trading Bot",
      summary:
        "4-layer modular CLI trading bot in Python with HMAC-SHA256 signing, rotating structured logs across 10+ event types, and schema-validated order inputs. Zero credential exposure across 100% of API calls.",
      linkPreview: "/",
      linkSource: "https://github.com/gagannchandra",
      image: "/project-trading.png",
    },
    {
      name: "Sentiment Analysis of Text Reviews",
      summary:
        "End-to-end NLP pipeline on 50,000 IMDb reviews — 89% LSTM accuracy, 4 points above Logistic Regression baseline. Sub-200ms inference via Flask API with a live Streamlit dashboard.",
      linkPreview: "/",
      linkSource: "https://github.com/gagannchandra",
      image: "/project-sentiment.png",
    },
  ],
  about: {
    description: "Hi, I'm Gagan Chandra — a backend engineer and AI developer in my final year of B.Tech CSE (Artificial Intelligence) at Pranveer Singh Institute of Technology. I build production-grade systems with real architecture decisions: normalized schemas, RBAC, structured logging, test suites, and modular design. My work spans REST API design in Node.js, CLI tooling in Python, and ML pipelines using TensorFlow and Scikit-learn — always with a focus on reliability, security, and observability. Outside engineering, I'm a GATE 2026 qualifier across two tracks, a Salesforce Agentblazer Champion, and a competitive programmer with 520+ DSA problems solved and a 5-star HackerRank rating.",
    image: "/gagan-big.jpg",
  },
};

// #5755ff
