import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold gradient-text">Sagar Gupta</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative text-gray-700 hover:text-primary-600 cursor-pointer transition-colors duration-100 pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
                activeClass="text-primary-600 after:scale-x-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white py-2 px-4 shadow-lg transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block relative py-2 text-gray-700 hover:text-primary-600 cursor-pointer transition-colors duration-200 after:content-[''] after:absolute after:bottom-[calc(0.5rem)] after:left-0 after:h-[2px] after:w-full after:bg-primary-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
            activeClass="text-primary-600 after:scale-x-100"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;