import React from 'react';
import { User, Mail, MapPin, Briefcase, Download, Send } from 'lucide-react';
import ScrollReveal from '../scroll/ScrollReveal';
import ParallaxLayer from '../scroll/ParallaxLayer';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0b0b1e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-900/10 blur-[100px] rounded-l-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary-900/10 blur-[100px] rounded-r-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="section-divider"></div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <ScrollReveal direction="left" className="md:w-1/3 flex justify-center">
            <ParallaxLayer speed={-0.05}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-72 h-80 rounded-2xl overflow-hidden glass-card p-2">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    alt="About Me"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gray-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl">
                    <div className="flex items-center gap-2">
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-xs font-medium text-white">Open to work</span>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="md:w-2/3">
            <div className="glass-card p-8 md:p-10 relative overflow-hidden group">
              {/* Subtle hover glow */}
              <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-5 group-hover:animate-shine" />

              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                Who am I?
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                <p>
                  Having over 4 years of experience in delivering IT solutions in
                  various capabilities to address key business opportunities under
                  challenging environments. Experienced in UI, Mobile App and
                  Website development technologies.
                </p>
                <p>
                  Responsible roles include Team Lead, Senior Developer to meet
                  changing business needs in the BFSI domain. Excellent
                  organizational, interpersonal, communication and analytical
                  skills. Excellent troubleshooting and self-learning capabilities.
                </p>
                <p>
                  Experience in managing APK/IPA file deployment in play/app store.
                  Good communication, leadership, well organized, goal oriented and
                  interpersonal skills with proven abilities in resolving UI issues.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: User, label: "Name", value: "Sagar Gupta" },
                  { icon: Mail, label: "Email", value: "guptasagar123@gmail.com" },
                  { icon: MapPin, label: "Location", value: "Pune Maharashtra, India" },
                  { icon: Briefcase, label: "Experience", value: "4+ Years" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center mr-4 text-primary-400">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</div>
                      <div className="text-sm font-medium text-white">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://drive.google.com/uc?export=download&id=13bM4ygCYtEABrLitSMcZ_oe6n9DMG5bo"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="SagarGupta_CV.pdf"
                  className="px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-1"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  <Download size={18} />
                  <span className="text-white">Download CV</span>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white hover:-translate-y-1"
                >
                  <Send size={18} className="text-primary-400" />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;