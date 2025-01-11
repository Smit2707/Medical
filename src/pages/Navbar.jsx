import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="cursor-pointer flex z-[100] sticky top-0 justify-between items-center py-4 md:py-6 lg:py-8 w-full px-4 md:px-8 lg:px-12 text-base md:text-lg lg:text-xl bg-white md:bg-none">
        
        <div className="flex justify-center items-center gap-2">
          <img
            src="./src/assets/logo.png"
            alt="Logo"
            className="w-8 md:w-10 lg:w-12 h-auto"
          />
          <h4 className="text-lg md:text-xl lg:text-2xl font-bold uppercase">
            Medical
          </h4>
        </div>


        <div className="hidden  lg:flex gap-6 md:gap-2 md:text-sm md: lg:gap-10 lg:text-xl ">
          {["Home", "Services", "About Us", "Resources", "Contact"].map((item, index) => (
            <h4
              key={index}
              className="relative group hover:text-green-800"
            >
              {item}
              <span
                className="absolute bottom-0 left-0 w-0 h-1 bg-green-600 transition-all duration-300 ease-in-out group-hover:w-full"
              ></span>
            </h4>
          ))}
        </div>


        <div className="hidden md:flex gap-4 lg:gap-5 items-center">
          <h4 className="capitalize font-semibold text-sm md:text-base lg:text-md">
            Login
          </h4>
          <button className="text-sm md:text-base lg:text-sm bg-green-500 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full font-semibold tracking-wide transition-all duration-300 ease-in-out hover:bg-green-600 hover:shadow-lg hover:scale-105 uppercase">
            register
          </button>
        </div>


        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-xl focus:outline-none"
          >
            
            <div className="space-y-1">
              <div className="w-6 h-1 bg-black"></div>
              <div className="w-6 h-1 bg-black"></div>
              <div className="w-6 h-1 bg-black"></div>
            </div>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 shadow-lg px-6 py-4 space-y-4 flex flex-col justify-center items-center">
          {["Home", "Services", "About Us", "Resources", "Contact"].map((item, index) => (
            <h4
              key={index}
              className="hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              {item}
            </h4>
          ))}
          <div className="flex flex-col space-y-4">
            <h4 className="uppercase font-regular text-center">Login</h4>
            <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-full md:font-thin tracking-wide transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:scale-105 uppercase">
              register
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;