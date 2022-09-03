import React from "react";
import styles from "./Main.module.css";
import { content } from "../data/main";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{content.title}</h1>
          <h1 className={styles.subtitle}>{content.subtitle}</h1>
          <p className={styles.description}>{content.description}</p>
          <button className={styles.button}>
            <a rel="noopener noreferrer" href={content.button.link}>
              content.button.name
            </a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
