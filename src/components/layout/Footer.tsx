import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text mb-2">Sagar Gupta</h2>
            <p className="text-gray-600 dark:text-gray-400">React Native Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/sagar-gupta-655271187" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 text-gray-600 dark:text-gray-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/sagar-528" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Sagar Gupta. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;