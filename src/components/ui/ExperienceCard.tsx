import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceProps {
  experience: {
    title: string;
    company: string;
    period: string;
    points: string[];
    isLeft: boolean;
  };
  index: number;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ experience, index }) => {
  return (
    <div className={`flex flex-col md:flex-row mb-16 relative z-10 ${!experience.isLeft ? 'md:flex-row-reverse' : ''}`}>
      <motion.div
        className={`md:w-1/2 ${experience.isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} mb-6 md:mb-0`}
        initial={{ opacity: 0, x: experience.isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
        <p className={`font-medium mb-1 ${index % 2 === 0 ? 'text-primary-400' : 'text-secondary-400'}`}>{experience.company}</p>
        <p className="text-gray-500 text-sm tracking-widest uppercase">{experience.period}</p>
      </motion.div>

      <div className="hidden md:flex md:w-0 justify-center items-start absolute left-1/2 top-0 -translate-x-1/2">
        <motion.div
          className={`w-4 h-4 rounded-full border-2 border-[#0a0a1a] shadow-[0_0_10px_currentColor] z-20 ${(experience.period.includes('Present') || experience.period.includes('Current')) ? 'bg-primary-500 text-primary-500' : 'bg-secondary-500 text-secondary-500'}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>

      <motion.div
        className={`md:w-1/2 ${experience.isLeft ? 'md:pl-16' : 'md:pr-16'}`}
        initial={{ opacity: 0, x: experience.isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="glass-card p-8 hover:bg-white/5 transition-colors relative group">
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${index % 2 === 0 ? 'from-primary-500 to-transparent' : 'from-secondary-500 to-transparent'} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
          <ul className="space-y-3">
            {experience.points.map((point, idx) => (
              <li key={idx} className="flex text-gray-400 text-sm leading-relaxed">
                <span className="mr-3 text-primary-500 mt-1.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;