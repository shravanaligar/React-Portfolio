import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shravan </h1>
        <p className={styles.description}>
         I'm a Junior Software Engineer at VTS Enterprises India Private Limited, 
         working on a portfolio project using React JS, aiming to upskill in software development.
        </p>
        <a href="mailto:shravanaligar@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
  
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
