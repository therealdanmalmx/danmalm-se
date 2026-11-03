import Image from "next/image";
import { siteConfig } from "@/site.config";
import { hero } from "@/content/content";
import { DiscordIcon, GitHubIcon, LinkedInIcon } from "./icons";

export function Hero() {
  return (
    <div id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-20 sm:px-6 md:grid-cols-[1fr_18rem] md:pt-24 md:pb-28 lg:grid-cols-[1fr_22rem] lg:px-8">
      <Image
        src="/images/daniel.jpg"
        alt="Porträtt av Daniel Malmgren de Oliveira"
        width={576}
        height={576}
        priority
        className="w-32 rounded-sm grayscale-[15%] md:order-2 md:w-full"
      />
      <div className="md:order-1">
        <p className="font-mono text-sm tracking-wide text-accent uppercase">{siteConfig.role}</p>
        <h1 className="mt-6 font-display text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl">
          {hero.headline.before}
          <em className="text-accent">{hero.headline.emphasis}</em>
          {hero.headline.after}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">
          Hej, jag heter <strong className="font-semibold">{siteConfig.name}</strong> – {hero.intro}
        </p>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          {siteConfig.status} <span className="text-ink">{siteConfig.availability}</span>
          <br />
          {siteConfig.location}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={siteConfig.booking.interview}
            className="rounded-sm bg-accent px-6 py-3 font-semibold text-obsidian transition-opacity hover:opacity-90"
          >
            Boka samtal
          </a>
          <a href="#samarbete" className="text-muted underline-offset-4 transition-colors hover:text-ink hover:underline">
            eller diskutera ett projekt →
          </a>
          <div className="flex gap-4 text-muted">
            <a href={siteConfig.linkedin} aria-label="LinkedIn (öppnas i ny flik)" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              <LinkedInIcon />
            </a>
            <a href={siteConfig.github} aria-label="GitHub (öppnas i ny flik)" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              <GitHubIcon />
            </a>
            <a href={siteConfig.discord} aria-label="Discord (öppnas i ny flik)" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              <DiscordIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
