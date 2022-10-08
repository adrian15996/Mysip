import React from "react";
import ProductList from "../containers/ProductList";
import styles from "../styles/services.module.css";

export const Products = () => {
  return (
    <div>
      <h2 className={styles.title}>Productos</h2>
      <ProductList />
    </div>
  );
};
