import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the services provided by Coinflux, you agree to be bound by these Terms of Service.
          If you do not agree to these terms, please do not use our services.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">2. Use of Services</h2>
        <p>
          You agree to use Coinflux's services for lawful purposes only. You must not violate any laws in your
          jurisdiction while using our services.
        </p>
      </section>

      {/* <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">3. User Account</h2>
        <p>
          To access certain features of our services, you may be required to create an account.
          You are responsible for maintaining the confidentiality of your account information and for all activities
          that occur under your account.
        </p>
      </section> */}

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">3. Content Ownership</h2>
        <p>
          All content provided on Coinflux is the property of Coinflux and is protected by intellectual property laws.
          You may not reproduce, distribute, or create derivative works without our explicit permission.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
        <p>
          Coinflux is not liable for any direct, indirect, incidental, consequential, or punitive damages arising out
          of your use of our services.
        </p>
      </section>

      {/* <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">6. Termination</h2>
        <p>
          Coinflux reserves the right to terminate or suspend your account and access to the services at its sole discretion,
          without notice, for any reason.
        </p>
      </section> */}
    </div>
  );
};

export default TermsOfService;
