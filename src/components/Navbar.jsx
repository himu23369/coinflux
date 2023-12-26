// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center space-x-4">
      <a href="#home" className="text-lg text-white hover:underline">
        Home
      </a>
      <a href="#services" className="text-lg text-white hover:underline">
        Services
      </a>
      <a href="#about" className="text-lg text-white hover:underline">
        About Us
      </a>
      <a href="#contact" className="text-lg text-white hover:underline">
        Contact
      </a>
      <a href="#branches" className="text-lg text-white hover:underline">
        Branches
      </a>
      <a href="#loans" className="text-lg text-white hover:underline">
        Loans
      </a>
      <a href="#auditing" className="text-lg text-white hover:underline">
        Auditing
      </a>
      <a href="#registrations" className="text-lg text-white hover:underline">
        Registrations
      </a>
      <a href="#payroll" className="text-lg text-white hover:underline">
        Payroll
      </a>
      <a href="#other-services" className="text-lg text-white hover:underline">
        Other Services
      </a>
    </nav>
  );
};

export default Navbar;
