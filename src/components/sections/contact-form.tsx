import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  details: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(4000),
});

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      details: String(fd.get("details") || ""),
    };

    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0]?.toString();
        if (k && !fieldErrors[k]) fieldErrors[k] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      details: parsed.data.details,
      source: compact ? "inline_form" : "contact_page",
    });
    setLoading(false);

    if (error) {
      toast.error("Couldn't send your message. Please try again.");
      return;
    }
    toast.success("Message sent! We'll get back within 24 hours.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your full name" error={errors.name} />
        <Field label="Email" name="email" type="email" placeholder="you@company.com" error={errors.email} />
      </div>
      <Field label="Phone (optional)" name="phone" type="tel" placeholder="+91 90000 00000" error={errors.phone} />
      <div>
        <Label htmlFor="details" className="mb-2 inline-block text-sm">Project details</Label>
        <Textarea
          id="details"
          name="details"
          rows={compact ? 4 : 6}
          placeholder="Tell us about your project, goals, and timeline…"
          className="resize-none border-border bg-background/50 transition-all focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/30"
        />
        {errors.details && <p className="mt-1.5 text-xs text-destructive">{errors.details}</p>}
      </div>
      <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
        ) : (
          <>Send Message <Send className="h-4 w-4" /></>
        )}
      </Button>
      <p className="text-xs text-muted-foreground">
        We respect your inbox. Your details stay private and we'll only reply about your enquiry.
      </p>
    </form>
  );
}

function Field({
  label, name, type = "text", placeholder, error,
}: {
  label: string; name: string; type?: string; placeholder?: string; error?: string;
}) {
  return (
    <div>
      <Label htmlFor={name} className="mb-2 inline-block text-sm">{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="border-border bg-background/50 transition-all focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/30"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              Quick brief
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Drop us a line and we'll get back within one business day with a tailored plan and
              a no-pressure quote.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> No-obligation discovery call</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Transparent fixed-scope quotes</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> NDA available on request</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card-elegant ring-gradient">
            <ContactForm compact />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
