type SectionProps = {
  id: string;
  number: string;
  label: string;
  children: React.ReactNode;
};

// Editorial layout: numbered label in a side column on desktop, stacked on mobile.
export function Section({ id, number, label, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28 border-t border-line md:scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[12rem_1fr] md:py-24 lg:px-8">
        <h2 id={`${id}-heading`} className="font-display text-sm tracking-widest text-muted uppercase">
          <span className="text-accent">{number}</span> — {label}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
