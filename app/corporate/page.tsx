import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingDown,
  Clock,
  Users,
  ShieldCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "For Businesses",
  description:
    "Reduce workers' comp costs, boost retention, and build a healthier workforce with Upward Physio's occupational health and workplace wellness programs.",
};

const outcomes = [
  {
    icon: TrendingDown,
    stat: "47%",
    label: "Average reduction in workers' comp claims",
  },
  {
    icon: Clock,
    stat: "11 days",
    label: "Faster average return-to-work timeline",
  },
  {
    icon: Users,
    stat: "92%",
    label: "Employee program satisfaction score",
  },
  {
    icon: ShieldCheck,
    stat: "3.2×",
    label: "ROI on workplace wellness investment",
  },
];

const programs = [
  {
    title: "On-Site Injury Triage",
    body: "Dedicated clinician hours at your facility to assess and address musculoskeletal complaints before they become OSHA recordables.",
    points: ["First-report-of-injury support", "Same-day intervention", "Documented outcomes"],
  },
  {
    title: "Ergonomic Assessments",
    body: "Workstation, jobsite, and process-level evaluations with prioritized, cost-aware remediation plans your facilities team can actually execute.",
    points: ["Office and industrial settings", "Risk scoring and prioritization", "Follow-up validation"],
  },
  {
    title: "Pre-Employment Screening",
    body: "Job-specific physical capability testing aligned to your essential functions — defensible, validated, and consistently administered.",
    points: ["Custom protocols per role", "EEOC-aligned design", "Centralized reporting"],
  },
  {
    title: "Return-to-Work Programs",
    body: "Coordinated rehabilitation that gets your people back to full duty faster, with clear communication to HR and supervisors throughout.",
    points: ["Modified-duty planning", "Functional capacity evaluations", "Discharge documentation"],
  },
  {
    title: "Workplace Wellness Programming",
    body: "From posture clinics to group conditioning to mobility breaks — proactive programs that move the dial on culture and absenteeism.",
    points: ["On-site or virtual delivery", "Quarterly health metrics", "Engagement-driven design"],
  },
  {
    title: "Executive & Performance Health",
    body: "Premium one-on-one care for your leadership team and high-performers who can't afford downtime.",
    points: ["Concierge scheduling", "Performance baselining", "Priority access"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery call",
    body: "30 minutes. We learn your industry, headcount, current pain points, and what you've tried.",
  },
  {
    step: "02",
    title: "Custom proposal",
    body: "Within a week, you get a tailored program scope, timeline, and pricing — no boilerplate.",
  },
  {
    step: "03",
    title: "Pilot & measure",
    body: "We start with a defined pilot scope and measurable KPIs so you can prove ROI before scaling.",
  },
  {
    step: "04",
    title: "Scale together",
    body: "Quarterly reviews, evolving programs, and a partner that grows with your headcount.",
  },
];

export default function CorporatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 gradient-radial opacity-50 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-sage/20 blur-3xl pointer-events-none" />
        <div className="container relative pt-20 md:pt-28 pb-20 md:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-sage/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-sage-100 uppercase mb-6">
              <Building2 className="h-3.5 w-3.5" />
              For HR, Wellness Directors & Safety Managers
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Lower claims.<br />
              <span className="text-sage-100">Higher retention.</span>
            </h1>
            <p className="text-xl text-white/80 mt-6 leading-relaxed max-w-2xl">
              Upward Physio partners with companies who take their people
              seriously. We design occupational health and wellness programs
              that pay for themselves — and we measure the proof.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <Button asChild size="lg" variant="sage">
                <Link href="#proposal">
                  Request a Proposal
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-navy"
              >
                <Link href="#programs">See programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <Section className="bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map(({ icon: Icon, stat, label }) => (
            <div
              key={label}
              className="rounded-2xl bg-offwhite p-7 border border-border"
            >
              <Icon className="h-7 w-7 text-sage mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-navy tracking-tight">{stat}</div>
              <div className="text-sm text-muted-foreground mt-2 leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Programs */}
      <Section id="programs" className="bg-offwhite">
        <div className="max-w-2xl mb-14">
          <div className="text-sm font-semibold uppercase tracking-wider text-sage mb-3">
            Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight text-balance">
            Built for the way your<br /><span className="text-sage">workforce actually works.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white border border-border p-7 hover:shadow-lg hover:border-sage/40 transition-all"
            >
              <h3 className="text-xl font-bold text-navy tracking-tight mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.body}</p>
              <ul className="space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-navy">
                    <CheckCircle2 className="h-4 w-4 text-sage shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-2xl mb-14">
          <div className="text-sm font-semibold uppercase tracking-wider text-sage mb-3">
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight text-balance">
            From first call to measurable impact.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((s) => (
            <div key={s.step} className="relative">
              <div className="text-6xl font-bold text-sage/20 leading-none mb-4">{s.step}</div>
              <h3 className="text-lg font-bold text-navy tracking-tight mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Case study placeholder */}
      <Section className="bg-offwhite">
        <div className="rounded-3xl bg-navy text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sage/15 blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-sage-100 mb-3">
                Case study
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                A 600-person logistics operator cut OSHA recordables by 52% in 18 months.
              </h3>
              <p className="text-white/80 mt-5 leading-relaxed">
                Two days a week of on-site triage. A custom ergonomic
                intervention for their dock crew. A return-to-work pathway that
                cut average lost days from 23 to 9. Their CFO had a very good
                year.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "OSHA recordables", v: "↓ 52%" },
                { k: "Lost days", v: "↓ 61%" },
                { k: "Return-to-work", v: "9 days" },
                { k: "Program ROI", v: "4.1×" },
              ].map((m) => (
                <div key={m.k} className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
                  <div className="text-3xl font-bold text-sage-100">{m.v}</div>
                  <div className="text-xs text-white/70 mt-1.5 leading-snug">{m.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Proposal form */}
      <Section id="proposal" className="bg-white">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-sm font-semibold uppercase tracking-wider text-sage mb-3">
              Let's talk
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight text-balance">
              Request a corporate proposal.
            </h2>
            <p className="text-lg text-muted-foreground mt-5 leading-relaxed">
              Tell us a little about your team and what you're trying to solve.
              We'll get back within one business day to schedule a 30-minute
              discovery call.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "No-obligation discovery call",
                "Custom proposal within 7 days",
                "Pilot programs starting at 1 site",
              ].map((p) => (
                <div key={p} className="flex items-center gap-3 text-navy">
                  <CheckCircle2 className="h-5 w-5 text-sage" />
                  <span className="text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-offwhite p-8">
              <ContactForm defaultInquiryType="corporate" variant="corporate" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
