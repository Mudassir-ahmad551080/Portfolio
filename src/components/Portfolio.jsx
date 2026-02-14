import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

// Import images (ensure paths are correct for your setup)
import virtual from '../img/e-2.png';
import ecommerce1 from '../img/e-1.png';
import ecommerce3 from '../img/e-3.png';
import myntra from '../img/myntra.png';
import next from '../img/next.png';

const Portfolio = () => {
    const [theme] = useTheme();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const projects = [
        {
            img: ecommerce3, // Moved MERN to the top as the "Featured" project
            title: "MERN Stack E-Commerce Ecosystem",
            desc: "A comprehensive, production-grade E-commerce solution. This platform features a custom-built REST API, secure JWT authentication, and a dynamic frontend. It handles real-time inventory updates, complex database relationships with MongoDB, and provides a seamless user experience across all devices.",
            projectLink: "https://e-commerce-frontend-gray-ten.vercel.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/E-Commerce",
            featured: true
        },
        {
            img: next,
            title: "Next.js Storefront",
            desc: "High-performance web application utilizing Next.js server-side rendering and Tailwind CSS.",
            projectLink: "https://next-app-six-iota.vercel.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/Next-app"
        },
        {
            img: myntra,
            title: "Myntra Clone",
            desc: "Pixel-perfect clone featuring dark/light mode switching and dynamic cart management.",
            projectLink: "https://myntra-clone-flame-eight.vercel.app/index.html",
            codeLink: "https://github.com/Mudassir-ahmad551080/myntra-clone"
        },
        {
            img: ecommerce1,
            title: "React E-Commerce",
            desc: "A fully functional eCommerce web application featuring cart logic built with React.js.",
            projectLink: "https://e-com-xi-black.vercel.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/E-Com"
        },
        {
            img: virtual,
            title: "Virtual Assistant",
            desc: "Voice-controlled virtual assistant engineered using HTML, CSS, and vanilla JS.",
            projectLink: "https://virtual-assistan.netlify.app/",
            codeLink: "https://github.com/Mudassir-ahmad551080/assistant"
        }
    ];

    const isLight = theme === 'light';
    const cardBg = isLight ? 'bg-white/90 border-gray-200' : 'bg-gray-900/80 border-gray-700';
    const textColor = isLight ? 'text-gray-900' : 'text-white';
    const subText = isLight ? 'text-gray-600' : 'text-gray-400';

    return (
        <div name="Projects" className="w-full min-h-screen py-20 px-4 md:px-12 relative z-10">
            <div className="max-w-screen-xl mx-auto">
                
                {/* Section Title */}
                <div className="mb-16">
                    <h2 className={`text-4xl font-bold inline border-b-4 border-green-500 ${textColor}`}>
                        Featured Work
                    </h2>
                </div>

                <div ref={ref} className="space-y-12">
                    {projects.map((project, index) => (
                        project.featured ? (
                            /* --- FULL WIDTH FEATURED PROJECT --- */
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8 }}
                                className={`group overflow-hidden rounded-2xl border shadow-2xl ${cardBg}`}
                            >
                                <div className="flex flex-col lg:flex-row">
                                    {/* Project Image */}
                                    <div className="lg:w-3/5 overflow-hidden">
                                        <img 
                                            src={project.img} 
                                            alt={project.title} 
                                            className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    {/* Project Info */}
                                    <div className="p-8 lg:w-2/5 flex flex-col justify-center">
                                        <span className="text-green-500 font-bold tracking-widest uppercase text-sm mb-2">Selected Project</span>
                                        <h3 className={`text-3xl font-bold mb-4 ${textColor}`}>{project.title}</h3>
                                        <p className={`text-lg leading-relaxed mb-6 ${subText}`}>
                                            {project.desc}
                                        </p>
                                        <div className="flex gap-4">
                                            <a href={project.projectLink} target="_blank" rel="noreferrer" 
                                               className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-green-900/20">
                                                Live Preview
                                            </a>
                                            <a href={project.codeLink} target="_blank" rel="noreferrer"
                                               className={`px-6 py-3 border rounded-lg font-bold transition-all ${isLight ? 'border-gray-900 text-gray-900 hover:bg-gray-100' : 'border-gray-500 text-white hover:bg-gray-800'}`}>
                                                Source Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : null
                    ))}

                    {/* --- SMALLER GRID PROJECTS --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projects.filter(p => !p.featured).map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.1 }}
                                className={`rounded-xl border shadow-md flex flex-col overflow-hidden ${cardBg} hover:shadow-green-500/10 transition-shadow`}
                            >
                                <img src={project.img} className="h-48 w-full object-cover" alt={project.title} />
                                <div className="p-6">
                                    <h4 className={`text-xl font-bold mb-2 ${textColor}`}>{project.title}</h4>
                                    <p className={`text-sm mb-6 ${subText}`}>{project.desc}</p>
                                    <div className="flex gap-3">
                                        <a href={project.projectLink} target="_blank" rel="noreferrer" className="text-green-500 font-bold hover:underline">Demo</a>
                                        <span className="text-gray-500">|</span>
                                        <a href={project.codeLink} target="_blank" rel="noreferrer" className="text-red-500 font-bold hover:underline">Code</a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;