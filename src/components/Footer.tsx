import Image from "next/image";
import type { Content } from "@/content/content";
import { SocialLinks } from "./SocialLinks";

export function Footer({ t }: { t: Content }) {
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
          console.log(&quot;{t.footerGreeting}&quot;);
        </p>
        <SocialLinks t={t} />
      </div>
    </footer>
  );
}
