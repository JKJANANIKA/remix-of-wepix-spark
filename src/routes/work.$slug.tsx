import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found — Wepix" }] };
    const title = `${p.title} — ${p.category} | Wepix Case Study`;
    const description = p.excerpt;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: p.image },
        { property: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 pt-40 pb-24 text-center">
      <h1 className="font-display text-4xl font-bold">Project not found</h1>
      <p className="mt-3 text-muted-foreground">
        The case study you're looking for doesn't exist.
      </p>
      <Link
        to="/work"
        className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Work
      </Link>
    </div>
  ),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();

  return (
    <>
      <section className="pt-32 pb-12 sm:pt-40">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All Work
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
                {project.tech}
              </span>
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                {project.category}
              </span>
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">
              Client · {project.client}
            </p>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{project.excerpt}</p>

            {project.url && (
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit live website <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <Link to="/contact">
                    Start a similar project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={project.image}
                alt={`${project.title} — ${project.category}`}
                width={1280}
                height={896}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <h2 className="font-display text-3xl font-bold">About the project</h2>
            <p className="mt-4 text-muted-foreground">{project.excerpt}</p>
            <p className="mt-4 text-muted-foreground">
              We partnered with {project.client} to design and build a {project.category.toLowerCase()}{" "}
              experience on {project.tech}. From discovery through launch, we focused on
              performance, conversion, and a brand-true visual language that scales.
            </p>

            <h3 className="mt-10 font-display text-xl font-semibold">Scope of work</h3>
            <ul className="mt-4 space-y-2">
              {project.scope.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Results
              </h3>
              <div className="mt-4 space-y-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="font-display text-3xl font-bold text-gradient-brand">
                      {m.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
              {project.url && (
                <Button asChild variant="hero" className="mt-6 w-full">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Open website <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        eyebrow="Like what you see?"
        title="Let's build your next case study"
        subtitle="Tell us about your goals — we'll bring the strategy, design and engineering."
      />
    </>
  );
}
