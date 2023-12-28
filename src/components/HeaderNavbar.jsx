import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaBars, FaTimes } from 'react-icons/fa'; // Import the React icons
import logo from '../assets/logo.jpg'; // Update the path to your logo

const HeaderNavbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const headerStyle = {
    background: 'linear-gradient(to right, #2C3E50, #4CAF50)', // Dark greenish gradient
    color: '#FFFFFF', // White text color
    padding: '1.5rem', // Adjusted padding
    fontFamily: 'Helvetica Neue, sans-serif',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Updated style
    alignItems: 'center',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    height: '2.6rem',
    width: '5.2rem',
    marginRight: '1rem', // Adjusted margin
  };

  const companyNameStyle = {
    fontSize: '2.2rem', // Adjusted font size
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  };

  const companyNameMobileStyle = {
    ...companyNameStyle,
    marginLeft: isMobileNavOpen ? '1rem' : '0', // Adjusted margin when mobile nav is open
    transition: 'margin 0.3s ease-in-out', // Added transition for smooth animation
  };

  const navbarStyle = {
    listStyle: 'none',
    margin: '0', // Adjusted margin
    padding: '0',
    display: 'flex',
    alignItems: 'center',
  };

  const navItemStyle = {
    marginTop: '1rem',
    marginLeft: '1.5rem',
    fontSize: '1.3rem', // Adjusted font size
  };

  const mobileNavButtonStyle = {
    cursor: 'pointer',
    fontSize: '1.8rem',
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header style={headerStyle} className="lg:flex lg:justify-between lg:items-center">
      <div className="container mx-auto" style={containerStyle}>
        <div className="flex" style={logoContainerStyle}>
          <div>
            <div style={isMobileNavOpen ? companyNameMobileStyle : companyNameStyle}>
              {/* <img src={logo} alt="Logo" style={logoStyle} /> */}
              COINFLUX SERVICES PVT. LTD.
            </div>
          </div>
        </div>

        {/* Display the React icon as a navigation button on smaller screens */}
        <div className="lg:hidden" style={mobileNavButtonStyle} onClick={toggleMobileNav}>
          {isMobileNavOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Navigation */}
        {isMobileNavOpen && (
          <div className="lg:hidden mt-4">
            <ul style={navbarStyle} className="flex flex-col items-center">
              <li style={navItemStyle}><Link to="/" onClick={toggleMobileNav}>About Us</Link></li>
              <li style={navItemStyle}><Link to="/services" onClick={toggleMobileNav}>Services</Link></li>
              <li style={navItemStyle}><Link to="/contact" onClick={toggleMobileNav}>Contact Us</Link></li>
              {/* <li style={navItemStyle}><Link to="/location" onClick={toggleMobileNav}>Location</Link></li> */}
            </ul>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden ml-auto">
          <ul style={navbarStyle} className="flex items-center">
            <li style={navItemStyle}><Link to="/">About Us</Link></li>
            <li style={navItemStyle}><Link to="/services">Services</Link></li>
            <li style={navItemStyle}><Link to="/contact">Contact Us</Link></li>
            {/* <li style={navItemStyle}><Link to="/location">Location</Link></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNavbar;
