import React from 'react';
import { FaCoffee } from "react-icons/fa";
import CoffeeCard from './CoffeeCard';
import { Link } from 'react-router';


const OurProducts = ({coffess, setCoffess}) => {

    return (
        <div className="bg-no-repeat py-[120px] bg-[top,left_bottom] bg-[auto,auto]">
            <div className="container mx-auto">
            <div className="text-center pb-12">
            <h5 className='font-raleway text-xl  leading-6'>--- Sip & Savor ---</h5>
            <h2 className='font-rancho text-[55px] pt-2 pb-4  text-[#331A15]'>Our Popular Products</h2>
            <Link to='/coffee'>
            <button className='flex gap-x-2 items-center mx-auto text-white justify-center py-[9px] px-[22px] bg-[#E3B577] rounded-sm border-2 border-[#331A15] text-2xl font-rancho cursor-pointer'>Add Coffee <FaCoffee size={24} className='text-[#331A15]' /></button>
            </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    coffess.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffess={coffess} setCoffess={setCoffess}  />)
                }

            </div>
            
            </div>
        </div>
    );
};

export default OurProducts;