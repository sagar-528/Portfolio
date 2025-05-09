import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../ui/ExperienceCard';

const Experience: React.FC = () => {
  // Updated experiences array with user's data - duplicates removed
  const experiences = [
    {
      title: 'System Engineer - C1',
      company: 'TCS India Pvt. Ltd. - Pune, India (Client: Toyota Financial Services)',
      period: '01/2023 - Current',
      points: [
        'Led and participated in business requirements gathering and analysis. Created specifications including functional and non-functional requirements and business utilization models.',
        'Created architecture documents, including use case model, analysis model, structural diagrams based on consolidated requirements, best practices, and design patterns.',
        'Conducted knowledge transfer sessions to team members and clients.',
        'Mentored junior developers, conducting code reviews and providing technical guidance to improve team performance and foster professional growth.',
        'Proved successful working within tight deadlines and a fast-paced atmosphere.',
        'Reviewed code, debugged problems, and corrected issues.',
        'Validating front-end candidates.'
      ],
      isLeft: true // First item on the left
    },
    {
      title: 'React Native Developer',
      company: 'Dev Story Pvt. Ltd. - Chandigarh, India (Client: Guard Tech)',
      period: '06/2021 - 11/2022',
      points: [
        'Offshore UI lead for implementing hybrid apps for America one of the Enterprise.',
        'Led and participated in business requirements gathering and analysis. Created specifications including functional and non-functional requirements and business utilization models.',
        'Created architecture documents, including use case model, analysis model, structural diagrams based on consolidated requirements, best practices, and design patterns.',
        'Optimized frontend performance by implementing techniques such as lazy loading, code splitting, and caching, resulting in improved page load times and user experience.',
        'Conducted knowledge transfer sessions to team members and clients.',
        'Proved successful working within tight deadlines and a fast-paced atmosphere.',
        'Reviewed code, debugged problems, and corrected issues.'
      ],
      isLeft: false // Second item on the right
    },
    {
      title: 'Trainee Software Engineer',
      company: 'Mantra Labs Pvt. Ltd. - Bangalore, India (Client: Globalise)',
      period: '03/2021 - 06/2021',
      points: [
        'Offshore UI lead for implementing hybrid apps.',
        'Led and participated in business requirements gathering and analysis. Created specifications including functional requirements and business utilization models.',
        'Created architecture documents, including use case model, analysis model, structural diagrams based on consolidated requirements, best practices, and design patterns.',
        'Proficient in frontend technologies and frameworks such as React, React Native, HTML5, CSS3, and JavaScript ES6+.'
      ],
      isLeft: true // Third item on the left
    }
  ];

  return (
    <section id="experience" className="pt-20 pb-10 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="relative">
          {/* Timeline bar */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;