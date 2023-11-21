import React, { useState, useEffect } from 'react';
import cafeLogo from './sofialogo.jpeg';  

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = isScrolled ? 'bg-white shadow-lg fixed w-full top-0' : 'bg-white shadow-lg';

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Restaurant Logo with Image */}
          <a href="/" className="flex items-center">
            <img src={cafeLogo} alt="Cafe Logo" className="h-8 w-8 mr-2" /> {/* Add appropriate height and width classes */}
            <span className="text-gray-800 text-3xl font-bold">Sofia Cafe</span>
          </a>
 
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="text-gray-800 hover:text-gray-600">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-800 hover:text-gray-600">
                About Us
              </a>
            </li>
         
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
