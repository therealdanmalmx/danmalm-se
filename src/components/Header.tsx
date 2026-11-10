import { siteConfig } from "@/site.config";
import type { Content } from "@/content/content";
import { LanguageToggle } from "./LanguageToggle";

export function Header({ t }: { t: Content }) {
  const nav = [
    { href: "#om-mig", label: t.nav.about },
    { href: "#erfarenhet", label: t.nav.experience },
    ...(t.projects.length > 0 ? [{ href: "#projekt", label: t.nav.projects }] : []),
    { href: "#fardigheter", label: t.nav.skills },
    { href: "#kontakt", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-obsidian/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-display font-semibold tracking-tight">
          Daniel Malmgren<span className="text-accent">.</span>
        </a>
        <nav aria-label={t.nav.label} className="hidden md:block">
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
        <div className="flex items-center gap-4">
          <LanguageToggle current={t.locale} label={t.nav.language} />
          <a
            href={siteConfig.booking.project}
            className="rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-obsidian transition-opacity hover:opacity-90"
          >
            {t.tracks.projects.cta}
          </a>
        </div>
      </div>
      {/* Phones: the same links in a second row that scrolls sideways if it doesn't fit. */}
      <nav aria-label={t.nav.label} className="border-t border-line md:hidden">
        <ul className="flex justify-between gap-3 overflow-x-auto px-4 py-2.5 text-sm whitespace-nowrap text-muted [scrollbar-width:none] sm:justify-start sm:gap-6 sm:px-6">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
