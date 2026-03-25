"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBullhorn,
  faBullseye,
  faBuilding,
  faChartBar,
  faChartLine,
  faCircle,
  faGlobe,
  faHandshake,
  faLayerGroup,
  faRocket,
  faShieldHalved,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

/** Maps Lucide-style names used in JSON / ProgramIcon to Font Awesome solid icons (customer pages). */
const ICONS: Record<string, IconDefinition> = {
  User: faUser,
  Building2: faBuilding,
  Handshake: faHandshake,
  Target: faBullseye,
  TrendingUp: faChartLine,
  ShieldCheck: faShieldHalved,
  Rocket: faRocket,
  Layers: faLayerGroup,
  Globe: faGlobe,
  BarChart3: faChartBar,
  Megaphone: faBullhorn,
  Circle: faCircle,
};

type MarketingFaIconProps = {
  name: string;
  className?: string;
  size?: number;
};

export function MarketingFaIcon({ name, className = "", size = 26 }: MarketingFaIconProps) {
  const icon = ICONS[name] ?? faCircle;
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      style={{ color: "#2CADB2", width: size, height: size }}
      aria-hidden
    />
  );
}
