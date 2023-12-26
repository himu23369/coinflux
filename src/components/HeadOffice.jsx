// src/components/HeadOffice.jsx
import React from 'react';

const HeadOffice = () => {
  const officeAddress = "SCO-53, VIP Shopping Centre, VIP Road, Zirakpur, Punjab 140603";
  const googleMapsLink = "https://www.google.com/maps?q=SCO-53, VIP Shopping Centre, VIP Road, Zirakpur, Punjab 140603";

  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-green-600">Visit Our Head Office</h2>
        <p className="text-lg text-gray-700 mb-6">Explore our central location where we coordinate and serve our clients.</p>
        <address className="text-lg mb-6">{officeAddress}</address>
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-md text-lg hover:bg-green-700 focus:outline-none transition duration-300">
          Locate Us on Google Maps
        </a>
      </div>
    </section>
  );
};

export default HeadOffice;
