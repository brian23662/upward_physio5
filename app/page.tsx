import Link from "next/link";
import {
  Award,
  Users,
  TrendingUp,
  HandHeart,
  ArrowRight,
  Building2,
  Quote,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-config";

const whyUs = [
  {
    icon: Award,
    title: "Doctorate-level care",
    body: "Every clinician is a Doctor of Physical Therapy with advanced certifications.",
  },
  {
    icon: Users,
    title: "1-on-1, every visit",
    body: "No double-bookings. No assistants doing the work. Just focused, hands-on care.",
  },
  {
    icon: TrendingUp,
    title: "Outcomes you can measure",
    body: "Quarterly reporting for corporate clients. Goal tracking for individuals.",
  },
  {
    icon: HandHeart,
    title: "Built for both worlds",
    body: "From individual recovery to enterprise wellness — we speak both languages.",
  },
];

const testimonials = [
  {
    quote:
      "Upward Physio's on-site program has measurably reduced our reportable injuries. The ROI conversation with our CFO got a lot easier.",
    name: "Sarah Chen",
    role: "VP of People Operations",
    company: "Meridian Logistics",
    type: "corporate",
  },
  {
    quote:
      "I came in barely able to walk after my knee surgery. Six weeks later I was back to running. They actually listen.",
    name: "Marcus Holloway",
    role: "Patient",
    type: "individual",
  },
  {
    quote:
      "The ergonomic assessments alone saved us six figures in workers' comp claims last year. Our employees rave about the stretch programs.",
    name: "Jennifer Park",
    role: "Director of EHS",
    company: "Brightline Manufacturing",
    type: "corporate",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services overview */}
      <Section spacing="loose" className="bg-white">
        <div className="max-w-2xl mb-14">
          <div className="text-sm font-semibold uppercase tracking-wider text-sage mb-3">
            What we do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight text-balance">
            Five specialties.<br />
            <span className="text-sage">One mission:</span> keep you moving.
          </h2>
          <p className="text-lg text-muted-foreground mt-5 leading-relaxed">
            Whether you're a CHRO building a wellness program for 500 employees
            or recovering from your first marathon, we have a path forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard
              key={s.slug}
              service={s}
              index={i}
              featured={s.slug === "occupational-health"}
            />
          ))}
        </div>
      </Section>

      {/* Why Upward */}
      <Section className="bg-offwhite">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-sm font-semibold uppercase tracking-wider text-sage mb-3">
              Why Upward
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight text-balance">
              Care that's actually personal.
            </h2>
            <p className="text-lg text-muted-foreground mt-5 leading-relaxed">
              We built Upward Physio around a simple idea: people heal better
              when they're treated like people, not chart numbers. That same
              philosophy scales to the businesses we partner with.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {whyUs.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl bg-white border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-sage/10 text-sage mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-navy mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Corporate spotlight */}
      <Section spacing="loose" className="bg-navy text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-sage/20 blur-3xl pointer-events-none" />
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sage/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-sage-100 uppercase mb-6">
              <Building2 className="h-3.5 w-3.5" />
              For HR & wellness directors
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Healthier teams.<br />
              <span className="text-sage-100">Better business outcomes.</span>
            </h2>
            <p className="text-lg text-white/80 mt-5 leading-relaxed max-w-xl">
              From ergonomic assessments to on-site injury triage and
              return-to-work programs — we're the partner that lowers your
              workers' comp spend while raising your retention numbers.
            </p>
            <Button asChild size="lg" variant="sage" className="mt-8">
              <Link href="/corporate">
                Explore Corporate Solutions
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "47%", label: "Average reduction in workers' comp claims" },
              { stat: "3.2x", label: "ROI on workplace wellness investment" },
              { stat: "11 days", label: "Faster average return-to-work" },
              { stat: "92%", label: "Employee program satisfaction" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6"
              >
                <div className="text-4xl font-bold text-sage-100 mb-2">{s.stat}</div>
                <div className="text-sm text-white/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <div className="max-w-2xl mb-14">
          <div className="text-sm font-semibold uppercase tracking-wider text-sage mb-3">
            What people say
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight text-balance">
            Trusted by individuals<br />
            <span className="text-sage">and organizations.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-offwhite border border-border p-7 hover:shadow-lg transition-shadow"
            >
              <Quote className="h-8 w-8 text-sage/40 mb-4" />
              <p className="text-navy leading-relaxed mb-6">{t.quote}</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-navy text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">
                  {t.role}{t.company && ` · ${t.company}`}
                </div>
              </div>
              <div className="absolute top-7 right-7">
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                    t.type === "corporate"
                      ? "bg-sage/10 text-sage-700"
                      : "bg-navy/5 text-navy"
                  }`}
                >
                  {t.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section spacing="loose" className="bg-offwhite">
        <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-800 p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 gradient-radial opacity-50 pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Ready to move <span className="text-sage-100">upward?</span>
            </h2>
            <p className="text-lg text-white/80 mt-4 leading-relaxed">
              Whether it's your first session or your first corporate program — let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Button asChild size="lg" variant="sage">
                <Link href="/contact">Book a Consult</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-navy">
                <Link href="/corporate">Corporate Inquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
