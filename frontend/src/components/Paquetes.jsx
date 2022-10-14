import React from "react";
import ProductList from "../containers/ProductList";
import styles from "../styles/services.module.css";

export const Paquetes = () => {
  return (
    <div>
      <h2 className={styles.title}>Paquetes</h2>
      <ProductList />
    </div>
  );
};
