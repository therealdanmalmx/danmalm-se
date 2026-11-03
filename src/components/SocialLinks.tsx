import { siteConfig } from "@/site.config";
import type { Content } from "@/content/content";
import { DiscordIcon, GitHubIcon, LinkedInIcon } from "./icons";

const links = [
  { name: "LinkedIn", href: siteConfig.linkedin, Icon: LinkedInIcon },
  { name: "GitHub", href: siteConfig.github, Icon: GitHubIcon },
  { name: "Discord", href: siteConfig.discord, Icon: DiscordIcon },
];

export function SocialLinks({ t, className = "" }: { t: Content; className?: string }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          aria-label={`${name} ${t.newTab}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-ink"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
