"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-offwhite">
      {/* Decorative gradient blob */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sage/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-navy/5 blur-3xl pointer-events-none" />

      {/* Subtle upward arrow watermark */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-[0.04] pointer-events-none"
        width="700"
        height="700"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M 15 85 Q 40 70 60 40 L 85 12"
          stroke="#0A2540"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="container relative pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-sage-700 uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
              Now booking corporate wellness programs
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.05] text-balance"
            >
              Move better.{" "}
              <span className="text-sage">Feel stronger.</span>{" "}
              <span className="block">Live higher.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Premier physical therapy specializing in occupational health and
              workplace wellness — keeping individuals and entire workforces
              moving forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button asChild size="lg" variant="sage">
                <Link href="/corporate">
                  <Building2 className="h-5 w-5" />
                  Corporate Solutions
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Book a Consult</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-navy">12+</span>
                <span>Years experience</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-navy">40+</span>
                <span>Corporate partners</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-navy">98%</span>
                <span>Client satisfaction</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80"
                alt="Physical therapist working with a patient"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-2xl p-5 shadow-xl border border-border max-w-[240px]"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-sage mb-1">
                Workers' comp savings
              </div>
              <div className="text-3xl font-bold text-navy">↓ 47%</div>
              <div className="text-xs text-muted-foreground mt-1">
                Average reduction across our corporate partners
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
