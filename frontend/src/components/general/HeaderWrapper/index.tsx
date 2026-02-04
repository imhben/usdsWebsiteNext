"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import CTA from "@/components/buttons/CTA";
import Image from "next/image";
import styles from "./HeaderWrapper.module.css";

type NavItem =
  | { type: "link"; label: string; href: string }
  | {
      type: "dropdown";
      label: string;
      items: { label: string; href: string }[];
    };

const NAV: NavItem[] = [
  {
    type: "dropdown",
    label: "About",
    items: [
      { label: "Our Mission", href: "#mission" },
      { label: "How We Work", href: "#work" },
    ],
  },
  { type: "link", label: "Impact", href: "#impact" },
  { type: "link", label: "Stories", href: "#stories" },
  { type: "link", label: "Careers", href: "#careers" },
];

export default function HeaderWrapper() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const nav = useMemo(() => NAV, []);

  return (
    <header className={styles.header} aria-label="Site header">
      <div className={styles.inner}>
        {/* Brand */}
        <Link href="#top" className={styles.brand} aria-label="Home">
          <span className={styles.logoBox}>
            <Image
              src="/usds-logo-cropped.svg"
              alt="USDS logo"
              fill
              priority
              className={styles.logoImg}
            />
          </span>
          <span className={styles.brandText}>U.S. DOGE Service</span>
        </Link>

        <nav className={styles.navDesktop} aria-label="Primary navigation">
          <ul className={styles.navList}>
            {nav.map((item) => {
              if (item.type === "link") {
                return (
                  <li key={item.href} className={styles.navItem}>
                    <Link className={styles.navLink} href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.label} className={styles.navItem}>
                  <button
                    type="button"
                    className={styles.navButton}
                    aria-haspopup="menu"
                    aria-expanded={openDropdown === item.label}
                    onClick={() =>
                      setOpenDropdown((cur) =>
                        cur === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    <span className={styles.chev} aria-hidden="true">
                      ▾
                    </span>
                  </button>

                  {openDropdown === item.label && (
                    <div className={styles.dropdown} role="menu">
                      {item.items.map((dd) => (
                        <Link
                          key={dd.href}
                          href={dd.href}
                          className={styles.dropdownLink}
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {dd.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.mobileToggle}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={styles.mobileBars} aria-hidden="true" />
        </button>
      </div>

      {mobileOpen && (
        <div
          className={styles.mobilePanel}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav aria-label="Mobile primary navigation">
            <ul className={styles.mobileList}>
              {nav.map((item) => {
                if (item.type === "link") {
                  return (
                    <li key={item.href} className={styles.mobileItem}>
                      <Link
                        href={item.href}
                        className={styles.mobileLink}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.label} className={styles.mobileItem}>
                    <details className={styles.mobileDetails}>
                      <summary className={styles.mobileSummary}>
                        {item.label}
                      </summary>
                      <div className={styles.mobileSub}>
                        {item.items.map((dd) => (
                          <Link
                            key={dd.href}
                            href={dd.href}
                            className={styles.mobileSublink}
                            onClick={() => setMobileOpen(false)}
                          >
                            {dd.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  </li>
                );
              })}
              <li>
              <CTA text="Join DOGE" href={"#join"}/>

              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
