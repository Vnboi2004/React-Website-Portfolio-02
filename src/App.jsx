import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from '../src/Components/Hero/Hero';
import Services from './Components/Services/Services';
import Banner from './Components/Banner/Banner';
import Subscribe from './Components/Subscribe/Subscribe';
import BannerJoin from './Components/Banner/BannerJoin';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      {/* <Navbar/> */}
      <Hero/>
      <Services/>
      <Banner/>
      <Subscribe/>
      <BannerJoin/>
      <Footer/>
    </main>
  )
}

export default App
