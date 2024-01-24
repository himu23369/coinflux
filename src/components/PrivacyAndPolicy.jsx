import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">1. Information Collection</h2>
        <p>
          Coinflux may collect personal information such as name, email address, and payment details to provide and improve our services.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
        <p>
          We may use your information to personalize your experience, improve our services, and communicate with you.
          We do not sell or share your personal information with third parties without your consent.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">3. Cookies and Tracking</h2>
        <p>
          Coinflux may use cookies and similar technologies to analyze trends, administer the website, and gather demographic information.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">4. Security</h2>
        <p>
          We take reasonable measures to protect your information, but no method of transmission over the internet is completely secure.
          You use our services at your own risk.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
