import React from 'react';

import Footer from '../components/Footer';
import HamburguerMenu from '../components/HamburguerMenu';
import Header from '../components/Header';
// import ResponsiveModal from '../components/ResponsiveModal';

function Home() {
  return (
    <div className="Home">
      <Header />
      <HamburguerMenu />
      <div className="homeCenter center">
        <span>ULISSES</span>
        <span>WEB DEVELOPER</span>
        <span>ROQUE</span>
      </div>

      <Footer />
      {/* <ResponsiveModal /> */}
    </div>
  );
}

export default Home;
