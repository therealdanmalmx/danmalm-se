// Single source for contact details, availability and links.
// TODO before launch: confirm email, phone and domain (see PRD section 8).
export const siteConfig = {
  name: "Daniel Malmgren de Oliveira",
  role: "Fullstackutvecklare · React, Vue, TypeScript & .NET",
  location: "Borås / Västkusten / Remote",
  url: "https://danmalm.se",

  email: "me@danmalm.se",
  emailAlt: "danmalmx@gmail.com",
  phone: { display: "+46 70-200 15 20", href: "+46702001520" },

  // Switch to "Tillgänglig nu" once the LIA is over.
  status: "Just nu: LIA inom .NET hos Centiro (dec 2026 – maj 2027).",
  availability: "Öppen för tillsvidareanställning från maj 2027.",

  booking: {
    interview:
      "https://cal.com/daniel-malmgren-de-oliveira-xin85a/30min?overlayCalendar=true",
    project:
      "https://cal.com/daniel-malmgren-de-oliveira-xin85a/30min?overlayCalendar=true",
  },

  // Replace the file in public/cv/ to update the downloadable CV.
  cv: "/cv/DMO_CV_se.pdf",

  linkedin: "https://www.linkedin.com/in/daniel-malmgren-de-oliveira",
  github: "https://github.com/therealdanmalmx",
  // Discord profile URLs use the numeric user ID (username: danmalmx).
  discord: "https://discord.com/users/516554804500365312",
  sourceRepo: "https://github.com/therealdanmalmx/danmalm-se",
} as const;
