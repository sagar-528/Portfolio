import React from 'react';
import { Link } from 'react-scroll';
import { User, Mail, MapPin, Briefcase, Download, Send, Sparkles } from 'lucide-react';
import ScrollReveal from '../scroll/ScrollReveal';

const About: React.FC = () => {
  const highlights = [
    { icon: User, label: 'Name', value: 'Sagar Gupta' },
    { icon: Mail, label: 'Email', value: 'gupta.sagar528@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Pune, India' },
    { icon: Briefcase, label: 'Experience', value: '4+ Years' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-[#0b0b1e] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-900/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary-900/15 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(99,102,241,0.03)_50%,transparent_100%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="section-divider opacity-60" />
            <p className="mt-5 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              React Native Developer · Building scalable apps & digital experiences
            </p>
          </div>
        </ScrollReveal>

        {/* Open to work badge */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-emerald-300">Open to work</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Main content card */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden">
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-80" />

            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center">
                  <Sparkles className="text-primary-400" size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Who am I?
                </h3>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I have over 4 years of experience delivering IT solutions and addressing key business opportunities in challenging environments. I specialize in <span className="text-white font-medium">UI, Mobile App, and Web development</span>.
                </p>
                <p>
                  I've held roles as Team Lead and Senior Developer in the BFSI domain, with strong skills in requirements gathering, architecture documentation, and mentoring. I'm experienced in <span className="text-white font-medium">APK/IPA deployment</span> and thrive in fast-paced, deadline-driven environments.
                </p>
                <p>
                  I focus on clear communication, ownership, and solving UI and performance issues—so products ship on time and users get a great experience.
                </p>
              </div>

              {/* Highlights strip */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary-500/20 hover:bg-white/[0.07] transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary-500/20 flex items-center justify-center shrink-0 text-primary-400">
                        <item.icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                        <div className="text-sm font-medium text-white truncate">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://drive.google.com/uc?export=download&id=13bM4ygCYtEABrLitSMcZ_oe6n9DMG5bo"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="SagarGupta_CV.pdf"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  <Download size={18} className="shrink-0" />
                  Download CV
                </a>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
                >
                  <Send size={18} className="text-primary-400 shrink-0" />
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
