import { siteConfig } from "@/site.config";
import { projects, tracks } from "@/content/content";

export function Tracks() {
  return (
    <>
      <p className="mb-12 font-display text-3xl font-bold tracking-tight sm:text-4xl">{tracks.heading}</p>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl font-semibold">{tracks.employment.heading}</h3>
          <p className="mt-4 leading-relaxed text-muted">{tracks.employment.text}</p>
          <a
            href={siteConfig.booking.interview}
            className="mt-6 inline-block rounded-sm bg-accent px-5 py-2.5 font-semibold text-obsidian transition-opacity hover:opacity-90"
          >
            {tracks.employment.cta}
          </a>
        </div>
        <div className="md:border-l md:border-line md:pl-12">
          <h3 className="font-display text-2xl font-semibold">{tracks.projects.heading}</h3>
          <p className="mt-4 leading-relaxed text-muted">{tracks.projects.text}</p>
          <a
            href={siteConfig.booking.project}
            className="mt-6 inline-block rounded-sm border border-accent px-5 py-2.5 font-semibold text-accent transition-colors hover:bg-accent hover:text-obsidian"
          >
            {tracks.projects.cta}
          </a>
        </div>
      </div>

      {projects.length > 0 && (
        <div className="mt-16">
          <h3 className="font-display text-sm tracking-widest text-muted uppercase">Utvalda projekt</h3>
          <ul className="mt-6 divide-y divide-line">
            {projects.map((p) => (
              <li key={p.name} className="py-6">
                <h4 className="font-display text-lg font-semibold">{p.name}</h4>
                <p className="mt-2 leading-relaxed text-muted">{p.description}</p>
                <p className="mt-2 font-display text-sm text-muted">{p.stack.join(" · ")}</p>
                <p className="mt-3 flex gap-4 text-sm">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} className="text-accent underline-offset-4 hover:underline">
                      {l.label} →
                    </a>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
