import { siteConfig } from "@/site.config";
import { contactHeading, contactSummary } from "@/content/content";
import { CalendarIcon, MailIcon, PhoneIcon } from "./icons";

const cellClass = "flex flex-col gap-3 border border-line p-6 transition-colors hover:border-accent";

export function Contact() {
  return (
    <>
      <p className="max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl">{contactHeading}</p>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{contactSummary}</p>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <a href={`mailto:${siteConfig.email}`} className={cellClass}>
          <MailIcon className="size-6 text-accent" />
          <span className="font-display text-sm tracking-widest text-muted uppercase">E-post</span>
          <span className="break-all">{siteConfig.email}</span>
        </a>
        <a href={`tel:${siteConfig.phone.href}`} className={cellClass}>
          <PhoneIcon className="size-6 text-accent" />
          <span className="font-display text-sm tracking-widest text-muted uppercase">Telefon</span>
          <span>{siteConfig.phone.display}</span>
        </a>
        <div className={cellClass}>
          <CalendarIcon className="size-6 text-accent" />
          <span className="font-display text-sm tracking-widest text-muted uppercase">Boka möte · 30 min</span>
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <a href={siteConfig.booking.interview} className="text-accent underline-offset-4 hover:underline">
              Samtal om anställning →
            </a>
            <a href={siteConfig.booking.project} className="text-accent underline-offset-4 hover:underline">
              Projektmöte →
            </a>
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted">
        Alternativ e-post:{" "}
        <a href={`mailto:${siteConfig.emailAlt}`} className="text-ink underline-offset-4 hover:text-accent hover:underline">
          {siteConfig.emailAlt}
        </a>
      </p>
    </>
  );
}
