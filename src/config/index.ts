import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Gagan Chandra — Backend Engineer",
  author: "Gagan Chandra",
  description:
    "Backend-focused Software Engineer building REST APIs and scalable web applications. GATE 2026 qualified in CS & IT and Data Science & AI.",
  lang: "en",
  siteLogo: "/gagan-small.jpg",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/gagan-chandra" },
    { text: "Github", href: "https://github.com/gagannchandra" },
    { text: "Email", href: "mailto:gaganchandra02@gmail.com" },
  ],
  canonicalURL: "https://gaganchandra.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Gagan Chandra",
    specialty: "Backend Engineer",
    summary:
      "Final-year B.Tech CSE (AI) student focused on backend development and API-driven systems. Built projects including a URL shortener with analytics and a deployed sentiment analysis system. GATE 2026 qualified in both CS & IT and Data Science & AI.",
    email: "gaganchandra02@gmail.com",
  },

  // ✅ FIX: keep this to prevent crash
  experience: [
    {
      company: "Pranveer Singh Institute of Technology",
      position: "B.Tech — Computer Science Engineering (AI)",
      startDate: "Aug 2022",
      endDate: "Present",
      summary: [
        "Pursuing B.Tech in Computer Science Engineering (AI), CGPA: 70.09%",
        "Qualified GATE 2026 in CS & IT (316) and Data Science & AI (285)",
        "Solved 520+ DSA problems across LeetCode and HackerRank",
      ],
    },
  ],

  projects: [
    {
      name: "Shortly — URL Shortener with Analytics Dashboard",
      summary:
        "Built a full-stack URL shortener with custom aliases, REST API support, and click-tracking analytics. Designed clean backend architecture with validation, error handling, and frontend integration using vanilla JavaScript.",
      linkPreview: "https://gagannchandra.vercel.app/",
      linkSource: "https://github.com/gagannchandra/url-shortener",
      image: "/project-shortly.png",
    },
    {
      name: "Sentiment Analysis System",
      summary:
        "Developed an end-to-end sentiment analysis system using TF-IDF and Logistic Regression, exposed via a Flask API and Streamlit UI. Containerized with Docker and deployed on Render for real-time inference.",
      linkPreview: "",
      linkSource: "https://github.com/gagannchandra/sentiment-analysis",
      image: "/project-sentiment.png",
    },
  ],

  about: {
    description:
      "Hi, I'm Gagan Chandra, a backend-focused software engineer and final-year B.Tech CSE (AI) student. I build API-driven applications with clean architecture, focusing on reliability and real-world usability. My work includes REST API development, frontend integration, and deployment using modern tools. I also have a strong foundation in Data Structures and Algorithms with 520+ problems solved and GATE 2026 qualification in both CS & IT and Data Science & AI.",
    image: "/gagan-big.jpg",
  },
};
