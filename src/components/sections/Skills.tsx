import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, LineChart, Sparkles } from 'lucide-react';
import TechIcon from '../ui/TechIcon';
import ScrollReveal from '../scroll/ScrollReveal';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'center center'],
  });

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

  const SkillBar: React.FC<{ skill: { name: string; percentage: number }; index: number }> = ({
    skill,
    index,
  }) => {
    const width = useTransform(
      scrollYProgress,
      [0, 0.6 + index * 0.05],
      [0, skill.percentage]
    );
    const displayWidth = useTransform(width, (v) => `${v}%`);

    return (
      <div className="mb-6 last:mb-0">
        <div className="flex justify-between mb-2">
          <span className="font-medium text-gray-200 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
            {skill.name}
          </span>
          <span className="text-primary-400 font-mono text-sm">{skill.percentage}%</span>
        </div>
        <div className="h-2.5 rounded-full bg-white/5 border border-white/5 overflow-hidden backdrop-blur-sm">
          <motion.div
            className="h-full rounded-full relative"
            style={{
              width: displayWidth,
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa)',
              boxShadow: '0 0 10px rgba(99, 102, 241, 0.4)'
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full animate-[shimmer_2s_infinite]"></div>
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-[#0b0b1e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="section-title">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="section-divider opacity-50"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Technical Skills */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="glass-card p-8 hover:bg-white/5 transition-colors duration-500 group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-500"></div>

              <h3 className="text-2xl font-bold mb-8 flex items-center text-white">
                <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center mr-4 text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  <Code size={20} />
                </div>
                Technical Skills
              </h3>
              <div className="space-y-2">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Professional Skills */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="glass-card p-8 hover:bg-white/5 transition-colors duration-500 group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary-500/10 rounded-full blur-3xl group-hover:bg-secondary-500/20 transition-all duration-500"></div>

              <h3 className="text-2xl font-bold mb-8 flex items-center text-white">
                <div className="w-10 h-10 rounded-lg bg-secondary-500/20 flex items-center justify-center mr-4 text-secondary-400 group-hover:scale-110 transition-transform duration-300">
                  <LineChart size={20} />
                </div>
                Professional Skills
              </h3>
              <div className="space-y-2">
                {professionalSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center mb-12">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4 shadow-lg shadow-primary-500/30">
                <Sparkles size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center text-white">
                My Tech Stack
              </h3>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <ScrollReveal
                key={index}
                direction="zoom"
                delay={index * 0.08}
              >
                <div className="group flex flex-col items-center justify-center p-6 glass-card w-32 h-32 cursor-pointer glass-card-hover relative">
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                  <TechIcon
                    name={tech.icon}
                    className="text-4xl mb-3 text-gray-400 group-hover:text-white transition-colors duration-300 drop-shadow-lg"
                  />
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;