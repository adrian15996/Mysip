import React from "react";
import { Information } from "../components/Information";
import { Paquetes } from "../components/Paquetes";
import { Products } from "../components/Proucts";
import { Servicios } from "../components/Servicios";
export const Home = () => {
  return (
    <div>
      <Information />
      <Servicios />
      <Paquetes />
      <Products />
    </div>
  );
};
