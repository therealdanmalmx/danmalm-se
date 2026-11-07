export type Locale = "sv" | "en";

export type Experience = {
  id: string;
  title: string;
  company: string;
  place: string;
  period: string;
  // Shown as a label, e.g. "LIA" or "Volunteer".
  kind?: string;
  // Education entries don't count as places a skill was used.
  education?: boolean;
  // Listed under the volunteer heading, after paid work.
  volunteer?: boolean;
  // Kept in the content but not shown on the page.
  hidden?: boolean;
  summary: string;
  details?: string[];
  stack: string[];
};

export type Project = {
  id: string;
  name: string;
  // Live site; the project name links here. Cases for internal tools have none.
  url?: string;
  // Left-column label, e.g. "Case · Consid" or "Eget projekt".
  label?: string;
  tagline?: string;
  // What problem the project solves.
  description?: string;
  // Problem / solution / result, shown as three blocks.
  caseStudy?: { problem: string; solution: string; result: string };
  stack: string[];
  // Only set for public repositories.
  repo?: string;
};

// A LinkedIn recommendation, quoted in its original language.
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  // How the person worked with Daniel, e.g. "Direct manager".
  relation: string;
};

export type Skill = {
  name: string;
  // Stack labels in `experience` that count as this skill; defaults to [name].
  match?: string[];
  // Used at every workplace, without listing it in each stack.
  everywhere?: boolean;
  // Shown instead of the company list when no workplace stack includes the skill.
  context?: string;
  note?: string;
};

// Everything that differs between the Swedish and English page.
export type Content = {
  locale: Locale;
  path: string;
  meta: { title: string; description: string };
  role: string;
  location: string;
  status: string;
  availability: string;
  newTab: string;
  nav: {
    label: string;
    language: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  sections: {
    about: string;
    collaboration: string;
    experience: string;
    projects: string;
    testimonials: string;
    skills: string;
    contact: string;
  };
  hero: {
    // The emphasised part is highlighted in the accent colour.
    headline: { before: string; emphasis: string; after: string };
    greeting: string;
    intro: string;
    photoAlt: string;
    projectLink: string;
  };
  about: string[];
  tracks: {
    heading: string;
    employment: { heading: string; text: string; cta: string };
    projects: { heading: string; text: string; cta: string };
  };
  experience: Experience[];
  experienceUi: {
    readMore: string;
    showLess: string;
    downloadCv: string;
    volunteerHeading: string;
    educationHeading: string;
  };
  projects: Project[];
  testimonials: Testimonial[];
  testimonialsMore: string;
  projectUi: { visit: string; source: string; problem: string; solution: string; result: string };
  skills: {
    daily: Skill[];
    experienced: Skill[];
    headings: { daily: string; experienced: string; languages: string };
  };
  languages: { name: string; level: string }[];
  contact: {
    heading: string;
    summary: string;
    email: string;
    phone: string;
    booking: string;
    bookInterview: string;
    bookProject: string;
  };
  footerGreeting: string;
};
