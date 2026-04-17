import { Reveal } from "@/components/reveal";

const BRANDS = [
  "Lumen", "Noor", "Estate", "Scholar", "Pulse", "Fork & Co.", "Atlas", "Ledger",
];

export function Trust() {
  return (
    <section className="border-y border-border bg-card/30 py-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by ambitious teams across the globe
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 md:grid-cols-8">
          {BRANDS.map((b, i) => (
            <Reveal key={b} delay={i * 0.04}>
              <div className="text-center font-display text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-foreground">
                {b}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
