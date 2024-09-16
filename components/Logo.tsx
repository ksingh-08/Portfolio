// src/components/Logo.js
import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Logo = () => {
  return (
    <div className='w-full'>
    <div className="absolute top-0 left-0 right-0 bottom-0 p-0 m-0 pl-2 w-full h-auto">
    
      <img src="/BeyondEnvision.png" alt="Logo" className="w-60 h-auto object-cover" />
    </div>
   
    <div className="absolute top-12 right-44 h-10 w-10 mt-2">
      <a href="#contact">
                  <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-7 py-4
                   rounded-full tracking-normal uppercase font-bold bg-transparent hover:bg-[#221543] hover:text-white dark:text-neutral-200 transition duration-200 min-w-[150px] whitespace-nowrap">
  Contact Us
</button>
              </a>
    </div>

    </div>
  );
};

export default Logo;

