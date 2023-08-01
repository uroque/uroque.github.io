import React from 'react';
import AboutComponent from '../components/AboutComponent';
import Footer from '../components/Footer';
// import HamburguerMenu from '../components/HamburguerMenu';
// import Header from '../components/Header';

import './About.css'

function About() {
  return (
    <div className="about">
      <AboutComponent />
      <Footer />
    </div>
  );
}

export default About;
