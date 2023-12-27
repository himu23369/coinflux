import React from 'react';
import logo from '../assets/logo.jpg'; // Update the path to your logo

const Header = () => {
  const headerStyle = {
    background: 'linear-gradient(to right, #2C3E50, #4CAF50)', // Dark greenish gradient
    color: '#FFFFFF', // White text color
    padding: '1.5rem 0 1rem', // Adjusted padding
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: 'bold',
    fontSize: '2rem',
  };

  const logoStyle = {
    height: '3rem',
    width: 'auto',
    paddingLeft: '1rem'
  };  

  return (
    <header style={headerStyle}>
      <div className="container mx-auto">
        <img src={logo} alt="Logo" style={logoStyle} />
        <h1 style={{ paddingLeft: '1rem' }}>COINFLUX SERVICES PVT. LTD.</h1>
      </div>
    </header>
  );
};

export default Header;
