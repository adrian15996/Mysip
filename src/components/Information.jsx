import React from "react";
import styles from "../styles/information.module.css";

export const Information = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>¿NECESITA UN ESPECIALISTA?</div>
      <div className={styles.message}>¡LLAME A MYSIP!</div>
      <div className={styles.message}>TEL:(+52) 753 154 3816</div>
      <h1 className={styles.title}>MYSIP</h1>
      <p className={styles.data}>
        EMPRESA DE GRAN CATEGORIA CON MAS DE 5 ANOS DE EXPERIENCIA
      </p>
      <p className={styles.data}>LIDER CONTRATISTA</p>
    </div>
  );
};
