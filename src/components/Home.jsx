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
            // FIX: Force transparent background so stars show through
            style={{ backgroundColor: 'transparent' }}
            className='p-3 w-full flex md:flex-row flex-col'
        >
            {/* LEFT SIDE TEXT */}
            <div
                ref={refText}
                className='h-auto mt-12 md:mt-36 md:order-1 order-2 max-w-3xl m-2 md:ml-20 space-y-1'
            >
                <motion.h2
                    className='text-xl font-semibold'
                    initial={{ opacity: 0, y: 20 }}
                    animate={inViewText ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    Welcome In My Feed
                </motion.h2>

                <motion.h1
                    className='text-2xl font-bold space-x-1'
                    initial={{ opacity: 0, y: 20 }}
                    animate={inViewText ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Hello, I&apos;m
                    <ReactTyped
                        className='ml-2 text-cyan-400'
                        strings={["Programmer", "Developer", "Coder", "Full Stack developer", "MERN stack Developer"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </motion.h1>

                <motion.p
                    className='mt-5 text-justify'
                    initial={{ opacity: 0, y: 20 }}
                    animate={inViewText ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    As a Full-Stack MERN Developer, I engineer scalable, AI-driven web applications that transform complex business needs into high-performance solutions. I architect robust systems—from intuitive React frontends to secure Node.js backends. By leveraging JavaScript-based Generative AI, Docker containerization, and Kubernetes orchestration, I deliver intelligent, production-ready ecosystems designed for dynamic scaling and automated deployment.
                </motion.p>

                <motion.div
                    className='mt-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={inViewText ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <ResumeButton />
                </motion.div>

                {/* SOCIAL + TECH ICONS */}
                <div
                    ref={refIcons}
                    className='flex  text-center  justify-between mt-10 items-center flex-col md:flex-row'
                >
                    <div className='space-y-1 text-center'>
                        <h1 className='text-xl font-bold'>Available On</h1>
                        <div id='icon' className='flex space-x-2 flex-wrap'>
                            {socialLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    custom={index}
                                    variants={iconVariants}
                                    initial="hidden"
                                    animate={inViewIcons ? "visible" : "hidden"}
                                    className='list-none'
                                >
                                    <a href={link.href} target='_blank' rel="noopener noreferrer">
                                        <img
                                            src={link.src}
                                            alt={link.alt}
                                            className={`w-10 h-10 rounded-full hover:scale-110 duration-200 object-cover ${link.alt === 'GitHub' ? 'p-1' : ''} ${theme === 'dark' && link.alt === 'GitHub' ? 'invert' : ''}`}
                                        />
                                    </a>
                                </motion.li>
                            ))}
                        </div>
                    </div>
                    <div className='md:mt-1  md:mb-1 mt-7'>
                        <h1 className='font-bold'>Currently Working On</h1>
                        <div id='for-image-icon' className='flex  space-x-3 flex-wrap'>
                            {techIcons.map((src, index) => (
                                <motion.img
                                    key={index}
                                    custom={index}
                                    variants={iconVariants}
                                    initial="hidden"
                                    animate={inViewIcons ? "visible" : "hidden"}
                                    src={src}
                                    alt={`tech-${index}`}
                                    className='w-8 h-8  hover:scale-110 duration-200 cursor-pointer'
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
                className='md:mt-24 md:ml-20 md:order-2 order-1 m-4 mt-20 flex justify-center items-center'
            >
                {/* Clean Ring Container */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
                    {/* White Border Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-white/50"></div>
                    {/* Image Container */}
                    <div className="absolute inset-1 rounded-full overflow-hidden bg-black">
                        <motion.img
                            id={theme}
                            className="w-full h-full object-cover"
                            src='https://ik.imagekit.io/njsyfvk79/ChatGPT%20Image%2024%20Apr%202026,%2014_43_41.png'
                            alt="profile"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={inViewImage ? { scale: 1, opacity: 1 } : {}}
                            transition={{ duration: 1.5, type: "spring" }}
                        />
                    </div>
                    {/* Subtle Glow */}
                    <div className="absolute -inset-2 rounded-full bg-white opacity-10 blur-xl"></div>
                </div>
            </div>
            <Chatbot/>
        </div>
    );
};

export default Home;