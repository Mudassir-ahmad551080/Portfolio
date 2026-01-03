import React from 'react';
import virtual from '../img/e-2.png';
import ecommerce1  from '../img/e-1.png';
import ecommerce3 from '../img/e-3.png';
import myntra from '../img/myntra.png';
import next from '../img/next.png';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
    const [theme] = useTheme();

    const cardVariants = {
        hidden: { opacity: 0, rotateY: -30, scale: 0.9 },
        visible: i => ({
            opacity: 1,
            rotateY: 0,
            scale: 1,
            transition: {
                delay: i * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 80
            }
        })
    };

    const projects = [
        {
            img: virtual,
            title: "Virtual Assistant",
            desc: "Voice-controlled virtual assistant using HTML, CSS, and JS.",
            projectLink: "https://virtual-assistan.netlify.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/assistant"
        },
        {
            img: ecommerce1,
            title: "E-Commerce-react",
            desc: "Fully functional eCommerce web app using React.js.",
            projectLink: "https://e-com-xi-black.vercel.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/E-Com"
        },
        {
            img: myntra,
            title: "myntra",
            desc: "Myntra Clone with dark/light mode and dynamic cart.",
            projectLink: "https://myntra-clone-flame-eight.vercel.app/index.html",
            codeLink: "https://github.com/Mudassir-ahmad551080/myntra-clone"
        },
        {
            img: next,
            title: "E-commerce-next",
            desc: "Next.js and Tailwind CSS project.",
            projectLink: "https://next-app-six-iota.vercel.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/Next-app"
        },
        {
            img: ecommerce3,
            title: "E-Commerce-MERN",
            desc: "Full Stack Ecommerce Real world Project in MERN Stack.",
            projectLink: "https://e-commerce-frontend-gray-ten.vercel.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/E-Commerce"
        }
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.15
    });

    return (
        <div
            id={theme}
            name='Portfolio'
            // FIX: Ensure container is transparent so stars show
            style={{ backgroundColor: 'transparent' }}
            className='p-10 mx-auto container flex flex-col gap-10 md:px-20 relative z-10'
        >
            <div className='space-y-1 ml-20 md:ml-0'>
                <h1 className='text-2xl font-bold'>Portfolio</h1>
                <span className='underline font-bold'>Feature Project</span>
            </div>

            <div
                ref={ref}
                className='w-full flex flex-wrap justify-center md:gap-10 items-center'
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        // FIX: Logic for dynamic card colors
                        className={`border rounded-md cursor-pointer shadow-md hover:scale-105 duration-300 h-auto w-80 md:w-120 p-5 mt-10 backdrop-blur-sm
                            ${theme === 'ligth' 
                                ? 'bg-white/80 text-black border-gray-200' 
                                : 'bg-zinc-900/80 text-white border-zinc-700 hover:bg-zinc-800'
                            }`}
                        style={{ transformStyle: "preserve-3d" }}
                        whileHover={{
                            rotateY: 10,
                            rotateX: 5,
                            scale: 1.05,
                            transition: { duration: 0.4 }
                        }}
                    >
                        <img
                            className='w-full h-40 transition-all rounded-md object-cover'
                            src={project.img}
                            alt={project.title}
                        />
                        <h1 className='font-bold mt-2 text-xl font-sans'>{project.title}</h1>
                        <p className='mt-2 opacity-90'>{project.desc}</p>
                        <div className='flex space-x-4 mt-5 flex-wrap'>
                            {project.projectLink && (
                                <a
                                    href={project.projectLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='bg-green-500 hover:bg-green-600 px-3 py-1 text-white rounded-md font-bold transition-colors'
                                >
                                    Project
                                </a>
                            )}
                            {project.codeLink && (
                                <a
                                    href={project.codeLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='bg-red-500 hover:bg-red-600 px-3 py-1 text-white rounded-md font-bold transition-colors'
                                >
                                    Source Code
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;