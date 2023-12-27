import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Update the path to your logo

const HeaderNavbar = () => {
  const headerStyle = {
    background: 'linear-gradient(to right, #2C3E50, #4CAF50)', // Dark greenish gradient
    color: '#FFFFFF', // White text color
    padding: '1.5rem', // Adjusted padding
    fontFamily: 'Helvetica Neue, sans-serif',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    height: '3.8rem',
    width: 'auto',
    marginRight: '1rem', // Adjusted margin
  };

  const companyNameStyle = {
    fontSize: '1.8rem', // Adjusted font size
    fontWeight: 'bold',
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
    marginLeft: '0.8rem',
    fontSize: '1.5rem', // Adjusted font size
  };

  return (
    <header style={headerStyle} className="lg:flex lg:justify-between lg:items-center">
      <div className="container mx-auto">
        <div style={logoContainerStyle}>
          <img src={logo} alt="Logo" style={logoStyle} />
          <div>
            {/* <div style={companyNameStyle}>COINFLUX SERVICES PVT. LTD.</div> */}
          </div>
        </div>
        <nav className="lg:flex lg:items-center">
          <ul style={navbarStyle} className="lg:flex lg:items-center">
            <li style={navItemStyle}><Link to="/">Home</Link></li>
            <li style={navItemStyle}><Link to="/services">Services</Link></li>
            <li style={navItemStyle}><Link to="/contact">Contact</Link></li>
            <li style={navItemStyle}><Link to="/location">Location</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNavbar;
