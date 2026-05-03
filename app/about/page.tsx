import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Upward Physio — our philosophy, our team, and why we built a practice around personalized care for individuals and organizations.",
};

export default function AboutPage() {
  return (
    <>
      <Section spacing="loose" className="bg-offwhite">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-wider text-sage mb-3">
            About us
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-navy tracking-tight text-balance">
            Care that <span className="text-sage">moves with you.</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
            Upward Physio was founded on a simple frustration: the modern PT
            experience had become rushed, transactional, and disconnected from
            the people it was meant to serve. We're rebuilding it.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="text-sm font-semibold uppercase tracking-wider text-sage mb-3">
              Our philosophy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Three principles that shape every visit.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-10">
            {[
              {
                num: "01",
                title: "Time is the treatment.",
                body: "Most clinics pack in three patients an hour. We don't. Every appointment is one-on-one with your clinician — start to finish. That's where real assessment happens, and that's where real progress comes from.",
              },
              {
                num: "02",
                title: "Movement is medicine.",
                body: "We believe in active rehabilitation. Yes, we use manual therapy, dry needling, and the modalities that work — but the work that lasts is the work you do with your own body. We teach you to do it well.",
              },
              {
                num: "03",
                title: "Outcomes over visits.",
                body: "We don't pad your plan of care. The goal is to discharge you better than we found you, as fast as we responsibly can — and to give you the tools to keep yourself there.",
              },
            ].map((p) => (
              <div key={p.num} className="border-l-2 border-sage pl-6">
                <div className="text-xs font-semibold tracking-wider text-sage mb-2">
                  {p.num}
                </div>
                <h3 className="text-2xl font-bold text-navy tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-offwhite">
        <div className="rounded-3xl bg-navy p-10 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-sage/20 blur-3xl pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Want to meet the team?
            </h2>
            <p className="text-white/80 mt-4 leading-relaxed">
              The fastest way to know if we're the right fit is a conversation.
            </p>
            <Button asChild size="lg" variant="sage" className="mt-8">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
