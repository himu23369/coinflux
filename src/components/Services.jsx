// src/components/Services.jsx
import React from 'react';
import { List, ChevronRight, FileText, DollarSign, Users, Briefcase, Shield, Layers } from 'react-feather';

const Services = () => {
  const servicesData = [
    {
      title: 'Goods & Service Tax',
      icon: <List size={24} />,
      items: [
        'Registrations',
        'Returns',
        'GST Audit',
        'Restoration',
        'Surrender',
        'Refund',
        'E-way Bill',
        'E-Invoicing',
        'Appeals',
        'Assessment',
      ],
    },
    {
      title: 'Income Tax',
      icon: <FileText size={24} />,
      items: ['IT Returns', 'Tax Planning', 'Refund', 'Appeals', 'Assessment'],
    },
    {
      title: 'Incorporations',
      icon: <Briefcase size={24} />,
      items: [
        'Private Limited',
        'Public Limited',
        'One Person Company',
        'HUF Proprietorship',
        'Partnership',
        'LLP',
        'Conversion',
        'Merger',
        'Demerger',
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-r from-green-700 to-teal-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => renderService(service.title, service.icon, service.items, index))}
        </div>
      </div>
    </section>
  );
};

const renderService = (title, icon, items, index) => (
  <div
    key={index}
    className="bg-white text-gray-800 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
  >
    <div className="flex items-center mb-4">
      <div className="mr-3">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="list-disc list-inside ml-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-center">
          <ChevronRight size={16} className="mr-2" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Services;
