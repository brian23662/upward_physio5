import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  showWordmark?: boolean;
  className?: string;
}

export function Logo({ variant = "dark", showWordmark = true, className }: LogoProps) {
  const wordColor = variant === "light" ? "text-white" : "text-navy";
  const physioColor = variant === "light" ? "text-sage-100" : "text-sage";
  // The figure is the brand sage on light backgrounds, white on the navy footer
  const markColor = variant === "light" ? "bg-white" : "bg-sage";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 group", className)}
      aria-label="Upward Physio home"
    >
      {/*
        The fitman silhouette is colored via CSS mask. The SVG file in /public
        is used as a mask shape, and the element's background-color fills it,
        so we can theme it with Tailwind utilities (bg-sage / bg-white).
      */}
      <div
        role="img"
        aria-hidden="true"
        className={cn(
          "h-10 w-[68px] transition-transform duration-300 group-hover:-translate-y-0.5",
          markColor
        )}
        style={{
          WebkitMaskImage: "url(/fitman-mark.svg)",
          maskImage: "url(/fitman-mark.svg)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className={cn("font-bold text-xl tracking-tight", wordColor)}>
            UPW<span className={physioColor}>A</span>RD
          </span>
          <span className={cn("text-[10px] tracking-[0.3em] font-medium mt-0.5", physioColor)}>
            PHYSIO
          </span>
        </div>
      )}
    </Link>
  );
}
