import React from "react";
import styles from "../styles/aboutus.module.css";
export const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Razones para elegir nuestros servicios</h2>
        <h3 className={styles.subtitle}>
          SOMOS EXPERTOS/SATISFACCION GARANTIZADA / ATENCION POSTVENTA /
          RESPONSABLES CON EL MEDIO AMBIENTE / MEJOR COSTO-BENEFICIO
        </h3>
      </div>
      <div className={styles.infoContainer}>
        <h3 className={styles.h3}>SOMOS EXPERTOS</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          reprehenderit suscipit repellat laudantium quo consequatur recusandae
          tempore totam aliquam, qui mollitia, officiis cumque unde quod eius
          aspernatur sequi itaque ratione. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Illum magni dolores harum quod soluta
          fugiat mollitia illo atque sunt possimus voluptate voluptatibus
          necessitatibus veniam aliquam ducimus quisquam repudiandae, facere
          consequuntur.
        </p>
      </div>
      <div className={styles.infoContainer}>
        <h3 className={styles.h3}>SOSTENIBILIDAD</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          reprehenderit suscipit repellat laudantium quo consequatur recusandae
          tempore totam aliquam, qui mollitia, officiis cumque unde quod eius
          aspernatur sequi itaque ratione. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Illum magni dolores harum quod soluta
          fugiat mollitia illo atque sunt possimus voluptate voluptatibus
          necessitatibus veniam aliquam ducimus quisquam repudiandae, facere
          consequuntur.
        </p>
      </div>
    </div>
  );
};
