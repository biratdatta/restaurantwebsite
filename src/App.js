import React from 'react'
import Navbar, { StickyNavbar } from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <div>
        <Navbar />
        <HeroSection />
       <Hero />
        <HeadlineCards />
        <Food />
        <AboutUs />
        <Category />
        
    </div>
  );
}

export default App;
