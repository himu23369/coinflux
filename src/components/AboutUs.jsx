import React from 'react';
import teamPhoto from '../assets/ca.jpeg';
import cma from '../assets/cma.jpg';
import cs from '../assets/cs.jpg';
import advocate from '../assets/advocate.jpeg';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Empowering Your Financial Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-4">Who Are We?</h3>
            <p className="text-gray-700">
              We are more than just financial experts; we are your partners in success. Our diverse team, consisting of Chartered Accountants (CAs),
              Company Secretaries (CSs), Cost & Management Accountants (CMAs), and Advocates, is dedicated to simplifying the financial world for you.
              With a mission to provide comprehensive services, we support and enhance your financial well-being, ensuring a seamless journey towards success.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={teamPhoto} alt="Team" className="shadow-md mx-auto mb-4" style={{ maxWidth: '150px', borderRadius: '8px' }} />
            <img src={cma} alt="Team" className="shadow-md mx-auto mb-4" style={{ maxWidth: '150px', borderRadius: '8px' }} />
            <img src={cs} alt="Team" className="shadow-md mx-auto mb-4" style={{ maxWidth: '150px', borderRadius: '8px' }} />
            <img src={advocate} alt="Team" className="shadow-md mx-auto mb-4" style={{ maxWidth: '150px', borderRadius: '8px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
