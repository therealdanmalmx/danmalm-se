import { siteConfig } from "@/site.config";
import type { Content } from "@/content/content";
import { CalendarIcon, MailIcon, PhoneIcon } from "./icons";

const cellClass = "flex flex-col gap-3 border border-line p-6 transition-colors hover:border-accent";

export function Contact({ t }: { t: Content }) {
  const c = t.contact;
  return (
    <>
      <p className="max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl">{c.heading}</p>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{c.summary}</p>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <a href={`mailto:${siteConfig.email}`} className={cellClass}>
          <MailIcon className="size-6 text-accent" />
          <span className="font-display text-sm tracking-widest text-muted uppercase">{c.email}</span>
          <span className="break-all">{siteConfig.email}</span>
        </a>
        <a href={`tel:${siteConfig.phone.href}`} className={cellClass}>
          <PhoneIcon className="size-6 text-accent" />
          <span className="font-display text-sm tracking-widest text-muted uppercase">{c.phone}</span>
          <span>{siteConfig.phone.display}</span>
        </a>
        <div className={cellClass}>
          <CalendarIcon className="size-6 text-accent" />
          <span className="font-display text-sm tracking-widest text-muted uppercase">{c.booking}</span>
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <a href={siteConfig.booking.interview} className="text-accent underline-offset-4 hover:underline">
              {c.bookInterview}
            </a>
            <a href={siteConfig.booking.project} className="text-accent underline-offset-4 hover:underline">
              {c.bookProject}
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
