import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Branches from './Branches';
import HeadOffice from './HeadOffice';

const ContactUs = () => {
  return (
    <>
    <HeadOffice />
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 text-lg">
              For any inquiries or assistance, please feel free to reach out to us using the contact details below.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <FaEnvelope className="w-6 h-6 mr-2 text-green-600" />
                <span className="text-gray-800">
                  <a href="mailto: coinflux@outlook.com">coinflux@outlook.com</a>
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-6 h-6 mr-2 text-green-600" />
                <span className="text-gray-800">
                  <a href="tel:01762-518790">01762-518790</a>
                </span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="w-6 h-6 mr-2 text-green-600" />
                <span className="text-gray-800">SCO-53, VIP Shopping Centre, VIP Road, Zirakpur, Punjab 140603</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Branches/>
    </>
  );
};

export default ContactUs;
