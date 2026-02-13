"use client";

import styles from "./Info.module.css";
import GradientCard from "@/components/cards/GradientCard";
import FeaturedCard from "@/components/cards/FeaturedCard";
import ListCard from "@/components/cards/ListCard";
import StatCard from "@/components/cards/StatCard";

export default function Info() {
  return (
    <section
      className={`homeSection ${styles.wrapper}`}
      aria-labelledby="impact-title"
    >
      <div className={`pageInnerWrapper`}>
        <header className={styles.header}>
          <h2 id="impact-title" className={`sectionTitle`}>
            Our Impact
          </h2>
          <p className={`sectionSubtitle`}>
            Delivering measurable results for the American people through
            technology, efficiency, and cross-agency collaboration.
          </p>
        </header>

        <div className={styles.layout}>
          <div className={styles.colLeft}>
            <ListCard
              icon="groups"
              pill="Active"
              tag="Technical Capacity"
              title="Building Tech Talent Across Government"
              bullets={[
                "Supporting TechForce initiative with OPM",
                "Resume reviews & interview assistance",
                "Pairing early-career hires with senior leadership",
              ]}
            />

            <FeaturedCard
              icon="verified"
              pill="Active"
              tag="Fraud, Waste & Abuse"
              title="Protecting Taxpayer Dollars"
              bullets={[
                "Cross-agency data connectivity for verification",
                "Millions of duplicate Medicaid enrollments identified",
                "Hundreds of contracts canceled or modified",
                "Strengthened payment integrity at VA",
              ]}
            />

            <GradientCard
              icon="iphone"
              pill="Active"
              tag="Critical Systems"
              title="Shipping Mission-Critical Services"
              bullets={[
                "FAFSA now averaging 15-minute completion",
                "Online Passport Renewal launched with State",
                "VA.gov proactively notifies Veterans of decisions",
                "ATF systems updated for NFA tax changes",
              ]}
              variant="teal"
            />
          </div>

          <div className={styles.colRight}>
            <div className={styles.statGrid}>
              <div className={styles.statFlexWrapper}>
                <div className={styles.statFlexSection}>
                  <StatCard
                    icon="dollar"
                    value="$3B+"
                    title="Medicare Fraud Stopped"
                    subtitle="Improper payments halted with CMS"
                  />
                </div>
                <div className={styles.statFlexSection}>
                  <StatCard
                    icon="school"
                    value="$1B+"
                    title="Student Aid Fraud Prevented"
                    subtitle="Before funds were disbursed"
                  />
                </div>
                <div className={styles.statFlexSection}>
                  <StatCard
                    icon="building"
                    value="10+"
                    title="Major Agency Partners"
                    subtitle="VA, CMS, GSA, OPM, State & more"
                  />
                </div>
                <div className={styles.statFlexSection}>
                  <StatCard
                    icon="globe"
                    value="1M"
                    title="Daily Timeouts Fixed"
                    subtitle="Visa application sessions restored"
                  />
                </div>
              </div>

              <div className={styles.wideRow}>
                <ListCard
                  icon="storage"
                  tag="Security & Infrastructure"
                  title="Modernizing Federal Security"
                  bullets={[
                    "Cloud authorization in weeks, not months",
                    "Authority to Operate processes modernized",
                    "Dozens of APIs enabling secure data access",
                  ]}
                  tone="soft"
                />
              </div>

              <div className={styles.statFlexWrapper}>
                <div className={styles.statFlexSection}>
                  <StatCard
                    icon="trendingUp"
                    value="$6B"
                    title="Est. Healthcare Savings"
                    subtitle="National Provider Directory"
                  />
                </div>
                <div className={styles.statFlexSection}>
                  <StatCard
                    icon="map"
                    value="26"
                    title="States on NBS 7.0"
                    subtitle="Disease surveillance with CDC"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
