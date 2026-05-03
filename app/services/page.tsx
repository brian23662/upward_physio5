import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-config";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Five core specialties — occupational health, workplace wellness, injury prevention, strength & conditioning, and orthopedics.",
};

export default function ServicesPage() {
  return (
    <>
      <Section spacing="loose" className="bg-offwhite">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-wider text-sage mb-3">
            Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-navy tracking-tight text-balance">
            Specialized care for <span className="text-sage">every stage.</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
            Five focused specialties, deeply connected. Whether you're recovering,
            preventing, or performing — we've built a path for you.
          </p>
        </div>

        {/* Quick nav */}
        <div className="mt-12 flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-border hover:border-sage hover:text-sage transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </Section>

      {services.map((s, i) => {
        const Icon = getIcon(s.icon);
        const isFeature = s.slug === "occupational-health" || s.slug === "workplace-wellness";
        const flip = i % 2 === 1;
        return (
          <Section
            key={s.slug}
            className={i % 2 === 0 ? "bg-white" : "bg-offwhite"}
            containerClassName={`scroll-mt-28`}
          >
            <div id={s.slug} className="scroll-mt-28">
              <div className={`grid lg:grid-cols-12 gap-12 items-center ${flip ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7 space-y-6">
                  {isFeature && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sage-700 uppercase">
                      Corporate focus
                    </div>
                  )}
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/10 text-sage">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight text-balance">
                    {s.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                    {s.description}
                  </p>
                  <ul className="space-y-3 max-w-md">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-navy">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sage/15 shrink-0">
                          <Check className="h-3 w-3 text-sage-700" />
                        </span>
                        <span className="text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Button asChild variant={isFeature ? "sage" : "outline"}>
                      <Link href={isFeature ? "/corporate" : "/contact"}>
                        {isFeature ? "Explore corporate programs" : "Book a consult"}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-navy/5 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageFor(s.slug)}
                      alt={`${s.title} at Upward Physio`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Section>
        );
      })}
    </>
  );
}

function imageFor(slug: string): string {
  const map: Record<string, string> = {
    "occupational-health":
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80",
    "workplace-wellness":
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
    "injury-prevention":
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80",
    "strength-conditioning":
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
    orthopedics:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=900&q=80",
  };
  return map[slug] ?? map["occupational-health"];
}
