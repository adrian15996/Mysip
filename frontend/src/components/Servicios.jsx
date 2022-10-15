import React from "react";
import ProductList from "../containers/ProductList";
import styles from "../styles/services.module.css";

export const Servicios = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Servicios</h2>
      <ProductList />
    </div>
  );
};
