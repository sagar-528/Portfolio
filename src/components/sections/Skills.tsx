import React from 'react';
import { motion } from 'framer-motion';
import { Code, LineChart } from 'lucide-react';
import TechIcon from '../ui/TechIcon';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'React Native', percentage: 90 },
    { name: 'JavaScript/TypeScript', percentage: 85 },
    { name: 'React.js/Next.js', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 80 },
    { name: 'Vue.js', percentage: 60 },
  ];

  const professionalSkills = [
    { name: 'Problem Solving', percentage: 95 },
    { name: 'Team Collaboration', percentage: 90 },
    { name: 'Communication', percentage: 88 },
    { name: 'Project Management', percentage: 85 },
    { name: 'Agile Development', percentage: 90 },
  ];

  const techStack = [
    { name: 'JavaScript', icon: 'js' },
    { name: 'React', icon: 'react' },
    { name: 'React Native', icon: 'reactnative' },
    { name: 'Vue.js', icon: 'vue' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'Git', icon: 'git' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md card-hover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Code className="text-primary-500 mr-3" /> Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div key={index} variants={skillVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Professional Skills */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md card-hover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <LineChart className="text-secondary-500 mr-3" /> Professional Skills
            </h3>
            
            <div className="space-y-6">
              {professionalSkills.map((skill, index) => (
                <motion.div key={index} variants={skillVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">My Tech Stack</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm dark:shadow-gray-600 w-28 h-28 card-hover"
                variants={skillVariants}
              >
                <TechIcon name={tech.icon} className="text-4xl mb-2 text-gray-700 dark:text-gray-300" />
                <span className="text-sm text-gray-800 dark:text-gray-200 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;