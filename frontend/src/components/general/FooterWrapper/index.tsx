"use client";

import styles from "./FooterWrapper.module.css";
import { SocialLinks } from "@trussworks/react-uswds";
import Link from "next/link";
import Image from "next/image";

const SOCIALS = [
  { key: "x", label: "X", href: "https://x.com/USDS", icon: "x" },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/united-states-doge-service",
    icon: "linkedin",
  },
  { key: "github", label: "GitHub", href: "https://github.com/usds", icon: "github" },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@u.s.digitalservice",
    icon: "youtube",
  },
];

export default function FooterWrapper() {
  const socialLinkItems = SOCIALS.map(({ key, label, href, icon }) => (
    <a
      key={key}
      className="usa-social-link border-radius-primary padding-1"
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
    >
      <span className="display-flex flex-align-center flex-justify-center height-full width-full">
        <svg className="usa-icon width-full height-full" aria-hidden="true" focusable="false" role="img">
          <use href={`/assets/img/sprite.svg#${icon}`} />
        </svg>
      </span>
    </a>
  ));

  return (
    <footer className={`usa-footer usa-footer--big ${styles.footer}`} aria-label="Footer">
      <div className={`usa-footer__return-to-top ${styles.returnToTop}`}>
        <a href="#top">Return to top</a>
      </div>

      <div className={styles.surface}>
        <div className={styles.inner}>
          <div className={styles.topRow}>
            <div className={`${styles.col} ${styles.leftCol}`}>
              <div className="display-flex flex-align-center">
                <span className={styles.logoBox}>
                  <Image
                    src="/usds-logo-cropped.svg"
                    alt="U.S. DOGE Service logo"
                    fill
                    priority
                    className={styles.logoImg}
                  />
                </span>

                <p className="usa-footer__logo-heading margin-y-0">
                  U.S. DOGE Service
                </p>
              </div>

              <p className={`margin-top-2 margin-bottom-0 text-base text-light ${styles.description}`}>
                The Department of Government Efficiency brings together top
                technologists to deliver a better government experience for
                millions of Americans.
              </p>
            </div>

            <nav className={`${styles.col} ${styles.midCol}`} aria-label="Quick links">
              <p className={`${styles.colTitle} text-bold`}>Quick Links</p>
              <ul className={`usa-list usa-list--unstyled margin-top-2 ${styles.linkList}`}>
                <li className="margin-top-1 text-light">
                  <Link href="#about">About</Link>
                </li>
                <li className="margin-top-1 text-light">
                  <Link href="#accomplishments">Accomplishments</Link>
                </li>
                <li className="margin-top-1 text-light">
                  <Link href="#join">Join</Link>
                </li>
                <li className="margin-top-1 text-light">
                  <Link href="#contact">Contact</Link>
                </li>
                <li className="margin-top-1 text-light">
                  <Link href="#press">Press</Link>
                </li>
              </ul>
            </nav>

            <div className={`${styles.col} ${styles.rightCol}`}>
              <p className={`${styles.colTitle} text-bold`}>Connect</p>
              <div className="margin-top-2 display-flex flex-justify-center tablet:flex-justify-start">
                <SocialLinks links={socialLinkItems} />
              </div>
            </div>
          </div>

          <div className={styles.bottomRow}>
            <p className={`margin-y-0 text-base text-light ${styles.notice}`}>
              An official website of the United States Government
            </p>

            <ul className={`usa-list usa-list--unstyled display-flex flex-align-center margin-y-0 ${styles.linkList}`}>
              <li className="margin-right-3">
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li className="margin-right-3">
                <Link href="/accessibility">Accessibility</Link>
              </li>
              <li>
                <Link href="/foia">FOIA</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
