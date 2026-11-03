import { about, projects } from "@/content/content";
import { siteConfig } from "@/site.config";
import { Contact } from "@/components/Contact";
import { ExperienceList } from "@/components/ExperienceList";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectList } from "@/components/ProjectList";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { Tracks } from "@/components/Tracks";

export default function Home() {
  // Numbers sections in render order, so hiding one doesn't leave a gap.
  let count = 0;
  const next = () => String(++count).padStart(2, "0");

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section id="om-mig" number={next()} label="Om mig">
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>
        <Section id="samarbete" number={next()} label="Samarbete">
          <Tracks />
        </Section>
        <Section id="erfarenhet" number={next()} label="Erfarenhet">
          <ExperienceList />
          <a
            href={siteConfig.cv}
            download
            className="mt-10 inline-block rounded-sm border border-accent px-5 py-2.5 font-semibold text-accent transition-colors hover:bg-accent hover:text-obsidian"
          >
            Ladda ner CV (PDF) ↓
          </a>
        </Section>
        {projects.length > 0 && (
          <Section id="projekt" number={next()} label="Projekt">
            <ProjectList />
          </Section>
        )}
        <Section id="fardigheter" number={next()} label="Kompetens">
          <Skills />
        </Section>
        <Section id="kontakt" number={next()} label="Kontakt">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}
