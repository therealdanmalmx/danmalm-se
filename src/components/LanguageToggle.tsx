"use client";

import type { Locale } from "@/content/types";

// Paths match `path` in src/content/sv.ts and en.ts (kept here so the page copy
// isn't bundled into client JavaScript).
const options: { locale: Locale; label: string; path: string }[] = [
  { locale: "sv", label: "SE", path: "/" },
  { locale: "en", label: "EN", path: "/en/" },
];

// Remembers an explicit choice in a cookie. Caddy reads it: with a `lang` cookie set,
// "/" is no longer redirected to "/en/" based on the browser language.
function remember(locale: Locale) {
  document.cookie = `lang=${locale}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
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
