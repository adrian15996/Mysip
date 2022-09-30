import React, { useContext } from "react";
import "../styles/ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="ProductItem">
      <img src={product.images} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure></figure>
      </div>
    </div>
  );
};

export default ProductItem;
