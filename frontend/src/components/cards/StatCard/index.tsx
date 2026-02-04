"use client";

import styles from "./StatCard.module.css";
import {
  CircleDollarSign,
  GraduationCap,
  Building,
  Globe,
  TrendingUp,
  FileCheck,
} from "lucide-react";

type StatCardProps = {
  icon: string;
  value: string;
  title: string;
  subtitle: string;
};

export default function StatCard({
  icon,
  value,
  title,
  subtitle,
}: StatCardProps) {
  let iconComponent = null;

  switch (icon) {
    case "dollar":
      iconComponent = <CircleDollarSign />;
      break;
    case "school":
      iconComponent = <GraduationCap />;
      break;
    case "building":
      iconComponent = <Building />;
      break;
    case "globe":
      iconComponent = <Globe />;
      break;
    case "trendingUp":
      iconComponent = <TrendingUp />;
      break;
    case "map":
      iconComponent = <FileCheck />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <article className={`card ${styles.statCard}`} aria-label={title}>
      <div className={`cardTop`}>
        <span className={`iconPill `} aria-hidden="true">
          {iconComponent}
        </span>
      </div>

      <div className={`cardBody`}>
        <div className={styles.statValue}>{value}</div>
        <span className={`cardBodyInfo ${styles.statCardBodyInfo}`}>
          <div className={styles.statTitle}>{title}</div>
          <div className={styles.statSubtitle}>{subtitle}</div>
        </span>
      </div>
    </article>
  );
}
