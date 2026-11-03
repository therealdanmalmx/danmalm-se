import { siteConfig } from "@/site.config";
import { projects } from "@/content/content";

const nav = [
  { href: "#om-mig", label: "Om mig" },
  { href: "#erfarenhet", label: "Erfarenhet" },
  ...(projects.length > 0 ? [{ href: "#projekt", label: "Projekt" }] : []),
  { href: "#fardigheter", label: "Kompetens" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-obsidian/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-display font-semibold tracking-tight">
          Daniel Malmgren<span className="text-accent">.</span>
        </a>
        <nav aria-label="Huvudmeny" className="hidden md:block">
          <ul className="flex gap-8 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={siteConfig.booking.interview}
          className="rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-obsidian transition-opacity hover:opacity-90"
        >
          Boka samtal
        </a>
      </div>
    </header>
  );
}
