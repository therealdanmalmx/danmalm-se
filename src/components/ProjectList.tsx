import { projects, type Project } from "@/content/content";
import { GitHubIcon } from "./icons";

const linkProps = { target: "_blank", rel: "noopener noreferrer" } as const;

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

// Same two-column rhythm as the experience list: metadata left, story right.
export function ProjectItem({ project }: { project: Project }) {
  return (
    <li id={project.id} className="grid scroll-mt-24 gap-3 py-8 first:pt-0 lg:grid-cols-[11rem_1fr] lg:gap-8">
      <div className="font-mono text-xs leading-relaxed text-muted">
        <p className="text-ink">{hostname(project.url)}</p>
        <p className="mt-3 hidden lg:block">
          <span className="text-accent">stack:</span> {project.stack.join(" · ")}
        </p>
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold">
          <a href={project.url} {...linkProps} className="underline-offset-4 hover:text-accent hover:underline">
            {project.name}
            <span className="sr-only"> (öppnas i ny flik)</span>
          </a>
        </h3>
        {project.tagline && <p className="mt-1 font-display text-accent">{project.tagline}</p>}
        <p className="mt-3 max-w-3xl leading-relaxed text-muted">{project.description}</p>
        <p className="mt-4 font-mono text-xs leading-relaxed text-muted lg:hidden">
          <span className="text-accent">stack:</span> {project.stack.join(" · ")}
        </p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={project.url} {...linkProps} className="text-accent underline-offset-4 hover:underline">
            Besök sidan ↗<span className="sr-only"> (öppnas i ny flik)</span>
          </a>
          {project.repo && (
            <a
              href={project.repo}
              {...linkProps}
              className="inline-flex items-center gap-1.5 text-muted underline-offset-4 hover:text-ink hover:underline"
            >
              <GitHubIcon className="size-4" />
              Källkod på GitHub ↗<span className="sr-only"> (öppnas i ny flik)</span>
            </a>
          )}
        </p>
      </div>
    </li>
  );
}

export function ProjectList() {
  return (
    <ol className="divide-y divide-line">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ol>
  );
}
