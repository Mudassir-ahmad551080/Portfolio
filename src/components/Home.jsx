import React from 'react';
import pic from '../../public/react.png';
import second from '../../public/node.png';
import third from '../../public/express.png';
import forth from '../../public/mongo.png.svg';
import facebook from '../../public/icon/facebook.jpg';
import linkdin from '../../public/icon/linkdin.jpg';
import youtube from '../../public/icon/youtube.jpg';
import instagram from '../../public/icon/instagram.jpg';
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useInView } from 'react-intersection-observer';

const Home = () => {
    const [theme] = useTheme();
    const techIcons = [pic, second, third, forth];
    const socialLinks = [
        { href: "https://facebook.com/", src: facebook, alt: "Facebook" },
        { href: "https://pk.linkedin.com/", src: linkdin, alt: "LinkedIn" },
        { href: "https://www.youtube.com/", src: youtube, alt: "YouTube" },
        { href: "https://www.instagram.com/", src: instagram, alt: "Instagram" },
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
        <div name='Home' id={theme} className='p-3 w-full flex md:flex-row flex-col'>
            {/* LEFT SIDE TEXT */}
            <div 
                ref={refText} 
                className='h-auto mt-12 md:mt-36 md:order-1 order-2 max-w-150 m-2 md:ml-20 space-y-1'
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
                        className='ml-2 text-purple-700'
                        strings={["Programmer", "Developer", "Coder", "Full Stack developer","Generative AI developer"]}
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
                   a seasoned MERN stack developer, I possess a strong proficiency in designing, developing, and deploying scalable, efficient, and secure web applications. With a keen eye for detail and a passion for staying up-to-date with the latest industry trends, I deliver high-quality solutions that meet and exceed client expectations.
                </motion.p>

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
                                            className='w-10 h-10 rounded-full hover:scale-110 duration-200'
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
                className='md:mt-25 md:ml-32 md:order-2 order-1 m-8 mt-28 flex'
            >
                <motion.img
                    id="hacker"
                    className="md:w-[500px] bg-fixed w-full object-cover w-[300px] h-[300px] rounded-full mb-0 md:h-[400px]"
                    src='./mudassir.png'
                    alt="profile"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inViewImage ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.5, type: "spring" }}
                />
            </div>
        </div>
    );
};

export default Home;
