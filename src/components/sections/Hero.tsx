import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #111827 40%, #1e1b4b 100%)',
      }}
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
            top: '10%',
            left: '15%',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            bottom: '20%',
            right: '10%',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
            top: '50%',
            left: '60%',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -20, 40, 0],
          }}
          transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            style={{ y: textY, opacity: textOpacity }}
          >
            {/* Greeting badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-gray-300">Available for work</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm{' '}
              <span
                className="gradient-text"
                style={{
                  textShadow: '0 0 40px rgba(99, 102, 241, 0.3)',
                }}
              >
                Sagar Gupta
              </span>
            </motion.h1>
            <motion.div
              className="typewriter text-2xl md:text-3xl mb-6 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              React Native Developer
            </motion.div>
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              With over 4+ years of experience building scalable web
              applications and digital experiences that users love.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative px-8 py-3.5 rounded-full font-medium cursor-pointer inline-block text-white overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)',
                }}
              >
                <span className="relative z-10">Hire Me</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
                  }}
                />
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-8 py-3.5 rounded-full font-medium cursor-pointer inline-block text-gray-300 hover:text-white transition-all duration-300 hover:border-primary-400"
                style={{
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  background: 'rgba(99, 102, 241, 0.05)',
                }}
              >
                View Work
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            style={{ y: imageY }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer orbit ring */}
              <motion.div
                className="absolute -inset-6 rounded-full"
                style={{
                  border: '1px solid rgba(99, 102, 241, 0.15)',
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                  style={{
                    background: '#6366f1',
                    boxShadow: '0 0 12px #6366f1',
                  }}
                />
              </motion.div>

              {/* Glow background */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25), transparent 70%)',
                  filter: 'blur(30px)',
                  transform: 'scale(1.3)',
                }}
              />

              <motion.img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Developer"
                className="relative w-full h-full rounded-full object-cover"
                style={{
                  border: '3px solid rgba(99, 102, 241, 0.4)',
                  boxShadow: '0 0 40px rgba(99, 102, 241, 0.2)',
                }}
                loading="lazy"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — animated mouse */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          style={{ opacity: textOpacity }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-6 h-10 rounded-full flex items-start justify-center p-1.5"
                style={{
                  border: '2px solid rgba(99, 102, 241, 0.4)',
                }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-primary-400"
                  animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                />
              </div>
              <motion.span
                className="text-xs text-gray-500 tracking-widest uppercase"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Scroll
              </motion.span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;