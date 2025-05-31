import React from 'react'
import pic from '../../public/react.png'
import second from '../../public/node.png'
import third from '../../public/express.png'
import forth from '../../public/mongo.png.svg'
import hacker from '../../public/pic.jpg'
import facebook from '../../public/icon/facebook.jpg'
import linkdin from '../../public/icon/linkdin.jpg'
import youtube from '../../public/icon/youtube.jpg'
import instagram from '../../public/icon/instagram.jpg'
import { ReactTyped, Typed } from "react-typed";
import picture from "../../public/name.jpg";
import face from '../../public/icon/facebook.jpg'
import logo from '../../public/name.png'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
const Home = () => {
    const [theme] = useTheme();
    const techIcons = [pic, second, third, forth];
    const socialLinks = [
        { href: "https://facebook.com/", src: facebook, alt: "Facebook" },
        { href: "https://pk.linkedin.com/", src: linkdin, alt: "LinkedIn" },
        { href: "https://www.youtube.com/", src: youtube, alt: "YouTube" },
        { href: "https://www.instagram.com/", src: instagram, alt: "Instagram" },
    ];

    const IconVariants = {
        hidden: { opacity: 0, y: 20 },
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
    const iconVariants = {
        hidden: { opacity: 0, y: 20 },
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
    return (
        <>
            <div name='Home' id={theme} className=' p-3 w-full flex md:flex-row flex-col'>
                <div className=' h-auto mt-12 md:mt-36 mt-16 md:order-1 order-2  max-w-150 h-96  m-2 md:ml-20 space-y-1' >
                    <motion.h2 className='text-xl opacity-0 font-semibold'
                        animate={{ y: 4, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}

                    >Welcome In My, Feed</motion.h2>
                    <motion.h1 className='text-2xl font-bold space-x-1 opacity-0'
                        animate={{ y: 4, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                    >Hello, I'am
                        <ReactTyped
                            className='ml-2 text-red-600'
                            strings={["Programmer", "Developer", "Coder", 'Web Designer']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </motion.h1>
                    <div className=' mt-5'>
                        <motion.p className='text-justify opacity-0'
                            animate={{ y: 4, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1.5 }}
                        >As a seasoned MERN stack developer, I possess a strong proficiency in designing, developing, and deploying scalable, efficient, and secure web applications. With a keen eye for detail and a passion for staying up-to-date with the latest industry trends, I deliver high-quality solutions that meet and exceed client expectations.
                        </motion.p>
                    </div>
                    <div className='flex  justify-between space-y-6 md:space-y-0 items-center flex-col md:flex-row'>
                        <div className='mt-10 space-y-1 text-center'>
                            <h1 className='text-xl font-bold'>Available On</h1>
                            <div id='icon' className='flex space-x-2 flex-wrap'>
                                {socialLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        custom={index}
                                        variants={iconVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className='font-bold cursor-pointer list-none'
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
                        <div className=' mt-4 md:mt-8 space-y-2'>
                            <h1 className='font-bold'>Current Working On</h1>
                            <div id='for-image-icon' className='flex space-x-3 flex-wrap'>
                                {techIcons.map((src, index) => (
                                    <motion.img
                                        key={index}
                                        custom={index}
                                        variants={iconVariants}
                                        initial="hidden"
                                        animate="visible"
                                        src={src}
                                        alt={`tech-${index}`}
                                        className='w-8 h-8 hover:scale-110 duration-200 cursor-pointer'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div id='img-div' className='md:mt-25 md:ml-32 md:order-2 order-1  m-8  mt-28 bottom-0 rounded-full flex'>
                    <motion.img
                        id="hacker"
                        className="md:w-[400px] w-full object-cover w-[300px] h-[300px] rounded-full mb-0 md:h-[400px]"
                        src={logo}
                        alt="profile"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 2, type: "spring" }}
                    />
                </div>
            </div>

        </>
    )
}

export default Home