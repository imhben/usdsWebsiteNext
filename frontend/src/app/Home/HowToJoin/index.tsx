"use client";

import styles from "./HowToJoin.module.css";
import { Icon } from "@trussworks/react-uswds";
import {
  Code,
  PaintbrushVertical,
  FolderKanban,
  Gavel,
  CircleCheckBig,
} from "lucide-react";
import CTA from "@/components/buttons/CTA";

const ROLE_CARDS = [
  { label: "Software Engineers", icon: <Code /> },
  { label: "Designers", icon: <PaintbrushVertical /> },
  { label: "Product Managers", icon: <FolderKanban /> },
  { label: "Policy Experts", icon: <Gavel /> },
] as const;

const EXPECTATIONS = [
  "Flexible tour of duty (typically 2–4 years)",
  "Competitive compensation and benefits",
  "Work on high-impact projects at scale",
  "Collaborate with top talent from industry and government",
] as const;

const PROCESS = [
  {
    step: "1",
    title: "Apply Online",
    body: "Submit your application through our streamlined portal.",
  },
  {
    step: "2",
    title: "Interview",
    body: "Meet with our team to discuss your skills and interests.",
  },
  {
    step: "3",
    title: "Security Clearance",
    body: "Complete the necessary background verification.",
  },
  {
    step: "4",
    title: "Start Serving",
    body: "Begin your tour of duty making an impact.",
  },
] as const;

export default function HowToJoin() {
  return (
    <section
      className={`homeSection ${styles.wrapper}`}
      id="join"
      aria-labelledby="how-to-join-title"
    >
      <div className={`pageInnerWrapper`}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <header className={styles.header}>
              <h2 className={`sectionTitle`} id="how-to-join-title">
                How to Join
              </h2>

              <p className={`sectionSubtitle`}>
                Join a tour of duty that makes a difference. We&apos;re looking
                for talented professionals ready to bring private sector
                innovation to public service.
              </p>
            </header>

            <div className={styles.section}>
              <h3 className={styles.kicker}>Who We&apos;re Looking For</h3>

              <div className={styles.roles} role="list">
                {ROLE_CARDS.map((r) => (
                  <div
                    key={r.label}
                    className={styles.roleCard}
                    role="listitem"
                  >
                    <span className={styles.roleIcon} aria-hidden="true">
                      {r.icon}
                    </span>
                    <span className={styles.roleText}>{r.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.kicker}>What to Expect</h3>

              <ul className={`bullets ${styles.expectList}`}>
                {EXPECTATIONS.map((t) => (
                  <li key={t} className={`bullet ${styles.expectItem}`}>
                    <span className={`${styles.checkDot}`} aria-hidden="true">
                      <CircleCheckBig />
                    </span>

                    <span className={styles.expectText}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className={styles.right} aria-label="Application Process">
            <h3 className={styles.panelTitle}>Application Process</h3>

            <ol className={styles.steps}>
              {PROCESS.map((p) => (
                <li key={p.step} className={styles.stepRow}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    {p.step}
                  </span>
                  <div className={styles.stepBody}>
                    <p className={styles.stepTitle}>{p.title}</p>
                    <p className={styles.stepText}>{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <span className={`${styles.ctaWrapper}`}>
              {/* <a className={styles.applyButton} href="#apply">
                Start Your Application
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </a> */}
              <CTA href={`#apply`} text={`Start Your Application`} textColor="var(--primary-dark)" />

              <p className={styles.note}>
                Applications are reviewed on a rolling basis
              </p>
            </span>
          </aside>
        </div>
      </div>
    </section>
  );
}
