import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxLayerProps {
    children: React.ReactNode;
    speed?: number; // -1 to 1: negative = slower, positive = faster
    className?: string;
    direction?: 'vertical' | 'horizontal';
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
    children,
    speed = 0.3,
    className = '',
    direction = 'vertical',
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const range = speed * 150;
    const transform = useTransform(scrollYProgress, [0, 1], [-range, range]);

    const style =
        direction === 'vertical' ? { y: transform } : { x: transform };

    return (
        <div ref={ref} className={`relative overflow-x-clip ${className}`}>
            <motion.div style={style}>{children}</motion.div>
        </div>
    );
};

export default ParallaxLayer;
