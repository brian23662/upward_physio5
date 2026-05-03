import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Upward Physio. Whether you're an individual or a business, we'll get back within one business day.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MapPin,
    label: "Visit",
    value: siteConfig.address,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri · 7am – 7pm",
  },
];

export default function ContactPage() {
  return (
    <>
      <Section spacing="loose" className="bg-offwhite">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-wider text-sage mb-3">
            Contact
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-navy tracking-tight text-balance">
            Let's get <span className="text-sage">started.</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
            Tell us what's going on and we'll be in touch within one business day.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-offwhite p-5"
                >
                  <Icon className="h-5 w-5 text-sage mb-3" />
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="block mt-1 text-navy font-medium hover:text-sage transition-colors text-sm"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="mt-1 text-navy font-medium text-sm">{value}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3] bg-navy/5 flex items-center justify-center text-muted-foreground text-sm relative">
              <iframe
                title="Upward Physio location map"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-80.2266%2C25.7585%2C-80.1466%2C25.7985&layer=mapnik`}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-offwhite p-8 md:p-10">
              <h2 className="text-2xl font-bold text-navy tracking-tight mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
