export const siteConfig = {
  name: "Upward Physio",
  tagline: "Move Better. Feel Stronger. Live Higher.",
  description:
    "Premier physical therapy specializing in occupational health, strength & conditioning, orthopedics, injury prevention, and workplace wellness.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://upwardphysio.com",
  email: "hello@upwardphysio.com",
  phone: "(555) 123-4567",
  address: "123 Movement Way, Suite 200",
};

// Use string keys instead of imported components so this data
// can be passed from server components to client components safely.
export type IconName =
  | "Briefcase"
  | "Heart"
  | "Shield"
  | "Dumbbell"
  | "Bone";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: IconName;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "occupational-health",
    title: "Occupational Health",
    short: "Keep your workforce moving.",
    description:
      "Comprehensive on-site and clinic-based programs designed to reduce workplace injuries, accelerate return-to-work timelines, and lower workers' comp costs.",
    icon: "Briefcase",
    highlights: [
      "Pre-employment screenings",
      "Ergonomic assessments",
      "Return-to-work programs",
      "On-site injury triage",
    ],
  },
  {
    slug: "workplace-wellness",
    title: "Workplace Wellness",
    short: "Healthier teams. Happier metrics.",
    description:
      "Proactive wellness programming that builds healthier, more resilient employees — from posture clinics to movement education and group conditioning.",
    icon: "Heart",
    highlights: [
      "Posture & desk ergonomics",
      "Stretch & mobility breaks",
      "Educational workshops",
      "Quarterly health metrics",
    ],
  },
  {
    slug: "injury-prevention",
    title: "Injury Prevention",
    short: "Stop injuries before they start.",
    description:
      "Evidence-based screening and movement coaching to identify risk factors and address them before they become time off.",
    icon: "Shield",
    highlights: [
      "Movement screening",
      "Risk assessment",
      "Corrective exercise plans",
      "Custom team programs",
    ],
  },
  {
    slug: "strength-conditioning",
    title: "Strength & Conditioning",
    short: "Build a body that lasts.",
    description:
      "Performance-driven programming for athletes, weekend warriors, and anyone who wants to feel powerful in their own body.",
    icon: "Dumbbell",
    highlights: [
      "Sport-specific programming",
      "Strength testing",
      "Performance coaching",
      "Periodized training plans",
    ],
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    short: "Recover with confidence.",
    description:
      "One-on-one rehabilitation for joint pain, post-surgical recovery, and orthopedic conditions — with hands-on care from start to discharge.",
    icon: "Bone",
    highlights: [
      "Post-surgical rehab",
      "Joint pain management",
      "Manual therapy",
      "Sport injury recovery",
    ],
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/corporate", label: "For Businesses" },
  { href: "/contact", label: "Contact" },
];
