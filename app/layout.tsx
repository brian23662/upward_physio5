import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "physical therapy",
    "occupational health",
    "workplace wellness",
    "injury prevention",
    "orthopedics",
    "strength and conditioning",
    "corporate wellness",
  ],
  openGraph: {
    type: "website",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {/* JSON-LD for local business */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                name: siteConfig.name,
                description: siteConfig.description,
                url: siteConfig.url,
                telephone: siteConfig.phone,
                email: siteConfig.email,
                address: { "@type": "PostalAddress", streetAddress: siteConfig.address },
                medicalSpecialty: ["PhysicalTherapy", "OccupationalHealth", "Orthopedic"],
              }),
            }}
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
