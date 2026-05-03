"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { type Service } from "@/lib/site-config";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  index?: number;
  featured?: boolean;
}

export function ServiceCard({ service, index = 0, featured = false }: ServiceCardProps) {
  const Icon = getIcon(service.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/services#${service.slug}`}
        className={cn(
          "group relative flex flex-col h-full rounded-2xl p-7 transition-all duration-300 border",
          featured
            ? "bg-navy text-white border-navy hover:shadow-2xl"
            : "bg-white border-border hover:border-sage hover:shadow-xl"
        )}
      >
        <div
          className={cn(
            "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
            featured ? "bg-sage" : "bg-sage/10 group-hover:bg-sage group-hover:text-white"
          )}
        >
          <Icon className={cn("h-6 w-6", featured ? "text-white" : "text-sage group-hover:text-white")} />
        </div>

        <h3 className={cn("text-xl font-bold tracking-tight mb-2", featured ? "text-white" : "text-navy")}>
          {service.title}
        </h3>
        <p className={cn("text-sm leading-relaxed mb-6", featured ? "text-white/80" : "text-muted-foreground")}>
          {service.description}
        </p>

        <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold">
          <span className={featured ? "text-sage-100" : "text-sage"}>Learn more</span>
          <ArrowUpRight
            className={cn(
              "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
              featured ? "text-sage-100" : "text-sage"
            )}
          />
        </div>
      </Link>
    </motion.div>
  );
}
