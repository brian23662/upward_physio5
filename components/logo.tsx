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

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 group", className)}
      aria-label="Upward Physio home"
    >
      <div className="relative h-10 w-10 transition-transform duration-300 group-hover:-translate-y-0.5">
        {/* Inline SVG mark to keep stroke colors crisp */}
        <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
          <path
            d="M 15 75 Q 35 60 55 35 L 75 18"
            stroke="#5F7A56"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 75 18 L 64 19 M 75 18 L 74 29"
            stroke="#5F7A56"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="50" cy="28" r="6.5" fill={variant === "light" ? "#FFFFFF" : "#0A2540"} />
          <path
            d="M 48 35 Q 42 45 35 55 Q 30 62 25 70"
            stroke={variant === "light" ? "#FFFFFF" : "#0A2540"}
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 35 55 Q 50 58 65 65"
            stroke={variant === "light" ? "#FFFFFF" : "#0A2540"}
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
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
