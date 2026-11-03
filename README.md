# danmalm.se

Personal site and portfolio for Daniel Malmgren de Oliveira – fullstack developer (React, Vue, TypeScript & .NET).

## Stack

Next.js (App Router, static export) · TypeScript · Tailwind CSS v4 · hosted on Vercel.

## Editing content

- `src/site.config.ts` – contact details, availability text, booking and profile links.
- `src/content/content.ts` – about text, experience, skills, languages and projects. The skills section derives "where used" from the experience stacks; the projects block renders only when `projects` is non-empty.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static output in out/
npm run lint
```
