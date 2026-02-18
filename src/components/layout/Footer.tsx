import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050510] text-gray-400 py-12 border-t border-white/5 relative overflow-hidden">
      {/* Top gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Sagar Gupta</h2>
            <p className="text-sm text-gray-500">Building digital experiences that matter.</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/sagar-gupta-655271187"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/sagar-528"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 text-center">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Sagar Gupta. All Rights Reserved.
            <span className="hidden sm:inline"> • Designed with 💜 & React Native</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;