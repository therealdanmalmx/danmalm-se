import type { Content, Project } from "@/content/content";
import { GitHubIcon } from "./icons";

const linkProps = { target: "_blank", rel: "noopener noreferrer" } as const;

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

type Block = { label: string; text: string; accent?: boolean };

function Blocks({ blocks, className }: { blocks: Block[]; className: string }) {
  return (
    <dl className={`max-w-3xl space-y-4 ${className}`}>
      {blocks.map((b) => (
        <div key={b.label}>
          <dt className="font-mono text-xs uppercase tracking-widest text-accent">{b.label}</dt>
          <dd className={`mt-1 leading-relaxed ${b.accent ? "text-ink" : "text-muted"}`}>{b.text}</dd>
        </div>
      ))}
    </dl>
  );
}

// Problem / solution / result, with the result picked out. Desktop shows all three;
// phones show the result and keep problem and solution behind "Read more".
function CaseStudy({ t, study }: { t: Content; study: NonNullable<Project["caseStudy"]> }) {
  const ui = t.projectUi;
  const problem = { label: ui.problem, text: study.problem };
  const solution = { label: ui.solution, text: study.solution };
  const result = { label: ui.result, text: study.result, accent: true };
  return (
    <>
      <Blocks blocks={[problem, solution, result]} className="mt-5 hidden md:block" />
      <div className="md:hidden">
        <Blocks blocks={[result]} className="mt-5" />
        <details className="group mt-3">
          <summary className="cursor-pointer text-sm text-accent">
            <span className="group-open:hidden">{t.experienceUi.readMore}</span>
            <span className="hidden group-open:inline">{t.experienceUi.showLess}</span>
          </summary>
          <Blocks blocks={[problem, solution]} className="mt-4" />
        </details>
      </div>
    </>
  );
}

// Same two-column rhythm as the experience list: metadata left, story right.
export function ProjectItem({ t, project }: { t: Content; project: Project }) {
  const newTab = <span className="sr-only"> {t.newTab}</span>;
  return (
    <li id={project.id} className="grid scroll-mt-32 gap-3 md:scroll-mt-24 py-8 first:pt-0 lg:grid-cols-[11rem_1fr] lg:gap-8">
      <div className="font-mono text-xs leading-relaxed text-muted">
        {project.label && <p className="text-ink">{project.label}</p>}
        {project.url && <p className={project.label ? "" : "text-ink"}>{hostname(project.url)}</p>}
        <p className="mt-3 hidden lg:block">
          <span className="text-accent">stack:</span> {project.stack.join(" · ")}
        </p>
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold">
          {project.url ? (
            <a href={project.url} {...linkProps} className="underline-offset-4 hover:text-accent hover:underline">
              {project.name}
              {newTab}
            </a>
          ) : (
            project.name
          )}
        </h3>
        {project.tagline && <p className="mt-1 font-display text-accent">{project.tagline}</p>}
        {project.description && (
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{project.description}</p>
        )}
        {project.caseStudy && <CaseStudy t={t} study={project.caseStudy} />}
        <p className="mt-4 font-mono text-xs leading-relaxed text-muted lg:hidden">
          <span className="text-accent">stack:</span> {project.stack.join(" · ")}
        </p>
        {(project.url || project.repo) && (
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {project.url && (
              <a href={project.url} {...linkProps} className="text-accent underline-offset-4 hover:underline">
                {t.projectUi.visit}
                {newTab}
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                {...linkProps}
                className="inline-flex items-center gap-1.5 text-muted underline-offset-4 hover:text-ink hover:underline"
              >
                <GitHubIcon className="size-4" />
                {t.projectUi.source}
                {newTab}
              </a>
            )}
          </p>
        )}
      </div>
    </li>
  );
}

export function ProjectList({ t }: { t: Content }) {
  return (
    <ol className="divide-y divide-line">
      {t.projects.map((project) => (
        <ProjectItem key={project.id} t={t} project={project} />
      ))}
    </ol>
  );
}
