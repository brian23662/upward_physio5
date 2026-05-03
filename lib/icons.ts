import { Briefcase, Heart, Shield, Dumbbell, Bone, type LucideIcon } from "lucide-react";
import type { IconName } from "@/lib/site-config";

const map: Record<IconName, LucideIcon> = {
  Briefcase,
  Heart,
  Shield,
  Dumbbell,
  Bone,
};

export function getIcon(name: IconName): LucideIcon {
  return map[name];
}
