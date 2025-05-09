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
    <div className={`flex flex-col md:flex-row mb-12 ${!experience.isLeft ? 'md:flex-row-reverse' : ''}`}>
      <motion.div 
        className={`md:w-1/2 ${experience.isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} mb-6 md:mb-0`}
        initial={{ opacity: 0, x: experience.isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className={`${index % 2 === 0 ? 'text-primary-600' : 'text-secondary-600'}`}>{experience.company}</p>
        <p className="text-gray-500">{experience.period}</p>
      </motion.div>
      <div className="hidden md:flex md:w-1/12 justify-center items-start">
        <motion.div 
          className={`w-6 h-6 rounded-full ${experience.period.includes('Present') ? 'bg-primary-500' : 'bg-secondary-500'} border-4 border-white shadow-md`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
      <motion.div 
        className={`md:w-1/2 ${experience.isLeft ? 'md:pl-12' : 'md:pr-12'}`}
        initial={{ opacity: 0, x: experience.isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-white p-6 rounded-xl shadow-md card-hover">
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {experience.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;