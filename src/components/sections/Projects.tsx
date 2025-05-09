import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { ShoppingCart, Video, LineChart, Briefcase, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Multi-Tenant Financial Services App',
      description: 'React Native app suite for Toyota Financial Services brands (TFS, LFS, TCPR, MFS, BPFS).',
      detailedDescription: 'Led frontend development, managed multi-tenant deployment (App/Play Stores, Firebase Distro), implemented monitoring (Dynatrace), automated testing (Sauce Labs), and RBAC.',
      icon: <Briefcase className="text-primary-600" size={24} />,
      iconBg: 'bg-primary-100',
      tags: ['React Native', 'Firebase', 'Dynatrace', 'Sauce Labs', 'App Store', 'Play Store'],
      gradient: 'from-primary-600 to-secondary-600',
      demoLink: 'https://play.google.com/store/apps/details?id=com.tmcc.click2pay.mytfs&hl=en_IN',
      // codeLink: '#'
    },
    {
      title: 'THEIR ACTIONS (Guard Tech App)',
      description: 'React Native mobile security application for Guard Tech.',
      detailedDescription: 'Led UI design, built components, managed app store deployment, implemented push notifications (FCM) and in-app purchase subscriptions.',
      icon: <Shield className="text-green-600" size={24} />,
      iconBg: 'bg-green-100',
      tags: ['React Native', 'Redux Saga', 'Firebase', 'FCM', 'IAP', 'App Store', 'Play Store'],
      gradient: 'from-green-600 to-teal-600',
      demoLink: 'https://play.google.com/store/apps/details?id=com.theirActions',
      // codeLink: '#'
    },
    {
      title: 'Ro& by Armatec Global',
      description: 'Security technology has historically been costly, complex, and slow to deploy.',
      detailedDescription: 'Ro& eliminates these barriers offering zero deployment time and scalable SaaS based access to powerful retrospective video analysis.',
      icon: <Video className="text-purple-600" size={24} />,
      iconBg: 'bg-purple-100',
      tags: ['Vue.js', 'Tailwind CSS', 'PrimeVue', 'Vuex'],
      gradient: 'from-purple-600 to-pink-600',
      demoLink: 'https://clue.roand.ai/',
      // codeLink: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
          <div className="section-divider"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.a 
            href={projects.length > 3 ? "#" : undefined} 
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white transition-colors 
              ${projects.length > 3 
                ? 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 cursor-pointer' 
                : 'bg-gray-400 dark:bg-gray-500 opacity-50 cursor-not-allowed'
              }`}
            whileHover={projects.length > 3 ? { scale: 1.05 } : {}}
            whileTap={projects.length > 3 ? { scale: 0.95 } : {}}
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;