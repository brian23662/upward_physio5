"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends Omit<HTMLMotionProps<"section">, "children"> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  spacing?: "default" | "tight" | "loose";
}

export function Section({
  children,
  className,
  containerClassName,
  spacing = "default",
  ...props
}: SectionProps) {
  const spacingClass =
    spacing === "tight" ? "py-12 md:py-16" : spacing === "loose" ? "py-24 md:py-32" : "py-20 md:py-24";

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn(spacingClass, className)}
      {...props}
    >
      <div className={cn("container", containerClassName)}>{children}</div>
    </motion.section>
  );
}
