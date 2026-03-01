import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  // Your GitHub Pages URL
  website: "https://<your-username>.github.io/<your-repo-name>/", 
  
  author: "Eduardo Carrasco Jr.",
  
  // This description is injected into your HTML <meta> tags for Google SEO
  desc: "Research, code, and writings on AI, mathematics, and philosophy by a Machine Learning Engineer based in Henderson, NV.",
  
  // This appears in the browser tab and the main site header
  title: "Eduardo Carrasco Jr.",
  
  ogImage: "default-og.png",
  lightAndDarkMode: true, // Let users toggle between terminal dark and light mode
  postPerPage: 5,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-US"],
} as const;

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/<your-username>",
    linkTitle: `Eduardo's GitHub`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/<your-profile>",
    linkTitle: `Eduardo on LinkedIn`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/<your-channel>",
    linkTitle: `Eduardo's YouTube Channel`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:your.email@example.com",
    linkTitle: `Send an email to Eduardo`,
    active: true,
  }
];