import React from 'react';
import logo from '../assets/logo1.png'
import bgImg from '../assets/15.jpg'; 

const Navbar = () => {
    return (
        <nav style={{backgroundImage:`url(${bgImg})`}}  className='bg-[url(/assi)] bg-no-repeat bg-center bg-cover'>
            <div className="flex items-center justify-center gap-x-4 py-3">
                <img className='w-[75px]' src={logo} alt="" />
                <h2 className='text-white text-[60px]  font-rancho'>Espresso Emporium</h2>
            </div>
        </nav>
    );
};

export default Navbar;