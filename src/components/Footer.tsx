import Image from "next/image";
import { siteConfig } from "@/site.config";
import { DiscordIcon, GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line bg-obsidian-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="flex items-center gap-3 font-mono">
          <Image
            src="/images/avatar.png"
            alt=""
            width={32}
            height={32}
            className="size-8 shrink-0 rounded-full object-cover object-top"
          />
          console.log(&quot;hälsningar från Daniel&quot;);
        </p>
        <div className="flex gap-4">
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
    </footer>
  );
}
