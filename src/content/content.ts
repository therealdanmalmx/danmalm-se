// All page copy lives here so an English version can be added later.

export type Experience = {
  id: string;
  title: string;
  company: string;
  place: string;
  period: string;
  kind?: "LIA" | "Volontär" | "Praktik" | "Utbildning";
  summary: string;
  details?: string[];
  stack: string[];
  featured?: boolean;
};

export type Project = {
  id: string;
  name: string;
  // Live site; the project name links here.
  url: string;
  tagline?: string;
  // What problem the project solves.
  description: string;
  stack: string[];
  // Only set for public repositories.
  repo?: string;
};

export const hero = {
  // The emphasised part is highlighted in the accent colour.
  headline: {
    before: "Civilekonomen som hittade hem i koden – och bygger mjukvara med ",
    emphasis: "affärsnyttan",
    after: " som kompass.",
  },
  intro: "fullstackutvecklare sedan 2020. Jag börjar med varför – sen bygger jag det.",
};

export const about = [
  "Jag är civilekonom som blev utvecklare – en vecka innan pandemin bröt ut 2020. Det enda jag ångrar är att jag inte bytte bana tidigare.",
  "Många utvecklare börjar med frågan hur något ska byggas. Jag börjar nästan alltid med varför: vilken nytta gör det, och för vem? Därför är jag bra på att ta luddiga krav från verksamheten och göra något konkret och hållbart av dem.",
  "Vue, React och TypeScript är min hemmaplan. Nu bygger jag på med C# och .NET för att ta helhetsansvar från gränssnitt till API. Jag trivs bäst i prestigelösa team där man delar med sig – i kodgranskningen och vid kaffemaskinen.",
];

export const tracks = {
  heading: "Hur vill du samarbeta med mig?",
  employment: {
    heading: "Anställning",
    text: "Jag söker en fast tjänst som fullstack-, back- eller frontendutvecklare från maj 2027, i Borås, längs Västkusten eller remote.",
    cta: "Boka samtal",
  },
  projects: {
    heading: "Projekt & samarbeten",
    text: "Öppen för utvalda projekt och samarbeten – från luddig idé till fungerande MVP.",
    cta: "Boka projektmöte",
  },
};

export const experience: Experience[] = [
  {
    id: "centiro",
    title: "Backendutvecklare",
    company: "Centiro",
    place: "Borås",
    period: "dec 2026 – maj 2027",
    kind: "LIA",
    summary: "Pågående LIA med fokus på C# och .NET.",
    stack: ["C#", ".NET"],
  },
  {
    id: "centiro-deltid",
    title: "Frontendutvecklare (deltid)",
    company: "Centiro",
    place: "Borås",
    period: "sep – dec 2026",
    summary:
      "Uppdaterade ramverksversionen och implementerade företagets designsystem korrekt.",
    stack: ["Angular", "SQL Server", "Azure DevOps", "Claude Code"],
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
    summary: "Tvåårig utbildning i C#, .NET, Entity Framework och databaser.",
    stack: ["C#", ".NET", "Entity Framework", "SQL Server"],
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
    stack: [
      "Next.js",
      "PostgreSQL",
      "React Native",
      "Expo",
      "TypeScript",
      "Tailwind",
    ],
  },
  {
    id: "skilledup",
    title: "Frontendutvecklare",
    company: "SkilledUp Life",
    place: "Distans",
    period: "dec 2024 – apr 2025",
    kind: "Volontär",
    summary:
      "Deltog i ombyggnaden av plattformens version 2 i Vue 3 med återanvändbara komponenter.",
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
    stack: [
      "React",
      "TypeScript",
      "C#",
      ".NET",
      "Entity Framework",
      "MongoDB",
      "Node.js",
    ],
  },
  {
    id: "consid",
    title: "Frontendutvecklare",
    company: "Consid",
    place: "Borås",
    period: "jan 2023 – jul 2024",
    featured: true,
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
    featured: true,
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
];

export type Skill = {
  name: string;
  // Stack labels in `experience` that count as this skill; defaults to [name].
  match?: string[];
  // Used at every workplace, without listing it in each stack.
  everywhere?: boolean;
  note?: string;
};

export const skills: { daily: Skill[]; experienced: Skill[] } = {
  daily: [
    { name: "Vue 2 & 3", match: ["Vue", "Vue 3"] },
    { name: "React", match: ["React", "React Native"] },
    { name: "TypeScript" },
    { name: "JavaScript", match: ["TypeScript", "Vue", "React"] },
    {
      name: "C# / .NET",
      match: ["C#", ".NET"],
      note: "fördjupas just nu (YH)",
    },
    { name: "Tailwind" },
    { name: "Next.js" },
    { name: "Nuxt" },
    { name: "REST" },
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
    { name: "Git", everywhere: true },
  ],
};

// Companies where a skill was used, derived from the experience stacks.
export function usedAt(skill: Skill): string[] {
  const labels = skill.match ?? [skill.name];
  const companies = experience
    .filter(
      (e) =>
        e.kind !== "Utbildning" &&
        (skill.everywhere || e.stack.some((s) => labels.includes(s))),
    )
    .map((e) => e.company);
  // Centiro appears twice (part-time and LIA).
  return [...new Set(companies)];
}

export const languages = [
  { name: "Svenska", level: "flytande" },
  { name: "Engelska", level: "flytande" },
  { name: "Portugisiska", level: "flytande" },
  { name: "Nederländska", level: "goda" },
  { name: "Tyska", level: "grunder" },
];

// Rendered only when non-empty.
export const projects: Project[] = [
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
];

export const contactHeading = "Låt oss ta en kaffe och diskutera nästa steg.";

export const contactSummary =
  "Utvecklare sedan 2020 · e-handel, offentlig sektor, IoT och konsultuppdrag · frontend med .NET-backend – just nu på Centiro.";
