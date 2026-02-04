"use client";

import styles from "./GradientCard.module.css";
import { Smartphone } from "lucide-react";

type GradientCardProps = {
  icon: string;
  tag: string;
  title: string;
  bullets: string[];
  pill?: string;
  variant: "blue" | "teal";
};

export default function GradientCard({
  icon,
  tag,
  title,
  bullets,
  pill,
  variant,
}: GradientCardProps) {
  let iconComponent = null;

  switch (icon) {
    case "iphone":
      iconComponent = <Smartphone />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <article
      className={`card ${styles.cardGradient} ${
        variant === "teal" ? `cardTeal` : `cardBlue`
      }`}
      aria-label={title}
    >
      <div className={`cardTop`}>
        <span
          className={`iconPill ${styles.iconPillGradient}`}
          aria-hidden="true"
        >
          {iconComponent}
        </span>

        {pill ? (
          <span className={`statusPill ${styles.statusPillGradient}`}>
            {pill}
          </span>
        ) : null}
      </div>

      <div className={`cardBody`}>
        <span className={`tagPill ${styles.tagPillGradient}`}>{tag}</span>
        <span className={`cardBodyInfo`}>
          <h3 className={`cardTitle ${styles.cardTitleGradient}`}>{title}</h3>

          <ul className={`bullets ${styles.bulletsGradient}`}>
            {bullets.map((b) => (
              <li key={b} className={`bullet ${styles.bulletGradient}`}>
                <span className={`bulletDot a${styles.bulletDotGradient}`} aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </span>
      </div>
    </article>
  );
}
