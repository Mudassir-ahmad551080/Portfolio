import React from 'react';
import pic from '../../public/react.png';
import second from '../../public/node.png';
import third from '../../public/express.png';
import forth from '../../public/mongo.png.svg';
import linkdin from '../../public/icon/linkdin.jpg';
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useInView } from 'react-intersection-observer';

import Chatbot from './Chatbot';
import ResumeButton from './ResumeButton';
import './Home.css';

const Home = () => {
    const [theme] = useTheme();
    const techIcons = [forth, third, pic, second];
    const socialLinks = [
        { href: "https://github.com/Mudassir-ahmad551080", src: "https://cdn-icons-png.flaticon.com/512/25/25231.png", alt: "GitHub" },
        { href: "https://www.linkedin.com/in/codebymudassir/", src: linkdin, alt: "LinkedIn" },
    ];

    const iconVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                type: "spring"
            }
        })
    };

    // Intersection Observer Hook for triggering animations
    const [refText, inViewText] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refIcons, inViewIcons] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refImage, inViewImage] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div
            name='Home'
            id={theme}
            // Keep background transparent so the star field shows through
            style={{ backgroundColor: 'transparent' }}
            className='home-section p-3 w-full'
        >
            <div className='home-inner'>

                {/* LEFT SIDE TEXT */}
                <div
                    ref={refText}
                    className='home-text-col h-auto m-2 space-y-1'
                >
                    {/* Status pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={inViewText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className='mb-4'
                    >
                        <span className='status-pill'>
                            <span className='dot' />
                            Available for new opportunities
                        </span>
                    </motion.div>

                    <motion.h2
                        className='home-greeting'
                        initial={{ opacity: 0, y: 20 }}
                        animate={inViewText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        Welcome to my portfolio
                    </motion.h2>

                    <motion.h1
                        className='home-title'
                        initial={{ opacity: 0, y: 20 }}
                        animate={inViewText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <span className='name-static'>Hello, I&apos;m Mudassir — a</span>
                        <ReactTyped
                            className='gradient-text'
                            strings={["Programmer", "Developer", "Coder", "Full Stack Developer", "MERN Stack Developer"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                            cursorClassName='home-typed-cursor'
                        />
                    </motion.h1>

                    <motion.p
                        className='home-description'
                        initial={{ opacity: 0, y: 20 }}
                        animate={inViewText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        As a Full-Stack MERN Developer, I engineer scalable, AI-driven web
                        applications that transform complex business needs into high-performance
                        solutions. I architect robust systems — from intuitive React frontends to
                        secure Node.js backends. By leveraging JavaScript-based Generative AI,
                        Docker containerization, and Kubernetes orchestration, I deliver
                        intelligent, production-ready ecosystems designed for dynamic scaling
                        and automated deployment.
                    </motion.p>

                    <motion.div
                        className='home-cta-row'
                        initial={{ opacity: 0, y: 20 }}
                        animate={inViewText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <ResumeButton />
                        <a href='#Contact' className='home-secondary-btn'>
                            Get in touch
                            <span aria-hidden>→</span>
                        </a>
                    </motion.div>

                    {/* SOCIAL + TECH ICONS */}
                    <div
                        ref={refIcons}
                        className='home-social-block'
                    >
                        <div className='home-social-group'>
                            <p className='label'>Available on</p>
                            <ul id='icon' className='home-icon-list'>
                                {socialLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        custom={index}
                                        variants={iconVariants}
                                        initial="hidden"
                                        animate={inViewIcons ? "visible" : "hidden"}
                                    >
                                        <a
                                            href={link.href}
                                            target='_blank'
                                            rel="noopener noreferrer"
                                            aria-label={link.alt}
                                            className='home-icon-link'
                                        >
                                            <img
                                                src={link.src}
                                                alt={link.alt}
                                                className={`${theme === 'dark' && link.alt === 'GitHub' ? 'invert' : ''}`}
                                            />
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className='home-social-group'>
                            <p className='label'>Currently working with</p>
                            <div id='for-image-icon' className='home-icon-list'>
                                {techIcons.map((src, index) => (
                                    <motion.img
                                        key={index}
                                        custom={index}
                                        variants={iconVariants}
                                        initial="hidden"
                                        animate={inViewIcons ? "visible" : "hidden"}
                                        src={src}
                                        alt={`tech-${index}`}
                                        className='home-tech-icon'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div
                    ref={refImage}
                    id='img-div'
                    className='home-image-col'
                >
                    <div className="avatar-wrap">
                        {/* Ambient glow */}
                        <div className="avatar-glow" />
                        {/* Animated gradient ring */}
                        <div className="avatar-ring" />
                        {/* Image */}
                        <motion.div
                            id={theme}
                            className="avatar-inner"
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={inViewImage ? { scale: 1, opacity: 1 } : {}}
                            transition={{ duration: 1.4, type: "spring" }}
                        >
                            <img
                                src='https://ik.imagekit.io/njsyfvk79/ChatGPT%20Image%2024%20Apr%202026,%2014_43_41.png'
                                alt="Mudassir — Full Stack MERN Developer"
                            />
                        </motion.div>

                        {/* Floating accent badges */}
                        <span className="avatar-badge b1">
                            <span className="emoji">⚡</span> MERN Stack
                        </span>
                        <span className="avatar-badge b2">
                            <span className="emoji">🤖</span> AI-Driven
                        </span>
                        <span className="avatar-badge b3">
                            <span className="emoji">🚀</span> DevOps
                        </span>
                    </div>
                </div>
            </div>

            <Chatbot />
        </div>
    );
};

export default Home;

