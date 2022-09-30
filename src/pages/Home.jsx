import React from "react";
import { Information } from "../components/Information";
import { Servicios } from "../components/Servicios";
import { SliderHome } from "../components/SliderHome";
import ProductList from "../containers/ProductList";
export const Home = () => {
  return (
    <div>
      <Information />
      <Servicios />
      <ProductList />
    </div>
  );
};
