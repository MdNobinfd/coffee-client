import React from "react";
import Bannar from "../Components/Bannar";
import Brand from "../Components/Brand";
import OurProducts from "../Components/OurProducts";
import { useLoaderData } from "react-router";
import { useState } from "react";

const HomePages = () => {
  const initialCoffess = useLoaderData();
  const [coffess, setCoffess] = useState(initialCoffess);
  return (
    <div>
      <Bannar />
      <Brand />
      <OurProducts coffess={coffess} setCoffess={setCoffess} />
    </div>
  );
};

export default HomePages;
