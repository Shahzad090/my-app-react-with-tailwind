import React from 'react'

const NavbarCom = () => {
  return (
        <nav className="bg-black p-4">
          <div className="flex justify-between items-center">
            <div className="text-white text-3xl font-bold">My Website</div>
  
            <div className="flex space-x-8">
              <a href="#home" className="text-white hover:text-gray-400">Home</a>
              <a href="#shop" className="text-white hover:text-gray-400">S</a>
              <a href="#contact" className="text-white hover:text-gray-400">Contact Us</a>
              <a href="#about" className="text-white hover:text-gray-400">About Us</a>
            </div>
    
            <div className="searchbar">
              <input
                type="text"
                placeholder="Search..."
                className="px-6 py-2 rounded-md bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
        </nav>

  );
};

export default NavbarCom;


