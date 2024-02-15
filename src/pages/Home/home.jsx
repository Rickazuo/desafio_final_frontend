// import React, { useState } from "react";
import Carousel from "../../components/Carousel/carousel";
import styles from "./home.module.css";

export default function Home() {
  const images = [
    "dish1.svg",
    "dish2.svg",
    "dish3.svg",
    "dish4.svg",
    "dish5.svg",
    "dish6.svg",
    "dish7.svg",
  ];

  return (
    <main className={styles.main}>
      <Carousel images={images} />
    </main>
  );
}
