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
  return (
    <p className={`${monoClass} ${className}`}>
      <span className="text-accent">stack:</span> {item.stack.join(" · ")}
    </p>
  );
}

export function ExperienceList({ t }: { t: Content }) {
  const ui = t.experienceUi;
  return (
    <ol className="divide-y divide-line">
      {t.experience.filter((item) => !item.hidden).map((item) => (
        <li
          key={item.id}
          id={item.id}
          className="grid scroll-mt-24 gap-3 py-8 first:pt-0 lg:grid-cols-[11rem_1fr] lg:gap-8"
        >
          <Meta item={item} />
          <div>
            <h3 className="font-display text-xl font-semibold">
              {item.title} <span className="text-muted">·</span> {item.company}
            </h3>
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
