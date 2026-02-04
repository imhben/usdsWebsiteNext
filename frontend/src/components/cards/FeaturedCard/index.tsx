"use client";

import styles from "./FeatureCard.module.css";
import { ShieldCheck } from "lucide-react";

type FeaturedCardProps = {
  icon?: string;
  tag: string;
  title: string;
  bullets: string[];
  pill?: string;
};

export default function FeaturedCard({
  icon,
  tag,
  title,
  bullets,
  pill,
}: FeaturedCardProps) {
  let iconComponent = null;

  switch (icon) {
    case "verified":
      iconComponent = <ShieldCheck />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <article className={`card ${styles.cardFeatured}`} aria-label={title}>
      <div className={`cardTop`}>
        <span
          className={`iconPill ${styles.iconPillFeatured}`}
          aria-hidden="true"
        >
          {iconComponent}
        </span>

        {pill ? (
          <span className={`statusPill ${styles.statusPillFeatured}`}>
            {pill}
          </span>
        ) : null}
      </div>

      <div className={`cardBody`}>
        <span className={`tagPill ${styles.tagPillFeatured}`}>{tag}</span>
        <span className={`cardBodyInfo`}>
          <h3 className={`cardTitle ${styles.cardTitleFeatured}`}>{title}</h3>
          <ul className={`bullets ${styles.bulletsFeatured}`}>
            {bullets.map((b) => (
              <li key={b} className={`bullet ${styles.bulletFeatured}`}>
                <span className={`bulletDot ${styles.bulletDotFeatured}`} aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </span>

        <div className={styles.waves} aria-hidden="true">
          <span className={styles.wave} />
          <span className={styles.wave} />
          <span className={styles.wave} />
        </div>
      </div>
    </article>
  );
}
