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

  projects: [
    {
      name: "Shortly — URL Shortener with Analytics Dashboard",
      summary:
        "Built a full-stack URL shortener supporting custom aliases, REST API access, and click-tracking analytics. Designed clean backend architecture with validation and error handling, and integrated a responsive frontend using vanilla JavaScript.",
      linkPreview: "https://gagannchandra.vercel.app/",
      linkSource: "https://github.com/gagannchandra/url-shortener",
      image: "/project-shortly.png",
    },
    {
      name: "Sentiment Analysis System",
      summary:
        "Developed an end-to-end sentiment analysis system using TF-IDF and Logistic Regression, exposed via a Flask API with a Streamlit interface. Containerized with Docker and deployed on Render for real-time inference.",
      linkPreview: "",
      linkSource: "https://github.com/gagannchandra/sentiment-analysis",
      image: "/project-sentiment.png",
    },
  ],

  about: {
    description:
      "Hi, I'm Gagan Chandra, a final-year B.Tech CSE (AI) student focused on backend development and system design. I enjoy building API-driven applications with clean architecture and real-world usability. My work includes developing REST APIs, integrating frontend interfaces, and deploying applications using modern tools. Alongside development, I have a strong foundation in Data Structures and Algorithms with 520+ problems solved and a GATE 2026 qualification in both CS & IT and Data Science & AI.",
    image: "/gagan-big.jpg",
  },
};
