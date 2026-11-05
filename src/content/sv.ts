import type { Content } from "./types";

export const sv: Content = {
  locale: "sv",
  path: "/",
  meta: {
    title: "Daniel Malmgren de Oliveira – Fullstackutvecklare",
    description:
      "Fullstackutvecklare · React, Vue, TypeScript & .NET. Öppen för mindre projekt redan nu och tillsvidareanställning från maj 2027. Borås / Göteborg med omnejd / Remote.",
  },
  role: "Fullstackutvecklare · React, Vue, TypeScript & .NET",
  location: "Borås / Göteborg med omnejd / Remote",
  // Switch to "Tillgänglig nu" once the LIA is over.
  status: "Just nu: frontendutvecklare (deltid) hos Centiro.",
  availability: "Öppen för mindre projekt redan nu och tillsvidareanställning från maj 2027.",
  newTab: "(öppnas i ny flik)",

  nav: {
    label: "Huvudmeny",
    language: "Språk",
    about: "Om mig",
    experience: "Erfarenhet",
    projects: "Projekt",
    skills: "Kompetens",
    contact: "Kontakt",
  },
  sections: {
    about: "Om mig",
    collaboration: "Samarbete",
    experience: "Erfarenhet",
    projects: "Projekt",
    skills: "Kompetens",
    contact: "Kontakt",
  },

  hero: {
    headline: {
      before: "Civilekonomen som hittade hem i koden – och bygger mjukvara med ",
      emphasis: "affärsnyttan",
      after: " som kompass.",
    },
    greeting: "Hej, jag heter",
    intro: "utvecklare sedan 2020 – började i frontend, nu fullstack. Jag börjar med varför – sen bygger jag det.",
    photoAlt: "Porträtt av Daniel Malmgren de Oliveira",
    projectLink: "eller diskutera ett projekt →",
  },

  about: [
    "Jag är civilekonom som blev utvecklare – en vecka innan pandemin bröt ut 2020. Det enda jag ångrar är att jag inte bytte bana tidigare.",
    "Många utvecklare börjar med frågan hur något ska byggas. Jag börjar nästan alltid med varför: vilken nytta gör det, och för vem? Därför är jag bra på att ta luddiga krav från verksamheten och göra något konkret och hållbart av dem.",
    "Vue, React och TypeScript är min hemmaplan. Nu bygger jag på med C# och .NET för att ta helhetsansvar från gränssnitt till API. Jag använder AI-verktyg som Claude Code och GitHub Copilot dagligen för att jobba snabbare – men jag granskar och förstår varje rad som går ut. Jag trivs bäst i prestigelösa team där man delar med sig – i kodgranskningen och vid kaffemaskinen.",
  ],

  tracks: {
    heading: "Hur vill du samarbeta med mig?",
    employment: {
      heading: "Anställning",
      text: "Jag söker en fast tjänst som fullstack-, back- eller frontendutvecklare från maj 2027, i Borås, Göteborg med omnejd eller remote.",
      cta: "Boka samtal",
    },
    projects: {
      heading: "Projekt & samarbeten",
      text: "Öppen för utvalda projekt och samarbeten – från luddig idé till fungerande MVP.",
      cta: "Boka projektmöte",
    },
  },

  experience: [
    {
      id: "centiro",
      hidden: true,
      title: "Backendutvecklare",
      company: "Centiro",
      place: "Borås",
      period: "dec 2026 – maj 2027",
      kind: "LIA",
      summary: "Pågående LIA med fokus på C# och .NET.",
      stack: ["C#", ".NET", "Azure DevOps", "Claude Code"],
    },
    {
      id: "centiro-deltid",
      title: "Frontendutvecklare (deltid)",
      company: "Centiro",
      place: "Borås",
      period: "sep – dec 2026",
      summary:
        "Uppdaterade ramverksversionen och implementerade företagets designsystem korrekt.",
      stack: ["Angular", "Azure DevOps", "Octopus Deploy", "Claude Code"],
    },
    {
      id: "avarda",
      title: "Backendutvecklare",
      company: "Avarda (TF Bank)",
      place: "Borås",
      period: "maj – jun 2026",
      kind: "LIA",
      summary:
        "Byggde om kontrollern bakom ansökningsflödet för konsumentlån i .NET/Umbraco.",
      details: [
        "Reparerade binding, mappning och serialisering så att ansökningsflödet fungerade hela vägen.",
        "Härledde rätt produkt från CMS-metadata och kopplade den till rätt API-endpoint.",
        "Implementerade en ny meny som ger landsredaktörer kontroll över föredragna, tillåtna och svartlistade länder.",
      ],
      stack: ["C#", ".NET", "Umbraco", "LINQ"],
    },
    {
      id: "yh",
      title: "C# och .NET",
      company: "Yrkeshögskolan",
      place: "Borås",
      period: "sep 2025 – jun 2027",
      kind: "Utbildning",
      education: true,
      summary: "Tvåårig utbildning i C#, .NET, Entity Framework och databaser.",
      stack: ["C#", ".NET", "Entity Framework", "SQL", "Claude Code", "GitHub Copilot"],
    },
    {
      id: "one-sky",
      title: "Fullstackutvecklare",
      company: "One Sky Collective",
      place: "Distans",
      period: "apr – jun 2025",
      kind: "Volontär",
      summary:
        "Bidrog till MVP för en ideell gamifierad lösning: API i Next.js med PostgreSQL och mobilapp i React Native.",
      stack: ["Next.js", "PostgreSQL", "React Native", "Expo", "TypeScript", "Tailwind"],
    },
    {
      id: "skilledup",
      title: "Frontendutvecklare",
      company: "SkilledUp Life",
      place: "Distans",
      period: "dec 2024 – apr 2025",
      kind: "Volontär",
      summary:
        "Brittisk plattform som kopplar ihop volontärer med startups, så att de får arbetslivserfarenhet i riktiga projekt. Arbetade på distans med utvecklingsteamet och deltog i ombyggnaden av plattformen från Vue 2 till Vue 3.",
      stack: ["Vue 3", "TypeScript", "Pinia", "Tailwind", "REST"],
    },
    {
      id: "nexer",
      title: "Frontendutvecklare",
      company: "Nexer",
      place: "Borås",
      period: "okt – dec 2024",
      summary:
        "Projekt med backend i C#/.NET och frontend i React, med fokus på integrationen däremellan.",
      stack: ["React", "TypeScript", "C#", ".NET", "Entity Framework", "MongoDB", "Node.js"],
    },
    {
      id: "consid",
      title: "Frontendutvecklare",
      company: "Consid",
      place: "Borås",
      period: "jan 2023 – jul 2024",
      summary: "Interna verktyg och kunduppdrag med mätbar affärsnytta.",
      details: [
        "Byggde ett internt onboardingverktyg för Consid med inloggning och statushantering – sparar över 10 timmar per nyanställd.",
        "Kunduppdrag: en egenbyggd digital årsredovisning ersatte en extern tjänst – produktionskostnaden nästan halverades.",
        "Moderniserade ett kundanpassat CMS med återanvändbara komponenter.",
        "Bidrog till en konsultmatchningsportal med registrering, dashboards och avancerad sökning.",
      ],
      stack: ["React", "Next.js", "Vue", "TypeScript", "Tailwind", "REST", "Azure DevOps"],
    },
    {
      id: "ellos",
      title: "Frontendutvecklare",
      company: "Ellos Group",
      place: "Borås",
      period: "aug 2021 – jan 2023",
      summary:
        "Återanvändbara komponenter för fyra webbshoppar som skulle hålla under kampanjer och Black Friday.",
      details: [
        "Arbetade nära e-handelschefer och UX för att prioritera funktionalitet och förbättra prestanda.",
        "Designade återanvändbara komponenter för kampanjytor, nedräkningar och landningssidor.",
        "Byggde komponenter för transparens i leverantörskedjan: tillverkare, ursprungsland och certifieringar.",
        "Integrerade tredjepartstjänster som AR och Trustpilot.",
      ],
      stack: ["Vue", "Nuxt", "TypeScript", "Amplience", "GraphQL", "REST"],
    },
    {
      id: "wideco",
      title: "Frontendutvecklare",
      company: "Wideco",
      place: "Borås",
      period: "mar 2020 – jun 2021",
      summary:
        "Dashboard för realtidsdata från IoT-enheter med grafer, listor, larm och kartor.",
      details: [
        "Förbättrade kvaliteten med enhetstester för centrala komponenter.",
        "Ansvarade för API-integrationer.",
      ],
      stack: ["Vue", "TypeScript", "REST"],
    },
    {
      id: "sprinta",
      title: "Webbutvecklare",
      company: "Sprinta",
      place: "Göteborg",
      period: "sep 2019 – jan 2020",
      kind: "Praktik",
      summary: "Internt CMS för konsultprofiler, uppdrag och tillgänglighet.",
      stack: ["Angular", "C#", "ASP.NET", "Entity Framework", "SQL Server", "Azure DevOps"],
    },
  ],
  experienceUi: {
    readMore: "Läs mer +",
    showLess: "Visa mindre −",
    downloadCv: "Ladda ner CV (PDF) ↓",
  },

  // The section is rendered only when non-empty.
  projects: [
    {
      id: "gethubbers",
      name: "GetHubbers",
      url: "https://gethubbers.com",
      tagline: "Hitta utvecklare där utvecklare finns.",
      description:
        "Rekryterare och team som letar utvecklare lokalt får ofta gå via mellanhänder. GetHubbers söker direkt i GitHubs API efter utvecklare i en stad eller ett helt land och filtrerar på programmeringsspråk – i tio europeiska länder, med gränssnitt på flera språk.",
      stack: ["React", "TypeScript", "Vite", "GitHub API", "i18next"],
      repo: "https://github.com/therealdanmalmx/getHubbers_new",
    },
  ],
  projectUi: { visit: "Besök sidan ↗", source: "Källkod på GitHub ↗" },

  skills: {
    daily: [
      { name: "Vue 2 & 3", match: ["Vue", "Vue 3"] },
      { name: "React", match: ["React", "React Native"] },
      { name: "TypeScript" },
      { name: "JavaScript", match: ["TypeScript", "Vue", "React"] },
      { name: "C# / .NET", match: ["C#", ".NET"] },
      { name: "Tailwind" },
      { name: "Next.js" },
      { name: "Nuxt" },
      { name: "REST" },
      { name: "Claude Code" },
      { name: "GitHub Copilot" },
    ],
    experienced: [
      { name: "ASP.NET", match: ["ASP.NET"] },
      { name: "Angular" },
      { name: "Entity Framework" },
      { name: "SQL Server" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "GraphQL" },
      { name: "Umbraco" },
      { name: "Strapi" },
      { name: "Amplience" },
      { name: "Docker" },
      { name: "Azure DevOps" },
      { name: "Octopus Deploy" },
      { name: "Git", everywhere: true },
    ],
    headings: {
      daily: "Arbetar dagligen med",
      experienced: "Erfarenhet av",
      languages: "Språk",
    },
  },
  languages: [
    { name: "Svenska", level: "flytande" },
    { name: "Engelska", level: "flytande" },
    { name: "Portugisiska", level: "flytande" },
    { name: "Nederländska", level: "goda" },
    { name: "Tyska", level: "grunder" },
  ],

  contact: {
    heading: "Låt oss ta en kaffe och diskutera nästa steg.",
    summary:
      "Utvecklare sedan 2020 · e-handel, offentlig sektor, IoT och konsultuppdrag · frontend med .NET-backend – just nu på Centiro.",
    email: "E-post",
    phone: "Telefon",
    booking: "Boka möte · 30 min",
    bookInterview: "Samtal om anställning →",
    bookProject: "Projektmöte →",
    altEmail: "Alternativ e-post:",
  },
  footerGreeting: "hälsningar från Daniel",
};
