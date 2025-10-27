import React from 'react';
import virtual from '../img/e-2.png';
import ecommerce1  from '../img/e-1.png';
import ecommerce3 from '../img/e-3.png';
import myntra from '../img/myntra.png';
import next from '../img/next.png';
import resume from '../img/resume.png'
import { useTheme } from '../context/ThemeContext';
import { m, motion } from 'framer-motion';
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
            desc: "I developed a voice-controlled virtual assistant using HTML, CSS, and JavaScript. It recognizes user commands to open websites like YouTube or Google and answers general questions using speech recognition and dynamic search integration.",
            projectLink: "https://virtual-assistan.netlify.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/assistant"
        },
        {
            img: ecommerce1,
            title: "E-Commerce-react",
            desc: "I built a fully functional eCommerce web app using React.js featuring product listings, responsive design, smooth scroll animations, and a beautiful UI. Users can view product details, add or remove items from the cart, and see updated totals dynamically.",
            projectLink: "https://e-com-xi-black.vercel.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/E-Com"
        },
        {
            img: myntra,
            title: "myntra",
            desc: "I created a Myntra Clone using modern web technologies with a beautiful, responsive UI. It includes dark and light mode functionality, allowing users to add or remove products from the cart and view the total dynamically.",
            projectLink: "https://myntra-clone-flame-eight.vercel.app/index.html",
            codeLink: "https://github.com/Mudassir-ahmad551080/myntra-clone"
        },
        {
            img: next,
            title: "E-commerce-next",
            desc: "I will make this project in Next.js. and Tailwind css",
            projectLink: "https://next-app-six-iota.vercel.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/Next-app"
        },
        {
            img: ecommerce3,
            title: "E-Commerce-MERN",
            desc: "This is the Full Stack Ecommerce Real world Project in MERN Stack",
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
            className='p-10 mx-auto container flex flex-wrap gap-10 md:px-20'
        >
            <div id={theme} className='space-y-1 ml-20 md:ml-0'>
                <h1 className='text-2xl font-bold'>Portfolio</h1>
                <span className='underline font-bold'>Feature Project</span>
            </div>

            <div
            id={theme}
                ref={ref}
                className='w-full flex flex-wrap justify-center md:gap-10 items-center'
            >
                {projects.map((project, index) => (
                    <motion.div
                    id={theme}
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className='bg-yellow-50 hover:shadow-[0_0_10px_10px_rgba(0,255,255,0.3)] border rounded-md hover:bg-black hover:text-white 
                                   cursor-pointer shadow-md hover:scale-105 duration-300 
                                   h-auto w-80 md:w-120 p-5 mt-10'
                        style={{ transformStyle: "preserve-3d" }}
                        whileHover={{
                            rotateY: 10,
                            rotateX: 5,
                            scale: 1.05,
                            transition: { duration: 0.4 }
                        }}
                    >
                        <img
                            className='w-full h-40   transition-all rounded-md'
                            src={project.img}
                            alt={project.title}
                        />
                        <h1 className='font-bold mt-2 text-xl font-sans'>{project.title}</h1>
                        <p className='mt-2'>{project.desc}</p>
                        <div className='flex space-x-4 mt-5 flex-wrap'>
                            {project.projectLink && (
                                <a
                                    href={project.projectLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='bg-green-400 px-3 py-1 text-white rounded-md font-black'
                                >
                                    Project
                                </a>
                            )}
                            {project.codeLink && (
                                <a
                                    href={project.codeLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='bg-red-500 px-3 py-1 text-white rounded-md font-black'
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
