import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';

interface Chapter {
    title: string;
    subtitle: string;
    description: string;
    period: string;
    lottieUrl: string;
    accentColor: string;
}

const chapters: Chapter[] = [
    {
        title: 'The Beginning',
        subtitle: 'Where It All Started',
        description:
            'Every great journey starts with curiosity. Mine began with writing my first lines of code — building small programs, breaking things, and learning from every error. That spark of creating something from nothing lit a fire that never went out.',
        period: '2019 – 2021',
        lottieUrl:
            'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json',
        accentColor: '#6366f1',
    },
    {
        title: 'First Steps',
        subtitle: 'Trainee at Mantra Labs',
        description:
            'Stepped into the professional world at Mantra Labs in Bangalore. Led UI development for hybrid apps, learned to translate business requirements into architecture documents, and built a strong foundation in React, React Native, HTML5, CSS3, and JavaScript ES6+.',
        period: 'Mar 2021 – Jun 2021',
        lottieUrl:
            'https://assets9.lottiefiles.com/packages/lf20_iorpbol0.json',
        accentColor: '#10b981',
    },
    {
        title: 'Building Confidence',
        subtitle: 'React Native Developer at Dev Story',
        description:
            'Became the offshore UI lead for Guard Tech, an American enterprise security app. Designed complex UI components, managed App Store & Play Store deployments, implemented push notifications with FCM, and optimized performance through lazy loading and code splitting.',
        period: 'Jun 2021 – Nov 2022',
        lottieUrl:
            'https://assets1.lottiefiles.com/packages/lf20_tno6cg2w.json',
        accentColor: '#8b5cf6',
    },
    {
        title: 'Leading the Way',
        subtitle: 'System Engineer at TCS × Toyota',
        description:
            'Joined TCS and took on the Toyota Financial Services engagement — a multi-tenant React Native app suite serving TFS, LFS, TCPR, MFS, and BPFS brands. Led frontend architecture, mentored junior developers, conducted code reviews, and managed deployment across multiple stores with monitoring via Dynatrace.',
        period: 'Jan 2023 – Present',
        lottieUrl:
            'https://assets3.lottiefiles.com/packages/lf20_v1yudlrx.json',
        accentColor: '#f59e0b',
    },
    {
        title: "What's Next",
        subtitle: 'The Future Awaits',
        description:
            'Continuing to push boundaries — exploring advanced architectures, contributing to open source, and building products that make a real impact. The journey is far from over; every day is a new chapter waiting to be written.',
        period: 'The Future',
        lottieUrl:
            'https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json',
        accentColor: '#ec4899',
    },
];

