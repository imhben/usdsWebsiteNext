"use client";

import styles from "./ListCard.module.css";
import { Users, Database } from "lucide-react";

type ListCardProps = {
  icon: string;
  tag: string;
  title: string;
  bullets: string[];
  pill?: string;
  tone?: "default" | "soft";
};

export default function ListCard({
  icon,
  tag,
  title,
  bullets,
  pill,
  tone = "default",
}: ListCardProps) {
  let iconComponent = null;

  switch (icon) {
    case "groups":
      iconComponent = <Users />;
      break;
    case "storage":
      iconComponent = <Database />;
      break;
    default:
      iconComponent = null;
  }
  return (
    <article
      className={`card ${tone === "soft" ? `cardSoft` : ""}`}
      aria-label={title}
    >
      <div className={`cardTop`}>
        <span className={`iconPill`} aria-hidden="true">
          {iconComponent}
        </span>

        {pill ? <span className={`statusPill`}>{pill}</span> : null}
      </div>

      <div className={`cardBody`}>
        <span className={`tagPill`}>{tag}</span>
        <span className={`cardBodyInfo`}>
          <h3 className={`cardTitle`}>{title}</h3>

          <ul className={`bullets`}>
            {bullets.map((b) => (
              <li key={b} className={`bullet`}>
                <span className={`bulletDot`} aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </span>
      </div>
    </article>
  );
}
