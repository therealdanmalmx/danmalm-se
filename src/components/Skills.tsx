import { usedAt, type Content, type Skill } from "@/content/content";

function SkillList({ t, heading, items }: { t: Content; heading: string; items: Skill[] }) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold">{heading}</h3>
      <dl className="mt-6 space-y-3">
        {items.map((skill) => {
          const places = usedAt(t, skill);
          return (
            <div key={skill.name} className="grid gap-x-6 sm:grid-cols-[12rem_1fr]">
              <dt className="font-display">
                {skill.name}
                {skill.note && <span className="block text-sm text-accent">{skill.note}</span>}
              </dt>
              <dd className="text-sm leading-relaxed text-muted">{places.length > 0 ? places.join(", ") : skill.context}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

export function Skills({ t }: { t: Content }) {
  const { headings } = t.skills;
  return (
    <div className="space-y-16">
      <SkillList t={t} heading={headings.daily} items={t.skills.daily} />
      <SkillList t={t} heading={headings.experienced} items={t.skills.experienced} />
      <div>
        <h3 className="font-display text-xl font-semibold">{headings.languages}</h3>
        <p className="mt-6 leading-relaxed text-muted">
          {t.languages.map((l, i) => (
            <span key={l.name}>
              <span className="text-ink">{l.name}</span> ({l.level})
              {i < t.languages.length - 1 && " · "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
