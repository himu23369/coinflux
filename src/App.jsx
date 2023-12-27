// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './components/HomePage.jsx';
import ServicesPage from './components/ServicesPage.jsx';
import AboutPage from './components/AboutPage.jsx';

// import Header from './components/Header.jsx';
// import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import HeaderNavbar from './components/HeaderNavbar.jsx';
import ContactUs from './components/ContactUs.jsx';
import Locations from './components/Locations.jsx';


const App = () => {
  return (
    <BrowserRouter>
    <HeaderNavbar />
    {/* <Header/> */}
    {/* <Navbar/> */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;


// import ServicesTabs from './components/ServicesTabs';
// import Branches from './components/Branches';
// import Navbar from './components/Navbar';
// import AboutUs from './components/AboutUs';
// import HeadOffice from './components/HeadOffice'

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <AboutUs />
//       <Branches />
//       <ServicesTabs />
//       <HeadOffice/>
//       <Footer />
//     </div>
//   );
// };

// export default App;
