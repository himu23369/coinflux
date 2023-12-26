// src/components/Registrations.jsx
import React from 'react';

const Registration = () => {
  return (
    <section className="bg-white p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Registrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderService('Trust')}
          {renderService('NGO')}
          {renderService('Cooperative Society')}
          {renderService('FSSAI')}
          {renderService('EXIM')}
          {renderService('RERA')}
          {renderService('Trademark')}
          {renderService('MSME UDYAM')}
          {renderService('PAN')}
          {renderService('ISO')}
          {renderService('Patent')}
          {renderService('Copyright')}
          {renderService('TAN')}
        </div>
      </div>
    </section>
  );
};

const renderService = (title) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
  </div>
);

export default Registration;
