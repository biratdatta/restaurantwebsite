import React from 'react';
import cafeLogo from './sofialogo.jpeg';  

const Navbar = () => {
  const navbarClass = 'bg-white shadow-lg fixed w-full top-0';

  const customFontStyle = {
    fontFamily: 'Calibri , sans-serif',  
  };

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center py-4">
          {/* Restaurant Logo with Image */}
          <a href="/" className="flex items-center" style={customFontStyle}>
            <img src={cafeLogo} alt="Cafe Logo" className="h-8 w-8 mr-2" /> 
            <span className="text-gray-800 text-3xl font-bold" style={customFontStyle}>Sofia Café</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
