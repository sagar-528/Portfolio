import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-gradient pt-24 pb-20 md:pt-32 md:pb-32 lg:pt-52 lg:pb-52 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Sagar Gupta</span>
            </h1>
            <div className="typewriter text-2xl md:text-3xl mb-6">
              React Native Developer
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              With over 4+ years of experience building scalable web applications and digital experiences that users love.
            </p>
            <div className="flex space-x-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer inline-block"
              >
                Hire Me
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="border border-primary-600 text-primary-400 dark:text-primary-300 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer inline-block"
              >
                View Work
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary-500 rounded-full opacity-20 blur-xl"></div>
              <motion.img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Developer" 
                className="relative w-full h-full rounded-full object-cover border-4 border-primary-500"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
        
        {showScrollIndicator && (
          <motion.div 
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <ChevronDown size={32} className="text-primary-400" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;