import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import images
import virtual from '../img/e-2.png';
import ecommerce1 from '../img/e-1.png';
import ecommerce3 from '../img/e-3.png';
import myntra from '../img/myntra.png';
import next from '../img/next.png';

/* --- 3D TILT CARD WRAPPER --- */
const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative cursor-pointer transition-all duration-200 ${className}`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [theme] = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const isLight = theme === 'light';
  
  // Dynamic Styles
  const bgBase = isLight ? 'bg-gray-50' : '';
  const cardBg = isLight ? 'bg-white/90 border-gray-200' : 'bg-gray-800/80 border-gray-700';
  const textColor = isLight ? 'text-gray-9' : 'text-gray-100';
  const subText = isLight ? 'text-gray-600' : 'text-gray-400';
  const accentGradient = 'bg-gradient-to-r from-emerald-500 to-green-600';

  const projects = [
    {
      img: ecommerce3,
      title: "MERN E-Commerce Ecosystem",
      desc: "Production-grade platform with REST API, JWT auth, and complex MongoDB relationships. Handles real-time inventory and payments.",
      tech: ["MongoDB", "Express", "React", "Node", "Redux"],
      projectLink: "https://e-commerce-frontend-gray-ten.vercel.app/",
      codeLink: "https://github.com/Mudassir-ahmad551080/E-Commerce",
    },
    {
      img: next,
      title: "Next.js Storefront",
      desc: "High-performance SSR application. Features optimized images, SEO best practices, and a modern UI built with Tailwind CSS.",
      tech: ["Next.js", "Tailwind", "SSR", "Vercel"],
      projectLink: "https://next-app-six-iota.vercel.app/",
      codeLink: "https://github.com/Mudassir-ahmad551080/Next-app"
    },
    {
      img: myntra,
      title: "Myntra Clone",
      desc: "Pixel-perfect clone featuring complex DOM manipulation, local storage persistence, and dynamic cart calculation logic.",
      tech: ["JavaScript", "HTML5", "CSS3", "DOM"],
      projectLink: "https://myntra-clone-flame-eight.vercel.app/index.html",
      codeLink: "https://github.com/Mudassir-ahmad551080/myntra-clone"
    },
    {
      img: ecommerce1,
      title: "React E-Commerce",
      desc: "A client-centric shopping platform focusing on component reusability, state management with Context API, and fluid animations.",
      tech: ["React.js", "Context API", "CSS Modules"],
      projectLink: "https://e-com-xi-black.vercel.app/",
      codeLink: "https://github.com/Mudassir-ahmad551080/E-Com"
    },
    {
      img: virtual,
      title: "AI Voice Assistant",
      desc: "Futuristic voice-controlled assistant capable of web navigation and basic commands, engineered using the Web Speech API.",
      tech: ["Vanilla JS", "Web Speech API", "Voice UI"],
      projectLink: "https://virtual-assistan.netlify.app/",
      codeLink: "https://github.com/Mudassir-ahmad551080/assistant"
    }
  ];

  return (
    <div name="Projects" className={`w-full min-h-screen py-24 px-4 md:px-12 relative overflow-hidden `}>
      
      {/* Background Decor (Glow) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className={`absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-green-500`} />
        <div className={`absolute bottom-20 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-blue-500`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          className="mb-24 text-center"
        >
          <h2 id={theme} className={`text-5xl md:text-6xl font-extrabold mb-6 tracking-tight `}>
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Work</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${subText}`}>
             Exploring the intersection of design and engineering through full-stack applications.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-32">
          
          {/* --- PROJECTS LOOP --- */}
          {projects.map((project, index) => {
            // Zig-Zag Logic: Swap order for odd numbers
            const isEven = index % 2 === 0;

            return (
              <TiltCard key={index} className="perspective-1000">
                <motion.div 
                   id={theme}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.7 }}
                   className={`group relative rounded-3xl border shadow-2xl overflow-hidden backdrop-blur-md `}
                >
                  <div className="flex flex-col lg:flex-row h-full">
                    
                    {/* IMAGE SECTION 
                       Conditional Class: 'lg:order-last' pushes image to right on odd rows 
                    */}
                    <div className={`lg:w-3/5 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-last' : ''}`}>
                       
                       {/* Isometric Image Effect */}
                       <motion.img 
                        id={theme}
                        src={project.img}
                        alt={project.title}
                        className={`
                          w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
                          transform transition-all duration-700 ease-out 
                          lg:rotate-x-6 lg:scale-95 lg:group-hover:rotate-0 lg:group-hover:scale-100
                          ${isEven ? 'lg:rotate-y-15' : 'lg:-rotate-y-15'} 
                        `}
                      />
                    </div>

                    {/* INFO SECTION */}
                    <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative z-20">
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-12 h-1 bg-green-500 rounded-full"></span>
                        <span className="text-green-500 font-bold tracking-widest uppercase text-xs">Project {index + 1}</span>
                      </div>
                      
                      <h3 className={`text-3xl lg:text-4xl font-bold mb-4 `}>{project.title}</h3>
                      <p className={`text-lg leading-relaxed mb-8 `}>{project.desc}</p>
                      
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tech.map((tech, i) => (
                          <span key={i} className={`px-4 py-1.5 text-xs font-bold rounded-full border shadow-sm ${isLight ? 'border-gray-300 bg-white text-gray-700' : 'border-gray-600 bg-gray-800 text-gray-300'}`}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <a href={project.projectLink} target="_blank" rel="noreferrer"
                           className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-green-500/30 hover:scale-105 transition-transform ${accentGradient}`}>
                           <FaExternalLinkAlt /> Live Demo
                        </a>
                        <a href={project.codeLink} target="_blank" rel="noreferrer"
                           className={`flex items-center gap-2 px-8 py-4 border rounded-xl font-bold transition-all hover:bg-gray-100 dark:hover:bg-gray-800`}>
                           <FaGithub /> Source Code
                        </a>
                      </div>

                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;