import React, { useState, useEffect } from 'react';
import image1 from './images/sofia1.jpeg';
import image2 from './images/sofia2.jpeg';
import image3 from './images/laptop.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];

  const texts = [
    'The Best',
    ' Chai',
    'Savor the Flavor',
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);  

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative rounded-lg overflow-hidden'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            {texts[currentIndex] && (
              <span className='text-orange-500'>{texts[currentIndex]}</span>
            )}
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            {texts[currentIndex + 1 < texts.length ? currentIndex + 1 : 0] && (
              <span className='text-orange-500'>
                {texts[currentIndex + 1 < texts.length ? currentIndex + 1 : 0]}
              </span>
            )}
          </h1>
        </div>
       
        <img
          className='w-full max-h-[500px] object-cover'
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
        />
      </div>
    </div>
  );
};

export default Hero;
