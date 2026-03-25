import type { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

type Props = { name: string; className?: string; size?: number };

export default function ProductLucideIcon({ name, className = "h-6 w-6 text-teal", size = 24 }: Props) {
  const Icon = (Icons as unknown as Record<string, LucideIcon | undefined>)[name];
  if (!Icon) {
    const Fallback = Icons.Circle;
    return <Fallback className={className} size={size} aria-hidden />;
  }
  return <Icon className={className} size={size} aria-hidden />;
}
