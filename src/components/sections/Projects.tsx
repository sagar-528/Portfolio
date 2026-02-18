import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { Video, Briefcase, Shield, ArrowRight } from 'lucide-react';
import ScrollReveal from '../scroll/ScrollReveal';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Multi-Tenant App Suite',
      description:
        'Detailed financial services app suite for brands like Toyota Financial Services (TFS), Lexus (LFS), and Mazda (MFS).',
      detailedDescription:
        'Led frontend for 5+ branded apps. Managed multi-tenant deployment via App Center/Firebase. Implemented Dynatrace monitoring, Sauce Labs automation, and complex RBAC flows.',
      icon: <Briefcase className="text-white" size={28} />,
      iconBg: 'bg-primary-500',
      tags: [
        'React Native',
        'Firebase',
        'Dynatrace',
        'CI/CD',
        'App Store',
      ],
      gradient: 'from-blue-600 to-indigo-600',
      demoLink:
        'https://play.google.com/store/apps/details?id=com.tmcc.click2pay.mytfs&hl=en_IN',
    },
    {
      title: 'THEIR ACTIONS',
      description: 'Secure mobile security application for Guard Tech with real-time alerts and subscription management.',
      detailedDescription:
        'Architected the UI/UX. Integrated Redux Saga for state, FCM for push notifications, and In-App Purchases (IAP) for subscriptions. Optimized simplified deployment pipelines.',
      icon: <Shield className="text-white" size={28} />,
      iconBg: 'bg-green-500',
      tags: [
        'React Native',
        'Redux Saga',
        'FCM',
        'IAP',
        'Analytics'
      ],
      gradient: 'from-emerald-500 to-teal-600',
      demoLink:
        'https://play.google.com/store/apps/details?id=com.theirActions',
    },
    {
      title: 'Ro& by Armatec',
      description:
        'SaaS platform democratizing access to powerful retrospective video analysis technology.',
      detailedDescription:
        'Built a scalable SaaS frontend with Vue.js/PrimeVue. Eliminated deployment barriers for security teams. Features include real-time video scrubbing and incident tagging.',
      icon: <Video className="text-white" size={28} />,
      iconBg: 'bg-purple-500',
      tags: ['Vue.js', 'Tailwind', 'PrimeVue', 'SaaS', 'Video'],
      gradient: 'from-violet-600 to-fuchsia-600',
      demoLink: 'https://clue.roand.ai/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0a0a1a] relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-primary-900/10 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="section-divider opacity-50"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work in mobile and web development, focusing on performance and user experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.15}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="text-center mt-16">
            <a
              href="#"
              className="group inline-flex items-center px-8 py-3.5 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300"
            >
              View All Projects
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={18} className="text-primary-400" />
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;