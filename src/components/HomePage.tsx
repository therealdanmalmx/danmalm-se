import { siteConfig } from "@/site.config";
import type { Content } from "@/content/content";
import { Contact } from "./Contact";
import { ExperienceList } from "./ExperienceList";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProjectList } from "./ProjectList";
import { Section } from "./Section";
import { Skills } from "./Skills";
import { Testimonials } from "./Testimonials";
import { Tracks } from "./Tracks";

export function HomePage({ t }: { t: Content }) {
  // Numbers sections in render order, so hiding one doesn't leave a gap.
  let count = 0;
  const next = () => String(++count).padStart(2, "0");
  const s = t.sections;

  return (
    <>
      <Header t={t} />
      <main>
        <Hero t={t} />
        <Section id="om-mig" number={next()} label={s.about}>
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed">
            {t.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>
        <Section id="samarbete" number={next()} label={s.collaboration}>
          <Tracks t={t} />
        </Section>
        <Section id="erfarenhet" number={next()} label={s.experience}>
          <ExperienceList t={t} />
          <a
            href={siteConfig.cv[t.locale]}
            download
            className="mt-10 inline-block rounded-sm border border-accent px-5 py-2.5 font-semibold text-accent transition-colors hover:bg-accent hover:text-obsidian"
          >
            {t.experienceUi.downloadCv}
          </a>
        </Section>
        {t.projects.length > 0 && (
          <Section id="projekt" number={next()} label={s.projects}>
            <ProjectList t={t} />
          </Section>
        )}
        {t.testimonials.length > 0 && (
          <Section id="rekommendationer" number={next()} label={s.testimonials}>
            <Testimonials t={t} />
          </Section>
        )}
        <Section id="fardigheter" number={next()} label={s.skills}>
          <Skills t={t} />
        </Section>
        <Section id="kontakt" number={next()} label={s.contact}>
          <Contact t={t} />
        </Section>
      </main>
      <Footer t={t} />
    </>
  );
}
