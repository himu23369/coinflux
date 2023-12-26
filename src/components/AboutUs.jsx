import React from 'react';
import teamPhoto from '../assets/ca.jpeg'; // Import your team photo or replace it with the actual path

const AboutUs = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Empowering Your Financial Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Who Are We?</h3>
            <p className="text-gray-700">
              We are more than just financial experts; we are your partners in success. Our diverse team, consisting of Chartered Accountants (CAs),
              Company Secretaries (CSs), Cost & Management Accountants (CMAs), and Advocates, is dedicated to simplifying the financial world for you.
              With a mission to provide comprehensive services, we support and enhance your financial well-being, ensuring a seamless journey towards success.
            </p>
          </div>
          <div className="text-center">
            <img src={teamPhoto} alt="Team" className="shadow-md mx-auto" style={{ maxWidth: '300px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
