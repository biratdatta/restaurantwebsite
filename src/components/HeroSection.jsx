import React from 'react';
import backgroundImage from '../components/images/sofia1.jpeg'; // Replace with your image path

const HeroSection = () => {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1640px', // Set the maximum width
    margin: '0 auto',
    width: '100%',
    height: '800px', // Set the height
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '15px', // Rounded border radius
    overflow: 'hidden', // Hide overflowing content
  };

  const heroStyles = {
    position: 'relative',
    display: 'inline-block',
    fontSize: '5rem', // Adjust the font size as needed
    fontWeight: 'bold',
    backgroundImage: `linear-gradient(90deg, #4C0, #2E7D32)`, // Green gradient
    WebkitBackgroundClip: 'text', // Clip background to text
    color: 'transparent', // Hide the text
  };

  const orangeChai = {
    position: 'relative',
    zIndex: '1', // Ensure the text is on top of the pseudo-element
    color: '#FFA500', // Orange color for Chai
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <div style={containerStyles}>
        {/* Text with Gradient Background */}
        <h1 style={heroStyles}>
          The Best{' '}
          <span className="text-orange-500" style={orangeChai}>
            Cafe
          </span>{' '}
          in Tavarekere
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
