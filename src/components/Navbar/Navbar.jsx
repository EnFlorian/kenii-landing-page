import React from "react";
import styles from "./Navbar.module.css";
import { logo, links } from "../data/header";

const Navbar = () => {
  const renderedLinks = links.map((link, index) => {
    <li className={styles.link} key={index}>
      <a target="_blank" rel="noopener noreferrer" href={link.link}>
        {link.name}
      </a>
    </li>;
  });

  return (
    <section className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href={logo.link}>{logo.name}</a>
        </div>
        <ul className={styles.links}>{renderedLinks}</ul>
      </div>
    </section>
  );
};

export default Navbar;
