import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ExperienceCard from '../ui/ExperienceCard';
import ScrollReveal from '../scroll/ScrollReveal';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.7', 'end 0.8'],
  });

  // Timeline bar fills as you scroll through the section
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const experiences = [
    {
      title: 'System Engineer - C1',
      company:
        'TCS India Pvt. Ltd. - Pune, India (Client: Toyota Financial Services)',
      period: '01/2023 - Current',
      points: [
        'Led and participated in business requirements gathering and analysis. Created specifications including functional and non-functional requirements.',
        'Created architecture documents, including use case model, analysis model, structural diagrams based on consolidated requirements.',
        'Conducted knowledge transfer sessions to team members and clients.',
        'Mentored junior developers, conducting code reviews and providing technical guidance.',
        'Proved successful working within tight deadlines and a fast-paced atmosphere.',
      ],
      isLeft: true,
    },
    {
      title: 'React Native Developer',
      company:
        'Dev Story Pvt. Ltd. - Chandigarh, India (Client: Guard Tech)',
      period: '06/2021 - 11/2022',
      points: [
        'Offshore UI lead for implementing hybrid apps for America one of the Enterprise.',
        'Optimized frontend performance by implementing techniques such as lazy loading, code splitting, and caching.',
        'Created architecture documents, including use case model, analysis model, structural diagrams.',
        'Proved successful working within tight deadlines and a fast-paced atmosphere.',
        'Reviewed code, debugged problems, and corrected issues.',
      ],
      isLeft: false,
    },
    {
      title: 'Trainee Software Engineer',
      company:
        'Mantra Labs Pvt. Ltd. - Bangalore, India (Client: Globalise)',
      period: '03/2021 - 06/2021',
      points: [
        'Offshore UI lead for implementing hybrid apps.',
        'Led and participated in business requirements gathering and analysis.',
        'Created architecture documents, including use case model, analysis model, structural diagrams.',
        'Proficient in frontend technologies and frameworks such as React, React Native, HTML5, CSS3, and JavaScript ES6+.',
      ],
      isLeft: true,
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-[#0a0a1a] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal direction="up">
          <div className="text-center mb-24">
            <h2 className="section-title">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="section-divider opacity-50"></div>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline bar — fills progressively with scroll */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 transform -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full"
              style={{
                height: lineHeight,
                background:
                  'linear-gradient(to bottom, #6366f1, #8b5cf6, #a78bfa)',
                boxShadow: '0 0 15px #6366f1'
              }}
            />
          </div>

          {experiences.map((exp, index) => (
            <ScrollReveal
              key={index}
              direction={exp.isLeft ? 'left' : 'right'}
              delay={index * 0.15}
            >
              <ExperienceCard experience={exp} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;