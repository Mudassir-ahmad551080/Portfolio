import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
    }),
};

const About = () => {
    const [theme] = useTheme();

    const skills = [
        'MongoDB', 'Express.js', 'React', 'Node.js',
        'JavaScript', 'TypeScript', 'Tailwind CSS', 'Docker',
        'Kubernetes', 'REST APIs', 'Git', 'AI Integration',
    ];

    const capabilities = [
        'Full MERN Stack Development',
        'Responsive Web Design & UI/UX',
        'RESTful API Design & Integration',
        'Database Modeling (NoSQL / MongoDB)',
        'Agile Development Methodologies',
        'Front-end & Back-end Architecture',
    ];

    return (
        <div
            id={theme}
            name='About'
            className='w-full py-20'
            style={{ backgroundColor: 'transparent' }}
        >
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>

                {/* --- Header --- */}
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className='pb-8'
                >
                    <p className='text-sm font-semibold tracking-[0.2em] uppercase opacity-70'>
                        Get to know me
                    </p>
                    <h2 className='mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight'>
                        About
                        <span className='ml-3 bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 bg-clip-text text-transparent'>
                            Me
                        </span>
                    </h2>
                    <div className='mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500' />

                    <p className='mt-6 text-lg sm:text-xl leading-relaxed max-w-3xl opacity-90'>
                        Hello! I&apos;m <span className='font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent'>Mudassir</span>,
                        a Full Stack Developer currently pursuing a BS in Software Engineering.
                        I specialize in turning creative ideas into robust, production-ready code.
                    </p>

                    {/* University badge */}
                    <div className='mt-5 inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg'>
                        <span className='inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 text-white font-bold'>
                            U
                        </span>
                        <p className='font-semibold italic'>
                            University of{' '}
                            <span className='text-red-500 not-italic font-bold'>I</span>slamia{' '}
                            <span className='text-red-500 not-italic font-bold'>C</span>ollege{' '}
                            <span className='text-green-500 not-italic font-bold'>P</span>eshawar
                        </p>
                    </div>
                </motion.div>

                {/* --- Main Grid --- */}
                <div className='grid md:grid-cols-2 gap-8 mt-6'>

                    {/* Left Column */}
                    <div className='space-y-8'>

                        {/* Education card */}
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={1}
                            className='group relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-cyan-500/20'
                        >
                            <span className='absolute -top-3 left-6 px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-white shadow-md'>
                                Education
                            </span>
                            <h3 className='text-2xl font-bold mt-2 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent'>
                                BS in Software Engineering
                            </h3>
                            <p className='text-sm mt-1 opacity-75'>
                                Islamia College Peshawar • Class of 2026
                            </p>
                            <div className='mt-4 grid sm:grid-cols-2 gap-4'>
                                <div>
                                    <p className='font-semibold flex items-center gap-2'>
                                        <span className='h-1.5 w-1.5 rounded-full bg-cyan-400' />
                                        Coursework
                                    </p>
                                    <p className='text-sm mt-1 opacity-80'>
                                        Data Structures, Algorithms, Computer Systems, Web Development, Database Systems.
                                    </p>
                                </div>
                                <div>
                                    <p className='font-semibold flex items-center gap-2'>
                                        <span className='h-1.5 w-1.5 rounded-full bg-pink-400' />
                                        Key Projects
                                    </p>
                                    <p className='text-sm mt-1 opacity-80'>
                                        Developed multiple software projects, including a web-based application using the MERN stack.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Professional Summary card */}
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={2}
                            className='relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-indigo-500/20'
                        >
                            <span className='absolute -top-3 left-6 px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md'>
                                Summary
                            </span>
                            <h3 className='text-2xl font-bold mt-2'>Professional Summary</h3>
                            <p className='mt-3 text-justify leading-relaxed opacity-90'>
                                As a seasoned MERN stack developer, I possess a strong proficiency in
                                designing, developing, and deploying scalable, efficient, and secure
                                web applications. With a keen eye for detail and a passion for staying
                                up-to-date with the latest industry trends, I deliver high-quality
                                solutions that meet and exceed client expectations.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className='space-y-8'>

                        {/* Skills card */}
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={3}
                            className='relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:shadow-pink-500/20'
                        >
                            <span className='absolute -top-3 left-6 px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md'>
                                Tech Stack
                            </span>
                            <h3 className='text-2xl font-bold mt-2'>Technical Skills</h3>
                            <ul className='mt-4 flex flex-wrap gap-2'>
                                {skills.map((s, i) => (
                                    <motion.li
                                        key={s}
                                        custom={i}
                                        initial='hidden'
                                        whileInView='visible'
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        className='px-3 py-1.5 text-sm font-semibold rounded-full border border-white/15 bg-white/5 hover:scale-105 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 cursor-default'
                                    >
                                        {s}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Capabilities card */}
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={4}
                            className='relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-emerald-500/20'
                        >
                            <span className='absolute -top-3 left-6 px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md'>
                                Capabilities
                            </span>
                            <h3 className='text-2xl font-bold mt-2'>Development Capabilities</h3>
                            <ul className='mt-4 space-y-2.5'>
                                {capabilities.map((c) => (
                                    <li key={c} className='flex items-start gap-3'>
                                        <span className='mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-white text-[10px] font-bold'>
                                            ✓
                                        </span>
                                        <span className='opacity-90'>{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
