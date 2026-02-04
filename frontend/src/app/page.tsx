import Image from "next/image";
import styles from "./Home/home.module.css";
import "./Home/homeGlobal.css";
import Hero from "./Home/Hero";
import Info from "./Home/Info";
import HowToJoin from "./Home/HowToJoin";

export default function Home() {
  return (
    <div className={`pageWrapper ${styles.wrapper}`}>
      <Hero />
      <Info />
      <HowToJoin />
    </div>
  );
}
