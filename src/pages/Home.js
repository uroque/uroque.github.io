import React from 'react';

import Footer from '../components/Footer';
import HamburguerMenu from '../components/HamburguerMenu';
import Header from '../components/Header';

function Home() {
  return (
    <div className="Home">
      <Header />
      <HamburguerMenu />
      <div className="homeCenter center">
        <div>ULISSES</div>
        <div>WEB DEVELOPER</div>
        <div>ROQUE</div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
