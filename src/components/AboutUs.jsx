import React from 'react';
import AboutUsImage from './images/sofia1.jpeg'; // Replace with your image file path

const AboutUs = () => {
  return (
    <div className="max-w-[1000px] h-[400px] mx-auto rounded-xl overflow-hidden bg-pink-200 flex">
      {/* Left side - Image */}
      <div className="w-1/2">
        <img src={AboutUsImage} alt="About Us" className="w-full h-full object-cover" />
      </div>
      
      {/* Right side - Text */}
      <div className="w-1/2 p-8">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis risus non odio
          fringilla dictum. Sed venenatis, nibh vitae porttitor aliquam, justo neque consequat
          lacus, vel lobortis eros turpis vitae turpis. Sed et sollicitudin dolor. Nunc congue
          augue non felis cursus, vitae consectetur dolor convallis.
        </p>
        <p className="text-lg mt-4">
          Fusce venenatis venenatis venenatis.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
