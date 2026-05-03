"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white/0"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  active ? "text-navy" : "text-navy/70 hover:text-navy"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-sage rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="sage" size="sm">
            <Link href="/contact">Book a Consult</Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-navy"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-b border-border"
          >
            <div className="container py-6 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "py-3 px-4 rounded-lg text-base font-medium transition-colors",
                      active
                        ? "bg-sage/10 text-sage-700"
                        : "text-navy hover:bg-navy/5"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button asChild variant="sage" className="mt-4">
                <Link href="/contact">Book a Consult</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
