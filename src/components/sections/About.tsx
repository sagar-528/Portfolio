import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Briefcase, Download, Send } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/3 mb-10 md:mb-0 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-75"></div>
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="About Me" 
                className="relative w-full h-full rounded-lg object-cover"
              />
            </div>
          </motion.div>
          <motion.div 
            className="md:w-2/3 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Who am I?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Having over 4 years of experience in delivering IT solutions in various capabilities to address key business opportunities under challenging environments. Experienced in UI, Mobile App and Website development technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Responsible roles include Team Lead, Senior Developer to meet changing business needs in the BFSI domain. Excellent organizational, interpersonal, communication and analytical skills. Excellent troubleshooting and self-learning capabilities.
            </p>
             <p className="text-gray-700 dark:text-gray-300 mb-6">
              Experience in managing APK/IPA file deployment in play/app store. Good communication, leadership, well organized, goal oriented and interpersonal skills with proven abilities in resolving UI issues.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3 dark:bg-primary-900">
                  <User size={16} className="text-primary-600 dark:text-primary-300" />
                </div>
                <span className="text-gray-700 dark:text-gray-300"><strong>Name:</strong> Sagar Gupta</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3 dark:bg-primary-900">
                  <Mail size={16} className="text-primary-600 dark:text-primary-300" />
                </div>
                <span className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> guptasagar123@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3 dark:bg-primary-900">
                  <MapPin size={16} className="text-primary-600 dark:text-primary-300" />
                </div>
                <span className="text-gray-700 dark:text-gray-300"><strong>Location:</strong> Pune Maharashtra, India</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3 dark:bg-primary-900">
                  <Briefcase size={16} className="text-primary-600 dark:text-primary-300" />
                </div>
                <span className="text-gray-700 dark:text-gray-300"><strong>Experience:</strong> 4+ Years</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://drive.google.com/uc?export=download&id=13bM4ygCYtEABrLitSMcZ_oe6n9DMG5bo"
                target="_blank"
                rel="noopener noreferrer"
                download="SagarGupta_CV.pdf"
                className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
              >
                <Download size={16} className="mr-2" /> Download CV
              </a>
              <a 
                href="#contact" 
                className="border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
              >
                <Send size={16} className="mr-2" /> Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;