// Home.tsx
"use client";

import styles from "./Home/home.module.css";
import "./Home/homeGlobal.css";
import Hero from "./Home/Hero";
import Info from "./Home/Info";
import HowToJoin from "./Home/HowToJoin";
import Preloader from "@/components/general/Preloader";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`pageWrapper ${styles.wrapper}`}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            onDone={() => {
              setIsLoading(false);
              document.body.style.cursor = "default";
              window.scrollTo(0, 0);
            }}
          />
        )}
      </AnimatePresence>

      <Hero />
      <Info />
      <HowToJoin />
    </div>
  );
}
