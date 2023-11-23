import React from 'react';
import AboutUsImage from './images/aboutus.jpg'; 
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
         
        </p>
        <p className="text-lg mt-4">
          
Sofia Café, a May 2023 revelation, beckons with a fusion of modern charm and serene ambiance. Its avant-garde style captivates patrons seeking respite and productivity. Offering an array of tantalizing teas, from exotic blends to classic favorites, it's a haven for tea aficionados. This innovative space seamlessly marries the essence of a cozy café with the functionality of a vibrant co-working hub. Patrons relish in the aromatic brews while indulging in collaborative ventures or solitary endeavors.  
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
