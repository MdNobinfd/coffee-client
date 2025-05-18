import React from "react";
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

const Brand = () => {
  return (
    <div className="bg-[#ECEAE3] py-[56px] ">
      <div className="grid grid-cols-4 gap-x-[39px] container mx-auto">
        <div className="">
          <img className="w-[70px]" src={icon1} alt="" />
          <h3 className="font-rancho pt-4 pb-2  text-[35px]">Awesome Aroma</h3>
          <p className="font-raleway text-base">You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className="">
          <img className="w-[70px]" src={icon1} alt="" />
          <h3 className="font-rancho pt-4 pb-2  text-[35px]">Awesome Aroma</h3>
          <p className="font-raleway text-base">You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className="">
          <img className="w-[70px]" src={icon1} alt="" />
          <h3 className="font-rancho pt-4 pb-2  text-[35px]">Awesome Aroma</h3>
          <p className="font-raleway text-base">You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className="">
          <img className="w-[70px]" src={icon1} alt="" />
          <h3 className="font-rancho pt-4 pb-2  text-[35px]">Awesome Aroma</h3>
          <p className="font-raleway text-base">You will definitely be a fan of the design & aroma of your coffee</p>
        </div>

      </div>
    </div>
  );
};

export default Brand;
