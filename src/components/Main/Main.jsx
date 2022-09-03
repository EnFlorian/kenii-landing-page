import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Kenii</h1>
          <h1 className={styles.subtitle}>Frontend Developer</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit quos eum repellat
            debitis cupiditate? Alias quibusdam nobis debitis labore ducimus. Reprehenderit mollitia
            molestiae vel quidem obcaecati nihil rerum consequuntur. Nam est, possimus in, quas
            itaque quasi odio ratione placeat exercitationem magnam eius non reiciendis repellat
            delectus quam distinctio animi eos ullam quod quidem obcaecati totam vero. Minima,
            consequatur nesciunt.
          </p>
          <button className={styles.button}>
            <a href="#">Contact Me</a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
