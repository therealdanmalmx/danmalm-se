"use client";

import type { Locale } from "@/content/types";

// Paths match `path` in src/content/sv.ts and en.ts (kept here so the page copy
// isn't bundled into client JavaScript).
const options: { locale: Locale; label: string; path: string }[] = [
  { locale: "sv", label: "SE", path: "/" },
  { locale: "en", label: "EN", path: "/en/" },
];

// Remembers an explicit choice so the browser-language redirect on "/" stops applying.
function remember(locale: Locale) {
  try {
    localStorage.setItem("lang", locale);
  } catch {
    // Storage blocked; the toggle still navigates.
  }
}

export function LanguageToggle({ current, label }: { current: Locale; label: string }) {
  return (
    <nav aria-label={label} className="flex font-mono text-xs">
      {options.map(({ locale, label: text, path }, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && <span className="px-1.5 text-line" aria-hidden="true">/</span>}
          <a
            href={path}
            hrefLang={locale}
            lang={locale}
            aria-current={locale === current ? "page" : undefined}
            onClick={() => remember(locale)}
            className={
              locale === current
                ? "text-accent"
                : "text-muted transition-colors hover:text-ink"
            }
          >
            {text}
          </a>
        </span>
      ))}
    </nav>
  );
}
