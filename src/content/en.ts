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
    title: "Daniel Malmgren de Oliveira – Full-stack developer in Borås & Gothenburg",
    description:
      "Full-stack developer in Borås and former business developer. I build web solutions in React, Vue and .NET focused on real value – taking on projects now.",
  },
  role: "Full-stack developer · React, Vue, TypeScript & .NET",
  location: "Borås / Gothenburg area / Remote",
  status: "Currently: back-end developer intern at Centiro.",
  availability: "Taking on smaller projects alongside – and looking for a permanent role from May 2027.",
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
    testimonials: "Recommendations",
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
    intro: "a developer since 2020 who started in front-end and now works full-stack. I start with why, then I build it.",
    photoAlt: "Portrait of Daniel Malmgren de Oliveira",
    employmentLink: "or book a call about a role →",
  },

  about: [
    "Before I wrote code, I spent almost 20 years in strategy and business development in international settings – at DHL and for the Dutch Ministry of Foreign Affairs, among others. In 2018 I retrained – first a bootcamp, then a C# and .NET programme with an internship – and a week before the pandemic hit in 2020 I started my first developer job. My only regret is not doing it sooner.",
    "Many developers start by asking how something should be built. I almost always start with why: what value does it create, and for whom? That's why I'm good at turning fuzzy business requirements into something concrete and sustainable.",
    "Vue, React and TypeScript are my home turf. With C# and .NET I can own the whole chain, from interface to API. I do my best work in down-to-earth teams where people share – in code reviews and at the coffee machine.",
    "I use AI tools like Claude Code and GitHub Copilot daily to work faster – but I review and understand every line that ships.",
  ],

  tracks: {
    heading: "How would you like to work with me?",
    employment: {
      heading: "Employment",
      text: "I'm looking for a permanent role as a full-stack, back-end or front-end developer from May 2027 – in Borås, the Gothenburg area or remote.",
      cta: "Book a call about a role",
    },
    projects: {
      heading: "Projects & collaborations",
      text: "For smaller companies that need something built, fixed or improved – from fuzzy idea to working MVP, or making what you already have work better.",
      stepsHeading: "How it works",
      steps: [
        { title: "Short call, 15 min.", text: "You tell me about the problem – I ask why and for whom." },
        { title: "Proposal and quote.", text: "What gets built, how long it takes and what it costs." },
        { title: "Delivered in small steps.", text: "You see results early and can steer along the way." },
      ],
      invoicing: "I invoice through an umbrella company – you get a regular invoice.",
      cta: "Book a project call (15 min)",
    },
  },

  experience: [
    {
      ...base["centiro"],
      title: "Back-end developer",
      period: "Nov 2026 – May 2027",
      kind: "Internship",
      summary: "Ongoing internship focused on C# and .NET.",
    },
    {
      ...base["centiro-deltid"],
      title: "Front-end developer (part-time)",
      period: "Sep – Dec 2026",
      summary: "Upgraded the Angular version and rolled out the company's design system in the application.",
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
      summary: "To move from front-end to full-stack: a two-year programme focused on C#, .NET, Entity Framework and databases – plus React, React Native and Hono. The internships at Avarda and Centiro are part of it.",
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
        "UK-based platform that connects volunteers with startups so they can gain work experience on real projects. Helped rebuild the platform from scratch and migrate it from Vue 2 to Vue 3, with reusable components such as dashboards, charts and menus. Regularly advised leadership on technical issues.",
    },
    {
      ...base["nexer"],
      title: "Front-end developer",
      period: "Oct – Dec 2024",
      summary:
        "Booking system for laundry rooms in buildings that lacked a digital solution – C#/.NET back end and React front end.",
    },
    {
      ...base["consid"],
      title: "Front-end developer",
      period: "Jan 2023 – Jul 2024",
      summary:
        "Internal tools and client projects with measurable business value – including an onboarding tool that saves over 10 hours per new hire.",
      details: [
        "Developed a customer portal for a Swedish government agency – components, features and performance in Vue and TypeScript, plus APIs in .NET.",
        "Helped build an internal onboarding tool for Consid with sign-in, status per step and filtering.",
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
      summary: "Internal CMS for consultant profiles, assignments and availability – an internship within Lexicon's programme.",
    },
    {
      ...base["earlier-career"],
      title: "Strategy and business development",
      company: "DHL, Dutch Ministry of Foreign Affairs and others",
      place: "International",
      period: "until 2018",
      summary:
        "Almost 20 years in strategy and business development in international settings – before I retrained as a developer.",
    },
    {
      ...base["lexicon"],
      title: "C# and .NET course",
      place: "Gothenburg",
      period: "Apr 2019 – Jan 2020",
      kind: "Education",
      summary: "Ten months including an internship at Sprinta. Also front-end with HTML, CSS, JavaScript and Angular.",
    },
    {
      ...base["craft-academy"],
      title: "Full-stack bootcamp",
      place: "Gothenburg",
      kind: "Education",
      summary: "Four months, project-based: TDD and agile ways of working with Ruby on Rails, Angular and Ionic.",
    },
  ],
  experienceUi: {
    readMore: "Read more +",
    showLess: "Show less −",
    downloadCv: "Download CV (PDF) ↓",
    volunteerHeading: "Volunteer work",
    educationHeading: "Education",
  },

  projects: [
    {
      ...baseProjects["consid-onboarding"],
      name: "Onboarding tool for Consid",
      tagline: "Over 10 hours saved per new hire – around 1,000 hours a year.",
      caseStudy: {
        problem:
          "Onboarding around 100 new hires a year was handled with checklists, emails and spreadsheets. HR spent a lot of time keeping it all together and chasing status.",
        solution:
          "As part of a team, we built a web tool where every new hire has their own onboarding plan, with sign-in, status per step and filtering. I helped choose the tech and developed the tool in React and Next.js.",
        result:
          "HR can see at a glance where each person stands. The tool replaced the manual process entirely.",
      },
    },
    {
      ...baseProjects["consid-annual-report"],
      name: "Digital annual report",
      tagline: "Costs halved in the very first year.",
      caseStudy: {
        problem:
          "The client paid every year for an external service to present its annual report online, with limited control over content and layout.",
        solution:
          "A reusable template in Umbraco where an administrator adds text, images, video, charts and links to documents. The annual report page is then generated automatically.",
        result:
          "The solution replaced the external service, saved the client 50% in its first year and gave them more control over their digital reporting.",
      },
    },
    {
      ...baseProjects["ellos-value-chain"],
      name: "The value chain on the product page",
      tagline: "Where and what is the product made of? Now customers can see it directly.",
      caseStudy: {
        problem:
          "Customers and new regulations demanded more insight into how products are made – but information about materials, certifications and suppliers never reached the customer.",
        solution:
          "I built a larger component in Vue and Nuxt that shows the product's journey through the value chain: origin of materials, certifications, ratings and suppliers.",
        result:
          "Customers can see where and what the products are made of, which builds trust and helps Ellos Group meet transparency requirements.",
      },
    },
    {
      ...baseProjects["consid-cv-portal"],
      name: "CV and consultant portal",
      tagline: "From CVs in SharePoint to searchable consultant matching.",
      caseStudy: {
        problem:
          "All CVs were uploaded to a SharePoint portal with no proper search or filtering. Finding the right consultant for an assignment took time.",
        solution:
          "In a Scrum team, we built a simplified take on Cinode: consultants add their experience, skills and availability and can save tailored CVs. Consultant managers and sales filter by city, region and country, and search in detail on skills, experience, certifications and languages.",
        result:
          "Consultant managers and sales get an instant overview of who is available and find the right profile for an assignment much more easily.",
      },
    },
    {
      ...baseProjects["gethubbers"],
      label: "Side project",
      tagline: "Find coders where coders are.",
      description:
        "Recruiters and teams looking for local developers often have to go through middlemen. GetHubbers searches GitHub's API directly for developers in a city or a whole country and filters by programming language – across ten European countries, with a multilingual interface.",
    },
  ],
  testimonials: sv.testimonials.map((r) => ({
    ...r,
    ...{
      "sven-oden": { role: "Team lead at Avarda and my mentor during the internship" },
      "manoj-ranaweera": { role: "Founder of SkilledUp Life and my direct manager" },
    }[r.id],
  })),
  testimonialsMore: "More recommendations on LinkedIn ↗",
  projectUi: {
    visit: "Visit site ↗",
    source: "Source on GitHub ↗",
    problem: "Problem",
    solution: "Solution",
    result: "Result",
  },

  skills: {
    daily: sv.skills.daily.map((s) =>
      s.name === "GitHub Copilot" ? { ...s, context: "YH programme and personal projects" } : s,
    ),
    experienced: sv.skills.experienced.map((s) =>
      s.context === "Egna projekt" ? { ...s, context: "Personal projects" } : s,
    ),
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
      "Got something that needs building or fixing – or a role to fill? Get in touch and we'll take it from there.",
    email: "Email",
    phone: "Phone",
    booking: "Book a meeting",
    bookInterview: "Talk about a role →",
    bookProject: "Project meeting →",
  },
  footerGreeting: "greetings from Daniel",
};
