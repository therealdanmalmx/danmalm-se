import { siteConfig } from "@/site.config";
import type { Content } from "@/content/content";

// LinkedIn recommendations, quoted as written (in English on both pages).
export function Testimonials({ t }: { t: Content }) {
  return (
    <>
      <div className="grid gap-10 lg:grid-cols-2">
        {t.testimonials.map((r) => (
          <figure key={r.id} className="border-l-2 border-accent pl-6">
            <blockquote lang="en" className="text-lg leading-relaxed">
              <p>“{r.quote}”</p>
            </blockquote>
            <figcaption className="mt-5 text-sm leading-relaxed">
              <span className="font-display font-semibold">{r.name}</span>
              <span className="block text-muted">{r.role}</span>
              <span className="block font-mono text-xs text-accent">{r.relation}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <a
        href={`${siteConfig.linkedin}/details/recommendations/`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block text-sm text-accent underline-offset-4 hover:underline"
      >
        {t.testimonialsMore}
        <span className="sr-only"> {t.newTab}</span>
      </a>
    </>
  );
}
