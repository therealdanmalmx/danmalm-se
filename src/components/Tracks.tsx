import { siteConfig } from "@/site.config";
import type { Content } from "@/content/content";

export function Tracks({ t }: { t: Content }) {
  const { tracks } = t;
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
          <h4 className="mt-8 font-mono text-xs tracking-widest text-accent uppercase">
            {tracks.projects.stepsHeading}
          </h4>
          <ol className="mt-4 space-y-3">
            {tracks.projects.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4 leading-relaxed">
                <span className="font-mono text-sm text-accent">{i + 1}</span>
                <span>
                  <span className="font-semibold">{step.title}</span>{" "}
                  <span className="text-muted">{step.text}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted">{tracks.projects.invoicing}</p>
          <a
            href={siteConfig.booking.project}
            className="mt-6 inline-block rounded-sm border border-accent px-5 py-2.5 font-semibold text-accent transition-colors hover:bg-accent hover:text-obsidian"
          >
            {tracks.projects.cta}
          </a>
        </div>
      </div>
    </>
  );
}
