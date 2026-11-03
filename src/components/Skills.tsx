import { languages, skills, usedAt, type Skill } from "@/content/content";

function SkillList({ heading, items }: { heading: string; items: Skill[] }) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold">{heading}</h3>
      <dl className="mt-6 space-y-3">
        {items.map((skill) => {
          const places = usedAt(skill);
          return (
            <div key={skill.name} className="grid gap-x-6 sm:grid-cols-[12rem_1fr]">
              <dt className="font-display">
                {skill.name}
                {skill.note && <span className="block text-sm text-accent">{skill.note}</span>}
              </dt>
              <dd className="text-sm leading-relaxed text-muted">{places.join(", ")}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

export function Skills() {
  return (
    <div className="space-y-16">
      <SkillList heading="Arbetar dagligen med" items={skills.daily} />
      <SkillList heading="Erfarenhet av" items={skills.experienced} />
      <div>
        <h3 className="font-display text-xl font-semibold">Språk</h3>
        <p className="mt-6 leading-relaxed text-muted">
          {languages.map((l, i) => (
            <span key={l.name}>
              <span className="text-ink">{l.name}</span> ({l.level})
              {i < languages.length - 1 && " · "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
