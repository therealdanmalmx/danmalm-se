# danmalm.se

Personal site and portfolio for Daniel Malmgren de Oliveira – fullstack developer (React, Vue, TypeScript & .NET).

## Stack

Next.js (App Router, static export) · TypeScript · Tailwind CSS v4 · hosted on Vercel.

## Editing content

- `src/site.config.ts` – contact details, booking and profile links, CV path (shared by both languages).
- `src/content/sv.ts` – all Swedish copy: availability, about text, experience, skills, languages and projects. The skills section derives "where used" from the experience stacks; the projects section renders only when `projects` is non-empty.
- `src/content/en.ts` – the English translation. Stacks, links and flags are taken from the Swedish entries by `id`, so only the wording lives here.

The Swedish page is served at `/` and the English one at `/en/`. On a first visit to `/`, browsers without Swedish among their preferred languages are sent to `/en/`; choosing SE or EN in the header is remembered and overrides that.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static output in out/
npm run lint
```
