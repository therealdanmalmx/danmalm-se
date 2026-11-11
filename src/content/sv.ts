import type { Content } from "./types";

export const sv: Content = {
  locale: "sv",
  path: "/",
  meta: {
    title: "Daniel Malmgren de Oliveira – Fullstackutvecklare i Borås & Göteborg",
    description:
      "Fullstackutvecklare i Borås med bakgrund som civilekonom. Jag bygger webblösningar i React, Vue och .NET med affärsnyttan i fokus – tar emot uppdrag nu.",
  },
  role: "Fullstackutvecklare · React, Vue, TypeScript & .NET",
  location: "Borås / Göteborg med omnejd / Remote",
  // Switch to "Tillgänglig nu" once the LIA is over.
  status: "Just nu: LIA som backendutvecklare hos Centiro.",
  availability: "På kvällar och helger tar jag ett fåtal mindre projekt, och från maj 2027 är jag öppen för fast tjänst.",
  newTab: "(öppnas i ny flik)",

  nav: {
    label: "Huvudmeny",
    language: "Språk",
    book: "Boka samtal",
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
    testimonials: "Rekommendationer",
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
    intro: "utvecklare sedan 2020, som började i frontend och nu jobbar fullstack. Jag börjar med varför, sen bygger jag det.",
    photoAlt: "Porträtt av Daniel Malmgren de Oliveira",
    employmentLink: "eller boka samtal om anställning →",
    stack: ["C#", ".NET", "TypeScript", "React", "Vue", "Angular", "Next.js", "SQL Server"],
    stackLabel: "Stack",
    stackLink: "Alla färdigheter",
  },

  about: [
    "Jag är civilekonom och har jobbat nästan 20 år med strategi och affärsutveckling i internationella miljöer – bland annat på DHL och för Nederländernas utrikesministerium. 2018 sadlade jag om – först ett bootcamp, sedan en utbildning i C# och .NET med praktik – och en vecka innan pandemin bröt ut 2020 började jag mitt första utvecklarjobb. Det enda jag ångrar är att jag inte gjorde det tidigare.",
    "Många utvecklare börjar med frågan hur något ska byggas. Jag börjar nästan alltid med varför: vilken nytta gör det, och för vem? Därför är jag bra på att ta luddiga krav från verksamheten och göra något konkret och hållbart av dem.",
    "Vue, React och TypeScript är min hemmaplan. Med C# och .NET kan jag ta helhetsansvar från gränssnitt till API. Jag trivs bäst i prestigelösa team där man delar med sig – i kodgranskningen och vid kaffemaskinen.",
    "Jag använder AI-verktyg som Claude Code och GitHub Copilot dagligen för att jobba snabbare – men jag står för varje rad jag levererar.",
  ],

  tracks: {
    heading: "Hur vill du samarbeta med mig?",
    employment: {
      heading: "Anställning",
      text: "Jag söker en fast tjänst som fullstack-, back- eller frontendutvecklare från maj 2027, i Borås, Göteborg med omnejd eller remote.",
      cta: "Boka samtal om anställning",
    },
    projects: {
      heading: "Projekt & samarbeten",
      text: "För mindre företag som behöver något byggt, fixat eller förbättrat – från luddig idé till fungerande MVP, eller att få det ni redan har att fungera bättre.",
      stepsHeading: "Så funkar det",
      steps: [
        { title: "Kort samtal, 15 min.", text: "Du berättar om problemet – jag frågar varför och för vem." },
        { title: "Förslag och offert.", text: "Vad som ska byggas, hur lång tid det tar och vad det kostar." },
        { title: "Leverans i små steg.", text: "Du ser resultat tidigt och kan styra längs vägen." },
      ],
      invoicing: "Jag fakturerar via ett egenanställningsföretag – du får en vanlig faktura.",
      cta: "Boka projektsamtal (15 min)",
    },
  },

  experience: [
    {
      id: "centiro",
      title: "Backendutvecklare",
      company: "Centiro",
      place: "Borås",
      period: "dec 2026 – maj 2027",
      kind: "LIA",
      summary: "Pågående LIA med fokus på C# och .NET.",
      stack: ["C#", ".NET", "Entity Framework", "LINQ", "Azure DevOps", "Claude Code"],
    },
    {
      id: "centiro-deltid",
      title: "Frontendutvecklare (deltid)",
      company: "Centiro",
      place: "Borås",
      period: "sep – nov 2026",
      summary:
        "Uppgraderade Angular-versionen och införde företagets designsystem i applikationen.",
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
      summary: "För att gå från frontend till fullstack: tvåårig utbildning med fokus på C#, .NET, Entity Framework och databaser – samt React, React Native och Hono. LIA-perioderna på Avarda och Centiro ingår.",
      stack: ["C#", ".NET", "Entity Framework", "SQL", "React", "React Native", "Hono", "Claude Code", "GitHub Copilot"],
    },
    {
      id: "one-sky",
      volunteer: true,
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
      volunteer: true,
      title: "Frontendutvecklare",
      company: "SkilledUp Life",
      place: "Distans",
      period: "dec 2024 – apr 2025",
      kind: "Volontär",
      summary:
        "Brittisk plattform som kopplar ihop volontärer med startups, så att de får arbetslivserfarenhet i riktiga projekt. Var med och byggde om plattformen från grunden och migrerade den från Vue 2 till Vue 3, med återanvändbara komponenter som dashboards, diagram och menyer. Kom regelbundet med förslag till ledningen i tekniska frågor.",
      stack: ["Vue 3", "TypeScript", "Pinia", "Tailwind", "REST"],
    },
    {
      id: "nexer",
      title: "Frontendutvecklare",
      company: "Nexer",
      place: "Borås",
      period: "okt – dec 2024",
      summary:
        "Bokningssystem för tvättstugor i fastigheter som saknade en digital lösning – backend i C#/.NET och frontend i React.",
      stack: ["React", "TypeScript", "C#", ".NET", "Entity Framework", "MongoDB", "Node.js"],
    },
    {
      id: "consid",
      title: "Frontendutvecklare",
      company: "Consid",
      place: "Borås",
      period: "jan 2023 – jul 2024",
      summary:
        "Interna verktyg och kunduppdrag med mätbar affärsnytta – bland annat ett onboardingverktyg som sparar över 10 timmar per nyanställd.",
      details: [
        "Vidareutvecklade en kundportal för en svensk myndighet – komponenter, funktioner och prestanda i Vue och TypeScript, samt API:er i .NET.",
        "Var med och byggde ett internt onboardingverktyg för Consid med inloggning, status per steg och filtrering.",
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
      summary: "Internt CMS för konsultprofiler, uppdrag och tillgänglighet – praktik inom Lexicons utbildning.",
      stack: ["Angular", "C#", "ASP.NET", "Entity Framework", "SQL Server", "Azure DevOps"],
    },
    {
      id: "earlier-career",
      title: "Strategi och affärsutveckling",
      company: "DHL, Nederländernas utrikesministerium m.fl.",
      place: "Internationellt",
      period: "fram till 2018",
      summary:
        "Nästan 20 år med strategi och affärsutveckling i internationella miljöer – innan jag sadlade om till utvecklare.",
      stack: [],
    },
    {
      id: "lexicon",
      title: "Påbyggnadskurs C# och .NET",
      company: "Lexicon",
      place: "Göteborg",
      period: "apr 2019 – jan 2020",
      kind: "Utbildning",
      education: true,
      summary: "Tio månader inklusive praktik på Sprinta. Även frontend med HTML, CSS, JavaScript och Angular.",
      stack: ["C#", ".NET", "Angular"],
    },
    {
      id: "craft-academy",
      title: "Fullstack-bootcamp",
      company: "Craft Academy",
      place: "Göteborg",
      period: "2018",
      kind: "Utbildning",
      education: true,
      summary: "Fyra månader, projektbaserat: TDD och agilt arbetssätt med Ruby on Rails, Angular och Ionic.",
      stack: ["Ruby on Rails", "Angular", "Ionic"],
    },
  ],
  experienceUi: {
    readMore: "Läs mer +",
    showLess: "Visa mindre −",
    downloadCv: "Ladda ner CV (PDF) ↓",
    volunteerHeading: "Volontärarbete",
    educationHeading: "Utbildning",
  },

  // The section is rendered only when non-empty.
  projects: [
    {
      id: "consid-onboarding",
      name: "Onboardingverktyg för Consid",
      label: "Case · Consid",
      tagline: "Över 10 sparade timmar per nyanställd – runt 1 000 timmar om året.",
      caseStudy: {
        problem:
          "Onboardingen av runt 100 nyanställda om året sköttes med checklistor, mejl och kalkylark. HR fick lägga mycket tid på att hålla ihop allt och jaga status.",
        solution:
          "I ett team byggde vi ett webbverktyg där varje nyanställd har en egen onboardingplan, med inloggning, status per steg och filtrering. Jag var med och valde teknik och utvecklade verktyget i React och Next.js.",
        result:
          "HR ser direkt var varje person befinner sig. Verktyget ersatte den manuella processen helt.",
      },
      stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      id: "consid-annual-report",
      name: "Digital årsredovisning",
      label: "Case · Consid",
      tagline: "Halverad kostnad redan första året.",
      caseStudy: {
        problem:
          "Kunden betalade varje år för en extern tjänst för att presentera sin årsredovisning digitalt, med begränsad egen kontroll över innehåll och upplägg.",
        solution:
          "En återanvändbar mall i Umbraco där en administratör lägger in text, bilder, film, diagram och länkar till dokument. Sidan för årsredovisningen skapas sedan automatiskt.",
        result:
          "Lösningen ersatte den externa tjänsten, sparade kunden 50 % redan första året och gav dem större kontroll över sin digitala rapportering.",
      },
      stack: ["Umbraco", "Razor Pages", "HTML", "CSS"],
    },
    {
      id: "ellos-value-chain",
      name: "Värdekedjan på produktsidan",
      label: "Case · Ellos Group",
      tagline: "Var och av vad är produkten gjord? Nu syns det direkt för kunden.",
      caseStudy: {
        problem:
          "Kunder och nya regelkrav ställde högre krav på insyn i hur produkterna tillverkas – men informationen om material, certifieringar och leverantörer nådde inte fram till kunden.",
        solution:
          "Jag byggde en större komponent i Vue och Nuxt som visar produktens väg genom värdekedjan: materialens ursprung, certifieringar, betyg och leverantörer.",
        result:
          "Kunderna kan se var och av vad produkterna är gjorda, vilket stärker förtroendet och hjälper Ellos Group att möta kraven på transparens.",
      },
      stack: ["Vue", "Nuxt", "TypeScript"],
    },
    {
      id: "consid-cv-portal",
      name: "CV- och konsultportal",
      label: "Case · Consid",
      tagline: "Från CV:n i SharePoint till sökbar konsultmatchning.",
      caseStudy: {
        problem:
          "Alla CV:n laddades upp i en SharePoint-portal utan riktig sökning eller filtrering. Att hitta rätt konsult till ett uppdrag var tidskrävande.",
        solution:
          "I ett Scrum-team byggde vi en förenklad variant av Cinode: konsulter lägger in erfarenheter, kompetenser och tillgänglighet och kan spara anpassade CV:n. Konsultchefer och säljare filtrerar på ort, region och land och söker detaljerat på kompetenser, erfarenheter, certifikat och språk.",
        result:
          "Konsultchefer och säljare får direkt överblick över vilka som är tillgängliga och hittar rätt profil till uppdragen betydligt enklare.",
      },
      stack: ["Vue", "TypeScript", "Tailwind", "REST"],
    },
    {
      id: "gethubbers",
      name: "GetHubbers",
      label: "Eget projekt",
      url: "https://gethubbers.com",
      tagline: "Hitta utvecklare där utvecklare finns.",
      description:
        "Rekryterare och team som letar utvecklare lokalt får ofta gå via mellanhänder. GetHubbers söker direkt i GitHubs API efter utvecklare i en stad eller ett helt land och filtrerar på programmeringsspråk – i tio europeiska länder, med gränssnitt på flera språk.",
      stack: ["React", "TypeScript", "Vite", "GitHub API", "i18next"],
      repo: "https://github.com/therealdanmalmx/getHubbers_new",
    },
  ],
  testimonials: [
    {
      id: "sven-oden",
      quote:
        "Daniel has an eye for detail. He can reason about the different outcomes, weighing pros and cons, and is asking relevant questions for the task at hand as well as how it connects to the bigger picture. He takes initiatives, wants to achieve and has the curiosity and the mindset needed to stand out as a developer.",
      name: "Sven Odén",
      role: "Team Lead på Avarda och min mentor under praktiken",
    },
    {
      id: "manoj-ranaweera",
      quote:
        "He demonstrated high level of professionalism and was easy to work with. He got on with team mates from China, UK, Sri Lanka, Bangladesh, USA, Canada, Ghana and Nigeria well in a fully remote setting.",
      name: "Manoj Ranaweera",
      role: "Grundare av SkilledUp Life och min närmaste chef",
    },
  ],
  testimonialsMore: "Fler rekommendationer på LinkedIn ↗",
  projectUi: {
    visit: "Besök sidan ↗",
    source: "Källkod på GitHub ↗",
    problem: "Problem",
    solution: "Lösning",
    result: "Resultat",
  },

  skills: {
    daily: [
      { name: "Vue 2 & 3", match: ["Vue", "Vue 3"] },
      { name: "React", match: ["React", "React Native"] },
      { name: "Angular" },
      { name: "TypeScript / JavaScript", match: ["TypeScript", "JavaScript"] },
      { name: "C# / .NET", match: ["C#", ".NET"] },
      { name: "Tailwind" },
      { name: "Next.js" },
      { name: "Nuxt" },
      { name: "REST" },
      { name: "Claude Code" },
      { name: "GitHub Copilot", context: "YH och egna projekt" },
    ],
    experienced: [
      { name: "ASP.NET", match: ["ASP.NET"] },
      { name: "Entity Framework" },
      { name: "SQL Server" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "GraphQL" },
      { name: "Umbraco" },
      { name: "Strapi", context: "Egna projekt" },
      { name: "Amplience" },
      { name: "Docker", context: "Egna projekt" },
      { name: "Azure DevOps" },
      { name: "Octopus Deploy" },
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
      "Har du något som behöver byggas eller lösas – eller en roll att fylla? Hör av dig, så tar vi det därifrån.",
    email: "E-post",
    phone: "Telefon",
    booking: "Boka möte",
    bookInterview: "Samtal om anställning →",
    bookProject: "Projektmöte →",
  },
  footerGreeting: "hälsningar från Daniel",
};
