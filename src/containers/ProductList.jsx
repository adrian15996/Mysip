import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.css";

const ProductList = () => {
  const products = [
    {
      id: 1,
      images: "https://picsum.photos/200/300",
      price: 455,
      title: "Mantenimiento a air acondicionado",
    },
  ];

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
