import React from 'react';
import { Phone, Mail, Clock } from 'react-feather';

const Contact = () => {
  const contactStyle = {
    color: '#2C3E50', // Replace with your desired color
    fontFamily: 'Helvetica Neue, sans-serif', // Replace with your desired font
    fontWeight: 'bold',
    fontSize: '1.5rem',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '1rem 0',
  };

  const linkStyle = {
    textDecoration: 'underline',
    color: '#007BFF', // Replace with your desired color
  };

  const hoverStyle = {
    color: '#00593E', // Replace with your desired color
  };

  return (
    <section className="bg-gray-100 p-8" style={contactStyle}>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4" style={contactStyle}>Contact Information</h2>
        <ul className="list-disc list-inside" style={listStyle}>
          <li className="flex items-center mb-2 transition duration-300 ease-in-out transform hover:scale-105" style={contactStyle}>
            <Phone size={16} className="inline mr-2" />
            <a href="tel:01762-518790" className="underline" style={linkStyle}>
              Call: 01762-518790
            </a>
          </li>
          <li className="flex items-center mb-2 transition duration-300 ease-in-out transform hover:scale-105" style={contactStyle}>
            <Mail size={16} className="inline mr-2" />
            <a href="mailto:coinflux@outlook.com" className="underline" style={linkStyle}>
              Email: coinflux@outlook.com
            </a>
          </li>
          <li style={contactStyle}>
            <Clock size={16} className="inline mr-2" /> Working Hours: 10:00 – 18:30 (Mon - Sat)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;