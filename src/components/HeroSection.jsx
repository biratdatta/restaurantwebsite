import React, { useState, useEffect } from 'react';
import backgroundImageDesktop from '../components/images/ed.png'; // Desktop image path
import backgroundImageMobile from '../components/images/mobile.png'; // Mobile image path

const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1640px',
    margin: '0 auto',
    width: '100%',
    height: '800px',
    backgroundPosition: 'center',
    borderRadius: '15px',
    overflow: 'hidden',
    backgroundImage: windowWidth <= 768 ? `url(${backgroundImageMobile})` : `url(${backgroundImageDesktop})`,
  };

  const heroStyles = {
    position: 'relative',
    display: 'inline-block',
    fontSize: '5rem',
    fontWeight: 'bold',
    backgroundImage: 'linear-gradient(90deg, #4C0, #2E7D32)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };

  const orangeChai = {
    position: 'relative',
    zIndex: '1',
    color: '#FFA500',
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <div style={containerStyles}>
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
