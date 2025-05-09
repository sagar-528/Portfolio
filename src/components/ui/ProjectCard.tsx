import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    detailedDescription: string;
    icon: React.ReactNode;
    iconBg: string;
    tags: string[];
    gradient: string;
    demoLink: string;
    codeLink: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="h-80 relative cursor-pointer [perspective:1000px]"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 }
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="relative h-full w-full rounded-xl [transform-style:preserve-3d]"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 bg-gray-50 p-6 rounded-xl h-full w-full flex flex-col [backface-visibility:hidden]">
          <div className={`${project.iconBg} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
            {project.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className={`${project.iconBg} text-${project.gradient.split(' ')[0].replace('from-', '')}-800 text-xs px-3 py-1 rounded-full`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Back Side */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} p-6 rounded-xl h-full w-full flex flex-col justify-center items-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]`}>
          <h3 className="text-xl font-bold mb-4 text-center">{project.title}</h3>
          <p className="text-center mb-6">{project.detailedDescription}</p>
          <div className="flex space-x-4">
            <a 
              href={project.demoLink} 
              className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md`}
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
            {/* <a 
              href={project.codeLink} 
              className="border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Code
            </a> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
