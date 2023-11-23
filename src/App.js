import React from 'react'
import Navbar  from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
 
function App() {
  return (
    <div>
        <Navbar />
        <HeroSection />
       <Hero />
        <HeadlineCards />
        <Food />
        <AboutUs />
        <ContactUs />
        <Category />
        
    </div>
  );
}

export default App;
