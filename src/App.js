import React from 'react';

import Navbar from './component/Navbar';
import AboutUs from './component/AboutUs';
import Network from './component/Network';
import Accordion from './component/Accordion';
import Tiles from './component/Tiles';
import Footer from './component/Footer';


const App = () => {
  return (
    <main>
      <Navbar />
      <AboutUs />
      <Network />
      <Accordion />
      <Tiles />
      <Footer />
    </main>
  )
}

export default App
