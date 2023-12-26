// src/App.jsx
import React from 'react';
import Header from './components/Header';
import ServicesTabs from './components/ServicesTabs';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import HeadOffice from './components/HeadOffice'

const App = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Branches />
      <ServicesTabs />
      <HeadOffice/>
      <Footer />
    </div>
  );
};

export default App;
