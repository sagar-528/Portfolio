import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Remove codeLink from interface
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
    codeLink?: string; // Optional if you still want to support it somewhere
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-[400px] relative cursor-pointer perspective-1000 group"
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
        className="relative h-full w-full rounded-2xl preserve-3d"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 28, mass: 0.8 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 glass-card p-8 h-full w-full flex flex-col backface-hidden border border-white/10 group-hover:border-primary-500/30 transition-colors duration-300 rounded-2xl overflow-hidden">
          {/* Subtle top glow on hover (no harsh line) */}
          <div className={`absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

          <div className="mb-6 relative">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md shadow-lg`}>
              {project.icon}
            </div>
            {/* Glow behind icon */}
            <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} blur-xl opacity-20 -z-10 rounded-full`}></div>
          </div>

          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
            {project.title}
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="bg-white/5 border border-white/10 text-xs font-medium px-3 py-1 rounded-full text-gray-300">
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="bg-white/5 border border-white/10 text-xs font-medium px-3 py-1 rounded-full text-gray-400">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 h-full w-full rounded-2xl backface-hidden rotateY-180 overflow-hidden">
          {/* Gradient Background — no top line */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-90`}></div>
          <div className="absolute inset-0 rounded-2xl bg-black/20"></div>

          <div className="relative h-full p-8 flex flex-col justify-center items-center text-white z-10">
            <h3 className="text-2xl font-bold mb-4 text-center text-white">{project.title}</h3>

            <p className="text-center mb-8 text-white/90 leading-relaxed font-light">
              {project.detailedDescription}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="bg-white/20 backdrop-blur-md text-xs px-3 py-1 rounded-full text-white border border-white/20">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-gray-900 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-black/20 flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="w-2 h-2 rounded-full bg-green-500"></span> View Live
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
