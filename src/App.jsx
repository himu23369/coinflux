// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './components/HomePage.jsx';
import ServicesPage from './components/ServicesPage.jsx';
import AboutPage from './components/AboutPage.jsx';

import Footer from './components/Footer.jsx';

import HeaderNavbar from './components/HeaderNavbar.jsx';
import ContactUs from './components/ContactUs.jsx';
import Locations from './components/Locations.jsx';

import TermsOfService from './components/TandC.jsx';
import PrivacyPolicy from './components/PrivacyAndPolicy.jsx';
import CopyrightNotice from './components/CopyRight.jsx';


const App = () => {
  return (
    <BrowserRouter>
    <HeaderNavbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/copyright" element={<CopyrightNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsOfService />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;

