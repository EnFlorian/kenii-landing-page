import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#">Kenii</a>
        </div>
        <ul className={styles.socials}>
          <li className={styles.social}>
            <a href="#">Linkedin</a>
          </li>
          <li className={styles.social}>
            <a href="#">Github</a>
          </li>
          <li className={styles.social}>
            <a href="#">CodePen</a>
          </li>
          <li className={styles.social}>
            <a href="#">Twitter</a>
          </li>
          <li className={styles.social}>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
