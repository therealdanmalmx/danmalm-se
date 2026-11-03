import Image from "next/image";
import { siteConfig } from "@/site.config";
import type { Content } from "@/content/content";
import { SocialLinks } from "./SocialLinks";

export function Hero({ t }: { t: Content }) {
  const { hero } = t;
  return (
    <div id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-20 sm:px-6 md:grid-cols-[1fr_18rem] md:pt-24 md:pb-28 lg:grid-cols-[1fr_22rem] lg:px-8">
      <Image
        src="/images/daniel.jpg"
        alt={hero.photoAlt}
        width={576}
        height={576}
        priority
        className="w-32 rounded-sm grayscale-[15%] md:order-2 md:w-full"
      />
      <div className="md:order-1">
        <p className="font-mono text-sm tracking-wide text-accent uppercase">{t.role}</p>
        <h1 className="mt-6 font-display text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl">
          {hero.headline.before}
          <em className="text-accent">{hero.headline.emphasis}</em>
          {hero.headline.after}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">
          {hero.greeting} <strong className="font-semibold">{siteConfig.name}</strong> – {hero.intro}
        </p>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          {t.status} <span className="text-ink">{t.availability}</span>
          <br />
          {t.location}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={siteConfig.booking.interview}
            className="rounded-sm bg-accent px-6 py-3 font-semibold text-obsidian transition-opacity hover:opacity-90"
          >
            {t.tracks.employment.cta}
          </a>
          <a href="#samarbete" className="text-muted underline-offset-4 transition-colors hover:text-ink hover:underline">
            {hero.projectLink}
          </a>
          <SocialLinks t={t} className="text-muted" />
        </div>
      </div>
    </div>
  );
}
