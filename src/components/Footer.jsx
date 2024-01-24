// // src/components/Footer.jsx
// import React from 'react';
// import { Phone, Mail, Clock, Heart, Instagram, Linkedin, Twitter, Facebook } from 'react-feather';

// const Footer = () => {
//   const contactStyle = {
//     color: '#ffffff', // Replace with your desired color
//     fontSize: '1.5rem',
//   };

//   const socialIconStyle = {
//     color: '#ffffff',
//     marginRight: '1rem',
//     transition: 'color 0.3s ease-in-out',
//   };

//   return (
//     <footer className="bg-gradient-to-r from-green-700 to-teal-900 text-white p-8">
//       <div className="container mx-auto flex flex-col items-center">
//         <div className="flex flex-col items-center mb-6">
//           <div className="flex items-center mb-2">
//             <Phone size={16} className="mr-2" />
//             <a href="tel:01762-518790" className="" style={contactStyle}>
//                01762-518790
//             </a>
//           </div>
//           <div className="flex items-center mb-2">
//             <Mail size={16} className="mr-2" />
//             <a href="mailto:coinflux@outlook.com" className="" style={contactStyle}>
//               coinflux@outlook.com
//             </a>
//           </div>
//           <div className="flex items-center">
//             <Clock size={16} className="mr-2" />
//             Working Hours: 10:00 – 18:30 (Mon - Sat)
//           </div>
//         </div>
//         <p className="text-sm text-gray-300 mb-2">
//           Connect with us on social media for updates and more:
//         </p>
//         <div className="flex items-center justify-center mb-4">
//           <a href="https://www.instagram.com/coinflux.in/" className="social-icon" style={socialIconStyle}>
//             <Instagram size={24} />
//           </a>
//           <a href="https://www.linkedin.com/company/coinflux-official/about/" className="social-icon" style={socialIconStyle}>
//             <Linkedin size={24} />
//           </a>
//           <a href="https://www.facebook.com/coinflux" className="social-icon" style={socialIconStyle}>
//             <Facebook size={24} />
//           </a>
//         </div>
//         <p className="text-xs text-gray-300 mb-6">
//           {/* Follow us on <span className="font-semibold">@CoinfluxServices</span> */}
//         </p>
//         <p className="text-sm text-gray-300">
//           &copy; 2023 COINFLUX SERVICES PVT. LTD.
//           {/* Made with{' '} */}
//           {/* <Heart size={16} className="text-red-500 inline" /> for you */}
//         </p>
//         <p>All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Phone, Mail, Clock, Heart, Instagram, Linkedin, Twitter, Facebook } from 'react-feather';

const Footer = () => {
  const contactStyle = {
    color: '#ffffff',
    fontSize: '1.5rem',
  };

  const socialIconStyle = {
    color: '#ffffff',
    marginRight: '1rem',
    transition: 'color 0.3s ease-in-out',
  };

  return (
    <footer className="bg-gradient-to-r from-green-700 to-teal-900 text-white p-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center mb-2">
            <Phone size={16} className="mr-2" />
            <a href="tel:01762-518790" className="" style={contactStyle}>
              01762-518790
            </a>
          </div>
          <div className="flex items-center mb-2">
            <Mail size={16} className="mr-2" />
            <a href="mailto:coinflux@outlook.com" className="" style={contactStyle}>
              coinflux@outlook.com
            </a>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            Working Hours: 10:00 – 18:30 (Mon - Sat)
          </div>
        </div>
        <p className="text-sm text-gray-300 mb-2">
          Connect with us on social media for updates and more:
        </p>
        <div className="flex items-center justify-center mb-4">
          <a href="https://www.instagram.com/coinflux.in/" className="social-icon" style={socialIconStyle}>
            <Instagram size={24} />
          </a>
          <a href="https://www.linkedin.com/company/coinflux-official/about/" className="social-icon" style={socialIconStyle}>
            <Linkedin size={24} />
          </a>
          <a href="https://www.facebook.com/coinflux" className="social-icon" style={socialIconStyle}>
            <Facebook size={24} />
          </a>
        </div>
        <p className="text-xs text-gray-300 mb-6">
          <a href="/terms-and-conditions" className="text-gray-300 hover:text-white mr-4">
            Terms and Conditions
          </a>
          <a href="/privacy-policy" className="text-gray-300 hover:text-white mr-4">
            Privacy Policy
          </a>
          <a href="/copyright" className="text-gray-300 hover:text-white">
            Copyright
          </a>
        </p>
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} COINFLUX SERVICES PVT. LTD.
        </p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

