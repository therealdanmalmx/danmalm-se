import Image from "next/image";
import { siteConfig } from "@/site.config";
import type { Content } from "@/content/content";
import { SocialLinks } from "./SocialLinks";

// On phones the photo shrinks and sits next to the role line, so the status line
// and the booking button fit on the first screen. From md up: large photo on the right.
export function Hero({ t }: { t: Content }) {
  const { hero } = t;
  const photo = { src: "/images/daniel.jpg", alt: hero.photoAlt, width: 576, height: 576, priority: true };
  return (
    <div id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-8 pb-16 sm:px-6 md:grid-cols-[1fr_18rem] md:pt-24 md:pb-28 lg:grid-cols-[1fr_22rem] lg:px-8">
      <Image {...photo} className="hidden w-full rounded-sm grayscale-[15%] md:order-2 md:block" />
      <div className="md:order-1">
        {/* The role line is part of the h1 so the heading carries the job title and stack. */}
        <h1>
          <span className="flex items-center gap-4">
            <Image {...photo} alt="" className="w-16 shrink-0 rounded-sm grayscale-[15%] md:hidden" />
            <span className="font-mono text-sm tracking-wide text-accent uppercase">{t.role}</span>
          </span>
          <span className="mt-5 block font-display text-[2rem] leading-[1.1] font-bold tracking-tight sm:text-5xl md:mt-6">
            {hero.headline.before}
            <em className="text-accent">{hero.headline.emphasis}</em>
            {hero.headline.after}
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed sm:text-xl md:mt-8">
          {hero.greeting} <strong className="font-semibold">{siteConfig.name}</strong> – {hero.intro}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted md:mt-6">
          {t.status} <span className="text-ink">{t.availability}</span>
          <br />
          {t.location}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4 md:mt-10">
          <a
            href={siteConfig.booking.interview}
            className="rounded-sm bg-accent px-6 py-3 font-semibold text-obsidian transition-opacity hover:opacity-90"
          >
            {t.tracks.employment.cta}
          </a>
          <a href={siteConfig.booking.project} className="text-muted underline-offset-4 transition-colors hover:text-ink hover:underline">
            {hero.projectLink}
          </a>
          <SocialLinks t={t} className="text-muted" />
          <a
            href={siteConfig.cv[t.locale]}
            download
            aria-label={t.experienceUi.downloadCv.replace(" ↓", "")}
            className="font-mono text-sm text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            CV ↓
          </a>
        </div>
      </div>
    </div>
  );
}
