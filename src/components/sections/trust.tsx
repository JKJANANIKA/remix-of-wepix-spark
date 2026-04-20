import { Reveal } from "@/components/reveal";

const CLIENTS: { name: string; url: string; logo: string }[] = [
  { name: "Alankar Chennai", url: "https://alankarchennai.in/", logo: "/logos/client-01.png" },
  { name: "Eitara", url: "https://www.myeitara.com/", logo: "/logos/client-02.png" },
  { name: "Velaura", url: "https://velaura.in/", logo: "/logos/client-03.png" },
  { name: "Pearloze", url: "https://pearloze.com/", logo: "/logos/client-04.png" },
  { name: "Lifashion", url: "https://lifashion.co.in/", logo: "/logos/client-05.png" },
  { name: "Reviash", url: "https://reviash.com/", logo: "/logos/client-06.png" },
  { name: "Yazhli Collection", url: "https://yazhlicollection.com/", logo: "/logos/client-07.png" },
  { name: "Label Jas", url: "https://labeljas.com/", logo: "/logos/client-08.png" },
  { name: "Ishika Trends", url: "https://ishikatrends.com/", logo: "/logos/client-09.png" },
  { name: "Uzvieco Store", url: "https://www.uzviecostore.com/", logo: "/logos/client-10.png" },
  { name: "Lemoon Baby", url: "https://www.lemoonbaby.in/", logo: "/logos/client-11.png" },
  { name: "Suva Attire", url: "https://suvaattire.com/", logo: "/logos/client-12.png" },
  { name: "Mini Tantini", url: "https://www.minitantini.com/", logo: "/logos/client-13.png" },
  { name: "Seams to Love", url: "https://seamstolove.com/", logo: "/logos/client-14.png" },
  { name: "Cloudy Fit", url: "https://cloudyfitbyasmitha.com/", logo: "/logos/client-15.png" },
  { name: "Ogha Clothing", url: "https://www.oghaclothing.com/", logo: "/logos/client-16.png" },
  { name: "Hrudhay", url: "https://hrudhay.com/", logo: "/logos/client-17.png" },
  { name: "Angelic Weaves", url: "https://angelicweaves.com/", logo: "/logos/client-18.png" },
  { name: "Madhava SDS", url: "https://madhavasds.com/", logo: "/logos/client-19.png" },
  { name: "Plumeria by J", url: "https://plumeriabyj.com/", logo: "/logos/client-20.png" },
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
        <div className="mt-8 grid grid-cols-2 items-center gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 10) * 0.03}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${c.name}`}
                className="group flex h-20 items-center justify-center rounded-xl border border-border bg-card/60 px-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elegant"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="max-h-12 w-auto max-w-[140px] object-contain opacity-80 transition-all group-hover:opacity-100"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
