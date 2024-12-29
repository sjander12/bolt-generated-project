import React, { useState, useEffect } from 'react';
    import { Moon, Sun } from 'lucide-react';

    const Header = () => {
      const [darkMode, setDarkMode] = useState(false);

      useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [darkMode]);

      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

      return (
        <header className="bg-gradient-to-r from-blue-200 to-purple-200 dark:from-gray-700 dark:to-gray-800 py-6 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center">
              <img src="/logo/logo-meestersander.jpg" alt="Meester Sander Logo" className="h-12 mr-4 rounded-full" />
              <span className="text-3xl font-bold text-gray-800 dark:text-white animate-pulse">
                <span className="text-pink-500">meester</span><span className="text-blue-600">sander</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-700 transition-colors duration-200">
                <img src="/images/login-image.png" alt="Login Icon" className="h-5 w-5 inline-block mr-2" />
                Login
              </button>
              <button onClick={toggleDarkMode} className="focus:outline-none p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                {darkMode ? <Sun className="text-white" size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </div>
        </header>
      );
    };

    export default Header;
