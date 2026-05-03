import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import { siteConfig, services } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo variant="light" />
          <p className="text-sm text-white/70 max-w-xs leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-sage-100 mb-4">
            Services
          </h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="text-sm text-white/70 hover:text-sage-100 transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-sage-100 mb-4">
            Company
          </h4>
          <ul className="space-y-2.5">
            <li><Link href="/about" className="text-sm text-white/70 hover:text-sage-100">About</Link></li>
            <li><Link href="/corporate" className="text-sm text-white/70 hover:text-sage-100">For Businesses</Link></li>
            <li><Link href="/contact" className="text-sm text-white/70 hover:text-sage-100">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-sage-100 mb-4">
            Get In Touch
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 text-sage-100 shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-sage-100">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 text-sage-100 shrink-0" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-sage-100">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 text-sage-100 shrink-0" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Upward Physio. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
