import React from 'react';
import { motion, Variants } from 'framer-motion';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'blur';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const getVariants = (direction: RevealDirection): Variants => {
  const hidden: Record<string, unknown> = { opacity: 0 };
  const visible: Record<string, unknown> = { opacity: 1 };

  switch (direction) {
    case 'up':
      hidden.y = 60;
      visible.y = 0;
      break;
    case 'down':
      hidden.y = -60;
      visible.y = 0;
      break;
    case 'left':
      hidden.x = -80;
      visible.x = 0;
      break;
    case 'right':
      hidden.x = 80;
      visible.x = 0;
      break;
    case 'zoom':
      hidden.scale = 0.8;
      visible.scale = 1;
      break;
    case 'blur':
      hidden.filter = 'blur(10px)';
      visible.filter = 'blur(0px)';
      break;
  }

  return { hidden, visible };
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  threshold = 0.2,
}) => {
  const variants = getVariants(direction);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
