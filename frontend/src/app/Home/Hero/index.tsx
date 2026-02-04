"use client";

import styles from "./hero.module.css";
import CTA from "../../../components/buttons/CTA";

type CTAConfig = {
  text: string;
  href: string;
  backgroundColor?: string;
  textColor?: string;
  ariaLabel?: string;
};

export default function Hero() {
  const ctaButtons: CTAConfig[] = [
    {
      text: "Join DOGE",
      href: "#join",
      textColor: "var(--primary-dark)",
      ariaLabel: "Join DOGE: view careers and ways to participate",
    },
    {
      text: "See Our Impact",
      href: "#impact",
      backgroundColor: "var(--primary-dark)",
      textColor: "var(--primary-light)",
      ariaLabel: "See our impact: read results and success stories",
    },
  ];

  return (
    <section
      className={styles.wrapper}
      aria-labelledby="hero-title"
      aria-describedby="hero-desc"
    >
      <div className={styles.inner}>
        <h1 id="hero-title" className={styles.title}>
          Building Tech and Efficiency that Americans<span className={styles.titleSpan}> Deserve</span>
        </h1>

        <div className={styles.ctaWrapper} role="group" aria-label="Primary actions">
          {ctaButtons.map((cta) => (
            <CTA
              key={cta.href}
              text={cta.text}
              href={cta.href}
              ariaLabel={cta.ariaLabel}
              backgroundColor={cta.backgroundColor}
              textColor={cta.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
