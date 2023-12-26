import React, { useState } from 'react';
import Loans from './Loans';
import Auditing from './Auditing';
import Registration from './Registration';
import Payroll from './Payroll';
import OtherServices from './OtherServices';
import GoodsAndServiceTax from './GoodsAndServiceTax';
import IncomeTax from './IncomeTax';
import Incorporations from './Incorporations';

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState('loans');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="flex items-center mb-4 space-x-4 overflow-x-scroll">
          {renderTab('goodsAndServiceTax', 'Goods & Service Tax')}
          {renderTab('incomeTax', 'Income Tax')}
          {renderTab('incorporations', 'Incorporations')}
          {renderTab('loans', 'Loans')}
          {renderTab('auditing', 'Auditing')}
          {renderTab('registrations', 'Registrations')}
          {renderTab('payroll', 'Payroll')}
          {renderTab('otherServices', 'Other Services')}
        </div>
        <div className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out bg-white border-2 ${getBorderColor(
          activeTab
        )}`}>
          {renderActiveTab()}
        </div>
      </div>
    </section>
  );

  function renderTab(tabName, label) {
    return (
      <button
        key={tabName}
        className={`px-4 py-2 text-lg font-medium focus:outline-none transition-all duration-300 ${
          activeTab === tabName
            ? 'bg-green-600 text-white rounded-tl-md rounded-tr-md'
            : 'text-gray-600 hover:text-green-600'
        }`}
        onClick={() => handleTabChange(tabName)}
      >
        {label}
      </button>
    );    
  }

  function renderActiveTab() {
    switch (activeTab) {
      case 'loans':
        return <Loans />;
      case 'auditing':
        return <Auditing />;
      case 'registrations':
        return <Registration />;
      case 'payroll':
        return <Payroll />;
      case 'otherServices':
        return <OtherServices />;
      case 'goodsAndServiceTax':
        return <GoodsAndServiceTax />;
      case 'incomeTax':
        return <IncomeTax />;
      case 'incorporations':
        return <Incorporations />;
      default:
        return null;
    }
  }

  function getBorderColor(tabName) {
    switch (tabName) {
      case 'loans':
        return 'border-green-600';
      case 'auditing':
        return 'border-green-600';
      case 'registrations':
        return 'border-green-600';
      case 'payroll':
        return 'border-green-600';
      case 'otherServices':
        return 'border-green-600';
      case 'goodsAndServiceTax':
        return 'border-green-600';
      case 'incomeTax':
        return 'border-green-600';
      case 'incorporations':
        return 'border-green-600';
      default:
        return 'border-transparent';
    }
  }
};

export default ServicesTabs;
