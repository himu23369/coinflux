import React from 'react';

const CopyrightNotice = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6">Copyright Notice</h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">1. Ownership</h2>
        <p>
          All content and materials on Coinflux, including but not limited to text, graphics, logos, and images,
          are the property of Coinflux and are protected by copyright laws.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">2. Use of Materials</h2>
        <p>
          You may not reproduce, distribute, or use any materials from Coinflux without our explicit permission.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">3. Reporting Copyright Violations</h2>
        <p>
          If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us with the necessary information.
        </p>
      </section>
    </div>
  );
};

export default CopyrightNotice;