const Journey: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    // Map scroll progress to active chapter index
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            const index = Math.min(
                Math.floor(latest * chapters.length),
                chapters.length - 1
            );
            setActiveIndex(index);
        });
        return unsubscribe;
    }, [scrollYProgress]);

    // Timeline progress line
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    // Preload lottie data (Lottie JSON object)
    type LottieJson = object;
    const [lottieData, setLottieData] = useState<Record<number, LottieJson>>({});

    useEffect(() => {
        chapters.forEach((chapter, index) => {
            fetch(chapter.lottieUrl)
                .then((res) => res.json())
                .then((data: LottieJson) => {
                    setLottieData((prev) => ({ ...prev, [index]: data }));
                })
                .catch(() => {
                    // Silently fail — animation won't show
                });
        });
    }, []);

    return (
        <section
            id="journey"
            ref={sectionRef}
            className="relative bg-gray-900"
            style={{ height: `${chapters.length * 100}vh` }}
        >
            {/* Section header */}
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* Background glow */}
                <motion.div
                    className="absolute inset-0 opacity-20 transition-colors duration-700"
                    style={{
                        background: `radial-gradient(ellipse at 70% 50%, ${chapters[activeIndex].accentColor}44, transparent 70%)`,
                    }}
                />

                {/* Content container */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
                    {/* Title row — extra top padding to clear fixed navbar */}
                    <div className="pt-24 sm:pt-28 md:pt-32 pb-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            My <span className="gradient-text">Journey</span>
                        </h2>
                        <div className="section-divider" />
                    </div>

                    {/* Main content area */}
                    <div className="flex-1 flex items-center">
                        <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            {/* Left: Text panel */}
                            <div className="md:w-1/2 relative">
                                {/* Mini timeline */}
                                <div className="hidden md:flex absolute -left-12 top-0 bottom-0 flex-col items-center">
                                    <div className="relative w-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                            className="absolute top-0 left-0 w-full rounded-full"
                                            style={{
                                                height: lineHeight,
                                                background:
                                                    'linear-gradient(to bottom, #6366f1, #8b5cf6, #ec4899)',
                                            }}
                                        />
                                    </div>
                                </div>

                                {chapters.map((chapter, index) => (
                                    <motion.div
                                        key={index}
                                        className="absolute inset-0 flex flex-col justify-center"
                                        initial={false}
                                        animate={{
                                            opacity: activeIndex === index ? 1 : 0,
                                            y: activeIndex === index ? 0 : 30,
                                        }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                        style={{
                                            pointerEvents: activeIndex === index ? 'auto' : 'none',
                                        }}
                                    >
                                        <span
                                            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit"
                                            style={{
                                                backgroundColor: `${chapter.accentColor}22`,
                                                color: chapter.accentColor,
                                                border: `1px solid ${chapter.accentColor}44`,
                                            }}
                                        >
                                            {chapter.period}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                            {chapter.title}
                                        </h3>
                                        <p
                                            className="text-lg font-medium mb-4"
                                            style={{ color: chapter.accentColor }}
                                        >
                                            {chapter.subtitle}
                                        </p>
                                        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                            {chapter.description}
                                        </p>
                                    </motion.div>
                                ))}

                                {/* Invisible spacer so the container has height */}
                                <div className="invisible">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4">
                                        placeholder
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-2">
                                        placeholder
                                    </h3>
                                    <p className="text-lg font-medium mb-4">placeholder</p>
                                    <p className="text-base md:text-lg leading-relaxed">
                                        {chapters[0].description}
                                    </p>
                                </div>
                            </div>

                            {/* Right: Lottie animation */}
                            <div className="md:w-1/2 flex justify-center items-center">
                                <div className="relative w-72 h-72 md:w-96 md:h-96">
                                    {/* Glow ring */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full blur-2xl opacity-30 transition-colors duration-700"
                                        style={{ backgroundColor: chapters[activeIndex].accentColor }}
                                    />

                                    {chapters.map((_, index) => (
                                        <motion.div
                                            key={index}
                                            className="absolute inset-0 flex items-center justify-center"
                                            initial={false}
                                            animate={{
                                                opacity: activeIndex === index ? 1 : 0,
                                                scale: activeIndex === index ? 1 : 0.85,
                                            }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                        >
                                            {lottieData[index] ? (
                                                <Lottie
                                                    animationData={lottieData[index]}
                                                    loop
                                                    className="w-full h-full"
                                                />
                                            ) : (
                                                <div className="w-24 h-24 rounded-full border-4 border-gray-600 border-t-transparent animate-spin" />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chapter indicators */}
                    <div className="pb-8 flex justify-center gap-3">
                        {chapters.map((chapter, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 transition-all duration-300"
                            >
                                <div
                                    className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                                    style={{
                                        backgroundColor:
                                            index <= activeIndex
                                                ? chapter.accentColor
                                                : '#374151',
                                        transform:
                                            activeIndex === index ? 'scale(1.4)' : 'scale(1)',
                                        boxShadow:
                                            activeIndex === index
                                                ? `0 0 12px ${chapter.accentColor}`
                                                : 'none',
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Scroll indicator — animated mouse */}
                    <motion.div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <div
                            className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
                            style={{ borderColor: `${chapters[activeIndex].accentColor}66` }}
                        >
                            <motion.div
                                className="w-1 h-1 rounded-full"
                                style={{ backgroundColor: chapters[activeIndex].accentColor }}
                                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
