import React from "react";
import styles from "./Footer.module.css";
import { copyRight, socials } from "../data/footer";

const Footer = () => {
  const renderedSocials = socials.map((social, index) => {
    <li className={styles.social} key={index}>
      <a target="_blank" rel="noopener noreferrer" href={social.link}>
        {social.icon}
      </a>
    </li>;
  });

  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyRight}>
          &copy; {copyRight.year} - {copyRight.name}
        </p>
        <ul className={styles.socials}>{renderedSocials}</ul>
      </div>
    </section>
  );
};

export default Footer;
