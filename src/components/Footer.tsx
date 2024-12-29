import React from 'react';

    const Footer = () => {
      return (
        <footer className="bg-gradient-to-r from-blue-200 to-purple-200 dark:from-gray-700 dark:to-gray-800 py-6 mt-10">
          <div className="container mx-auto text-center text-gray-700 dark:text-gray-300 px-4">
            <p className="mb-2">
              Contact: <a href="mailto:s.meppelink@plateau-assen.nl" className="text-pink-500 hover:text-pink-600 transition-colors duration-200">s.meppelink@plateau-assen.nl</a>
            </p>
            <p>&copy; {new Date().getFullYear()} meestersander. Alle rechten voorbehouden.</p>
          </div>
        </footer>
      );
    };

    export default Footer;
