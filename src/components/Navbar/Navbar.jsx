import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#">Kenii</a>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="#">Linkedin</a>
          </li>
          <li className={styles.link}>
            <a href="#">Github</a>
          </li>
          <li className={styles.link}>
            <a href="#">CodePen</a>
          </li>
          <li className={styles.link}>
            <a href="#">Twitter</a>
          </li>
          <li className={styles.link}>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
