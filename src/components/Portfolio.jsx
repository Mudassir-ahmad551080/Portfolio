import React from 'react';
import mongodb from '../img/mongo.png.svg';
import reactLogo from '../img/react.png.png';
import Redux from '../img/redux.png';
import node from '../img/node.png';
import express from '../img/express.png';
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
            img: mongodb,
            title: "MongoDb",
            desc: "This is small project i will make this in html css and javascript.",
            projectLink: "https://virtual-assistan.netlify.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/assistant"
        },
        {
            img: reactLogo,
            title: "React.Js",
            desc: "This is E-Commerce project i will make this in React js .",
            projectLink: "https://e-com-xi-black.vercel.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/E-Com"
        },
        {
            img: express,
            title: "Express",
            desc: "I will make this project in html css and Es6 Javascript.",
            projectLink: "https://myntra-clone-flame-eight.vercel.app/index.html",
            codeLink: "https://github.com/Mudassir-ahmad551080/myntra-clone"
        },
        {
            img: Redux,
            title: "Redux",
            desc: "I will make this project in Next.js. and Tailwind css",
            projectLink: "https://next-app-six-iota.vercel.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/Next-app"
        },
        {
            img: node,
            title: "Node.Js",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
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
                        className='bg-yellow-50 border rounded-md hover:bg-black hover:text-white 
                                   cursor-pointer shadow-md hover:scale-105 duration-300 
                                   h-auto w-72 md:w-78 p-5 mt-10'
                        style={{ transformStyle: "preserve-3d" }}
                        whileHover={{
                            rotateY: 10,
                            rotateX: 5,
                            scale: 1.05,
                            transition: { duration: 0.4 }
                        }}
                    >
                        <img
                            className='w-20 h-20 animate-pulse transition-all rounded-md'
                            src={project.img}
                            alt={project.title}
                        />
                        <h1 className='font-bold text-xl font-sans'>{project.title}</h1>
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
