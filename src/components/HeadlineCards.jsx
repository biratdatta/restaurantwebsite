import React from 'react';
import chaiImage from './images/sofia1.jpeg'; // Replace with your image paths
import chai2Image from './images/sofia2.jpeg'; // Replace with your image paths
import pizzaImage from './images/sofia1.jpeg'; // Replace with your image paths

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card 1 */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sofia Special Chai</p>
          <p className='px-2'>Rs 10/-</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={chaiImage}
          alt='Sofia Special Chai'
        />
      </div>

      {/* Card 2 */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sofia Special Chai 2</p>
          <p className='px-2'>Rs 15/-</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={chai2Image}
          alt='Sofia Special Chai 2'
        />
      </div>

      {/* Card 3 */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sofia Special Pizza</p>
          <p className='px-2'>Rs 99/-</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={pizzaImage}
          alt='Sofia Special Pizza'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
