import React from 'react';
import bannerImg  from '../assets/6.jpeg'

const Bannar = () => {
    return (
        <div style={{backgroundImage:`url(${bannerImg})`}} className='bg-no-repeat bg-center bg-cover py-[288px] '> 
        <div className="md:w-[700px] mx-auto ">
            <h2 className='text-[55px] font-normal text-white font-rancho'>Would you like a Cup of Delicious Coffee?</h2>
            <p className=' pt-4 pb-8
            text-base  leading-7 text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='py-[9px] px-[22px] bg-[#E3B577] text-[24px] font-rancho font-medium  '>Learn More</button>
            </div>
        </div>
    );
};

export default Bannar;