"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import styles from "./cta.module.css";

type Props = {
  text: string;
  href: string;
  backgroundColor?: string;
  textColor?: string;
  ariaLabel?: string;
};

export default function CTA({
  text,
  href,
  backgroundColor,
  textColor,
  ariaLabel,
}: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`${styles.wrapper}`}
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <Link
        href={href}
        className={styles.link}
        aria-label={ariaLabel ?? text}
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      >
        <span className={styles.text}>{text}</span>
      </Link>
    </motion.div>
  );
}
