import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const data = useLoaderData();
  const { price, name, chef, photo } = data;
  return (
    <div className="container mx-auto">
      <div className="my-[50px]">
        <Link to="/" className="text-[30px] font-rancho">
          Back To Home
        </Link>
      </div>
      <div className="flex items-center">
        <div className="">
          <h5 className="text-xl font-raleway">
            <span className="font-bold">Name: </span>
            {name}
          </h5>
          <h5 className="text-xl font-raleway">
            <span className="font-bold">Price: </span>
            {price} Taka
          </h5>
          <h5 className="text-xl font-raleway">
            <span className="font-bold">Chef: </span>
            {chef}
          </h5>
        </div>
        <div className="">
          <img className="w-[200px]" src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
