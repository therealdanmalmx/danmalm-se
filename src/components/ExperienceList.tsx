import type { Content, Experience } from "@/content/content";

const monoClass = "font-mono text-xs leading-relaxed text-muted";

// Left column on large screens: period, place, kind and stack.
function Meta({ item }: { item: Experience }) {
  return (
    <div className={monoClass}>
      <p className="text-ink">{item.period}</p>
      <p>
        {item.place}
        {item.kind && <span className="text-accent"> · {item.kind}</span>}
      </p>
      <Stack item={item} className="mt-3 hidden lg:block" />
    </div>
  );
}

function Stack({ item, className }: { item: Experience; className: string }) {
  // Pre-developer roles have no stack.
  if (item.stack.length === 0) return null;
  return (
    <p className={`${monoClass} ${className}`}>
      <span className="text-accent">stack:</span> {item.stack.join(" · ")}
    </p>
  );
}

// Paid work first, then volunteer work and education under their own headings,
// so the longest roles aren't pushed down by short or unpaid entries.
export function ExperienceList({ t }: { t: Content }) {
  const ui = t.experienceUi;
  const shown = t.experience.filter((item) => !item.hidden);
  const groups = [
    { heading: null, items: shown.filter((e) => !e.volunteer && !e.education) },
    { heading: ui.volunteerHeading, items: shown.filter((e) => e.volunteer) },
    { heading: ui.educationHeading, items: shown.filter((e) => e.education) },
  ].filter((g) => g.items.length > 0);
  return (
    <div className="space-y-12">
      {groups.map((g) => (
        <div key={g.heading ?? "work"}>
          {g.heading && (
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              {g.heading}
            </h3>
          )}
          <ItemList items={g.items} t={t} nested={g.heading !== null} />
        </div>
      ))}
    </div>
  );
}

// Entries under a group heading sit one heading level below it.
function ItemList({ items, t, nested }: { items: Experience[]; t: Content; nested: boolean }) {
  const ui = t.experienceUi;
  const Title = nested ? "h4" : "h3";
  return (
    <ol className="divide-y divide-line">
      {items.map((item) => (
        <li
          key={item.id}
          id={item.id}
          className="grid scroll-mt-32 gap-3 md:scroll-mt-24 py-8 first:pt-0 lg:grid-cols-[11rem_1fr] lg:gap-8"
        >
          <Meta item={item} />
          <div>
            <Title className="font-display text-xl font-semibold">
              {item.title} <span className="text-muted">·</span> {item.company}
            </Title>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">{item.summary}</p>
            {item.details && (
              <details className="group mt-3">
                <summary className="cursor-pointer text-sm text-accent">
                  <span className="group-open:hidden">{ui.readMore}</span>
                  <span className="hidden group-open:inline">{ui.showLess}</span>
                </summary>
                <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed marker:text-accent">
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </details>
            )}
            <Stack item={item} className="mt-4 lg:hidden" />
          </div>
        </li>
      ))}
    </ol>
  );
}
