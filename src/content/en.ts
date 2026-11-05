import type { Content } from "./types";
import { sv } from "./sv";

// Data that isn't language-specific (stacks, links, flags) is taken from the Swedish
// version, so only the wording needs to be kept in sync here.
const base = Object.fromEntries(sv.experience.map((e) => [e.id, e]));
const baseProjects = Object.fromEntries(sv.projects.map((p) => [p.id, p]));

export const en: Content = {
  locale: "en",
  path: "/en/",
  meta: {
    title: "Daniel Malmgren de Oliveira – Full-stack developer",
    description:
      "Full-stack developer · React, Vue, TypeScript & .NET. Open to smaller projects now, and permanent roles from May 2027. Borås / Gothenburg area / Remote.",
  },
  role: "Full-stack developer · React, Vue, TypeScript & .NET",
  location: "Borås / Gothenburg area / Remote",
  status: "Currently: .NET internship at Centiro (Dec 2026 – May 2027).",
  availability: "Open to smaller projects now, and permanent roles from May 2027.",
  newTab: "(opens in a new tab)",

  nav: {
    label: "Main menu",
    language: "Language",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  sections: {
    about: "About",
    collaboration: "Work with me",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },

  hero: {
    headline: {
      before: "The business developer who found a home in code – building software with ",
      emphasis: "real value",
      after: " as my compass.",
    },
    greeting: "Hi, I'm",
    intro: "a full-stack developer since 2020. I start with why – then I build it.",
    photoAlt: "Portrait of Daniel Malmgren de Oliveira",
    projectLink: "or discuss a project →",
  },

  about: [
    "Before I wrote code, I worked in business development, marketing and strategy. I switched careers a week before the pandemic hit in 2020 – my only regret is not doing it sooner.",
    "Many developers start by asking how something should be built. I almost always start with why: what value does it create, and for whom? That's why I'm good at turning fuzzy business requirements into something concrete and sustainable.",
    "Vue, React and TypeScript are my home turf. Now I'm adding C# and .NET to own the whole chain, from interface to API. I do my best work in down-to-earth teams where people share – in code reviews and at the coffee machine.",
  ],

  tracks: {
    heading: "How would you like to work with me?",
    employment: {
      heading: "Employment",
      text: "I'm looking for a permanent role as a full-stack, back-end or front-end developer from May 2027 – in Borås, the Gothenburg area or remote.",
      cta: "Book a call",
    },
    projects: {
      heading: "Projects & collaborations",
      text: "Open to selected projects and collaborations – from fuzzy idea to working MVP.",
      cta: "Book a project meeting",
    },
  },

  experience: [
    {
      ...base["centiro"],
      title: "Back-end developer",
      period: "Dec 2026 – May 2027",
      kind: "Internship",
      summary: "Ongoing internship focused on C# and .NET.",
    },
    {
      ...base["centiro-deltid"],
      title: "Front-end developer (part-time)",
      period: "Sep – Dec 2026",
      summary: "Upgraded the framework version and implemented the company's design system.",
    },
    {
      ...base["avarda"],
      title: "Back-end developer",
      period: "May – Jun 2026",
      kind: "Internship",
      summary:
        "Rebuilt the controller behind the consumer-loan application flow in .NET/Umbraco.",
      details: [
        "Fixed binding, mapping and serialisation so the application flow worked end to end.",
        "Derived the right product from CMS metadata and routed it to the right API endpoint.",
        "Built a new menu giving country editors control over preferred, allowed and blocked countries.",
      ],
    },
    {
      ...base["yh"],
      title: "C# and .NET",
      company: "Higher Vocational Education (YH)",
      period: "Sep 2025 – Jun 2027",
      kind: "Education",
      summary: "Two-year programme in C#, .NET, Entity Framework and databases.",
    },
    {
      ...base["one-sky"],
      title: "Full-stack developer",
      place: "Remote",
      period: "Apr – Jun 2025",
      kind: "Volunteer",
      summary:
        "Contributed to the MVP of a non-profit gamified platform: a Next.js API with PostgreSQL and a React Native mobile app.",
    },
    {
      ...base["skilledup"],
      title: "Front-end developer",
      place: "Remote",
      period: "Dec 2024 – Apr 2025",
      kind: "Volunteer",
      summary:
        "UK-based platform that connects volunteers with startups so they can gain work experience on real projects. Worked remotely with the development team and helped migrate the platform from Vue 2 to Vue 3.",
    },
    {
      ...base["nexer"],
      title: "Front-end developer",
      period: "Oct – Dec 2024",
      summary:
        "Project with a C#/.NET back end and a React front end, focused on the integration between them.",
    },
    {
      ...base["consid"],
      title: "Front-end developer",
      period: "Jan 2023 – Jul 2024",
      summary: "Internal tools and client projects with measurable business value.",
      details: [
        "Built an internal onboarding tool for Consid with sign-in and status tracking – saving over 10 hours per new hire.",
        "Client project: an in-house digital annual report replaced an external service – production costs nearly halved.",
        "Modernised a custom CMS with reusable components.",
        "Contributed to a consultant-matching portal with sign-up, dashboards and advanced search.",
      ],
    },
    {
      ...base["ellos"],
      title: "Front-end developer",
      period: "Aug 2021 – Jan 2023",
      summary:
        "Reusable components for four web shops that had to hold up during campaigns and Black Friday.",
      details: [
        "Worked closely with e-commerce managers and UX to prioritise features and improve performance.",
        "Designed reusable components for campaign areas, countdowns and landing pages.",
        "Built components for supply-chain transparency: manufacturer, country of origin and certifications.",
        "Integrated third-party services such as AR and Trustpilot.",
      ],
    },
    {
      ...base["wideco"],
      title: "Front-end developer",
      period: "Mar 2020 – Jun 2021",
      summary: "Dashboard for real-time data from IoT devices, with charts, lists, alarms and maps.",
      details: [
        "Improved quality with unit tests for core components.",
        "Owned the API integrations.",
      ],
    },
    {
      ...base["sprinta"],
      title: "Web developer",
      place: "Gothenburg",
      period: "Sep 2019 – Jan 2020",
      kind: "Internship",
      summary: "Internal CMS for consultant profiles, assignments and availability.",
    },
  ],
  experienceUi: {
    readMore: "Read more +",
    showLess: "Show less −",
    downloadCv: "Download CV (PDF) ↓",
  },

  projects: [
    {
      ...baseProjects["gethubbers"],
      tagline: "Find coders where coders are.",
      description:
        "Recruiters and teams looking for local developers often have to go through middlemen. GetHubbers searches GitHub's API directly for developers in a city or a whole country and filters by programming language – across ten European countries, with a multilingual interface.",
    },
  ],
  projectUi: { visit: "Visit site ↗", source: "Source on GitHub ↗" },

  skills: {
    daily: sv.skills.daily.map((s) =>
      s.name === "C# / .NET" ? { ...s, note: "currently deepening (YH programme)" } : s,
    ),
    experienced: sv.skills.experienced,
    headings: {
      daily: "Work with daily",
      experienced: "Experienced with",
      languages: "Languages",
    },
  },
  languages: [
    { name: "Swedish", level: "fluent" },
    { name: "English", level: "fluent" },
    { name: "Portuguese", level: "fluent" },
    { name: "Dutch", level: "good" },
    { name: "German", level: "basic" },
  ],

  contact: {
    heading: "Let's grab a coffee and talk about next steps.",
    summary:
      "Developer since 2020 · e-commerce, public sector, IoT and consulting · front end with a .NET back end – currently at Centiro.",
    email: "Email",
    phone: "Phone",
    booking: "Book a meeting · 30 min",
    bookInterview: "Talk about a role →",
    bookProject: "Project meeting →",
    altEmail: "Alternative email:",
  },
  footerGreeting: "greetings from Daniel",
};
