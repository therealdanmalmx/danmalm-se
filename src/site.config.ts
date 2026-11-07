// Contact details and links shared by both languages.
// Wording (role, availability, status) lives in src/content/sv.ts and en.ts.
// TODO before launch: confirm email, phone and domain (see PRD section 8).
export const siteConfig = {
  name: "Daniel Malmgren de Oliveira",
  url: "https://danmalm.se",

  email: "me@danmalm.se",
  phone: { display: "+46 72 200 15 20", href: "+46722001520" },

  booking: {
    interview:
      "https://cal.com/daniel-malmgren-de-oliveira-xin85a/30min?overlayCalendar=true",
    project:
      "https://cal.com/daniel-malmgren-de-oliveira-xin85a/15min?overlayCalendar=true",
  },

  // One CV per language; replace the files in public/cv/ to update them.
  cv: { sv: "/cv/DMO_CV_se.pdf", en: "/cv/DMO_CV_en.pdf" },

  linkedin: "https://www.linkedin.com/in/daniel-malmgren-de-oliveira",
  github: "https://github.com/therealdanmalmx",
  // Discord profile URLs use the numeric user ID (username: danmalmx).
  discord: "https://discord.com/users/516554804500365312",
  sourceRepo: "https://github.com/therealdanmalmx/danmalm-se",
} as const;
