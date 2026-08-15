import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import images
import virtual from '../img/e-2.png';
import ecommerce1 from '../img/e-1.png';
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
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`relative cursor-pointer transition-all duration-200 ${className}`}
    >
      <div style={{ transform: 'translateZ(50px)' }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
  }),
};

// Per-project gradient palette (image halo + accent ring + CTA)
const palette = [
  { ring: 'from-cyan-400 to-indigo-500',  img: 'from-cyan-500/20 to-indigo-500/20',  text: 'text-cyan-400',    cta: 'from-cyan-500 to-indigo-600',  shadow: 'shadow-cyan-500/30',    accent: 'bg-cyan-400'    },
  { ring: 'from-pink-400 to-rose-500',    img: 'from-pink-500/20 to-rose-500/20',    text: 'text-pink-400',    cta: 'from-pink-500 to-rose-600',    shadow: 'shadow-pink-500/30',    accent: 'bg-pink-400'    },
  { ring: 'from-emerald-400 to-green-500',img: 'from-emerald-500/20 to-green-500/20',text: 'text-emerald-400', cta: 'from-emerald-500 to-green-600',shadow: 'shadow-emerald-500/30', accent: 'bg-emerald-400' },
  { ring: 'from-violet-400 to-purple-500',img: 'from-violet-500/20 to-purple-500/20',text: 'text-violet-400',  cta: 'from-violet-500 to-purple-600',shadow: 'shadow-violet-500/30',  accent: 'bg-violet-400'  },
  { ring: 'from-amber-400 to-orange-500', img: 'from-amber-500/20 to-orange-500/20', text: 'text-amber-400',   cta: 'from-amber-500 to-orange-600', shadow: 'shadow-amber-500/30',   accent: 'bg-amber-400'   },
  { ring: 'from-sky-400 to-blue-500',     img: 'from-sky-500/20 to-blue-500/20',     text: 'text-sky-400',     cta: 'from-sky-500 to-blue-600',     shadow: 'shadow-sky-500/30',     accent: 'bg-sky-400'     },
];

const Portfolio = () => {
  const [theme] = useTheme();
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      img: 'https://ik.imagekit.io/njsyfvk79/resume.PNG',
      title: 'AI-Driven Resume Builder, Resume Analyzer & Interview Prep Platform',
      desc: 'A full-stack intelligent career platform built with the MERN stack and Generative AI. Features include AI-powered resume generation with real-time feedback, ATS score analysis, tailored job description matching, and an AI interview coach with dynamic Q&A sessions — all designed to help users land their dream job faster.',
      tech: ['Generative AI', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Groq SDK', 'Tailwind CSS', 'REST API', 'JWT Auth'],
      projectLink: 'https://resume-frontend-psi-one.vercel.app',
      codeLink: 'https://github.com/Mudassir-ahmad551080/Ai-Driven-Resume-Builder-Software',
    },
    {
      img: 'https://ik.imagekit.io/njsyfvk79/codereview.PNG',
      title: 'AI-Powered Code-Review Tool',
      desc: 'A full-stack AI-powered code-review platform built with the MERN stack and Generative AI. Features include AI-powered code analysis with real-time feedback, code quality score analysis, tailored code improvement suggestions, and an AI code optimization coach with dynamic Q&A sessions — all designed to help developers write better code faster.',
      tech: ['Generative AI', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Groq SDK', 'Tailwind CSS', 'REST API'],
      projectLink: 'https://code-review-one-liard.vercel.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/Ai-Powered-CodeReview-Tool',
    },
    {
      img: 'https://ik.imagekit.io/njsyfvk79/blog.PNG',
      title: 'Full-Stack Blog Application',
      desc: 'A full-stack blog platform built with the MERN stack featuring user authentication, blog creation, commenting, and publishing workflows. Users can sign up, create and publish their own blog posts, and engage with the community through comments — designed to deliver a smooth and responsive writing experience.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'Tailwind CSS', 'REST API', 'Vibe Coding'],
      projectLink: 'https://app-dq2ir91oeuwx.appmedo.com/',
      codeLink: 'https://github.com/Mudassir-ahmad551080',
    },
    {
      img: 'https://ik.imagekit.io/njsyfvk79/ecommerce.PNG',
      title: 'MERN E-Commerce Ecosystem',
      desc: 'Production-grade platform with REST API, JWT auth, and complex MongoDB relationships. Handles real-time inventory and payments.',
      tech: ['MongoDB', 'Express', 'React', 'Node', 'Redux', 'Tailwind CSS'],
      projectLink: 'https://e-commerce-frontend-gray-ten.vercel.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/E-Commerce',
    },
    {
      img: next,
      title: 'Next.js Storefront',
      desc: 'High-performance SSR application. Features optimized images, SEO best practices, and a modern UI built with Tailwind CSS.',
      tech: ['Next.js', 'Tailwind', 'SSR', 'Vercel'],
      projectLink: 'https://next-app-six-iota.vercel.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/Next-app',
    },
    {
      img: ecommerce1,
      title: 'React E-Commerce',
      desc: 'A client-centric shopping platform focusing on component reusability, state management with Context API, and fluid animations.',
      tech: ['React.js', 'Context API', 'CSS Modules'],
      projectLink: 'https://e-com-xi-black.vercel.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/E-Com',
    },
    {
      img: virtual,
      title: 'AI Voice Assistant',
      desc: 'Futuristic voice-controlled assistant capable of web navigation and basic commands, engineered using the Web Speech API.',
      tech: ['Vanilla JS', 'Web Speech API', 'Voice UI'],
      projectLink: 'https://virtual-assistan.netlify.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/assistant',
    },
  ];

  return (
    <div
      id={theme}
      name="Projects"
      className="w-full py-24 px-4 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Background decor — soft blurred gradient halos */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 bg-cyan-500" />
        <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 bg-pink-500" />
        <div className="absolute -bottom-32 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-emerald-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase opacity-70">
            What I&apos;ve built
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500" />
          <p className="mt-5 text-lg max-w-2xl mx-auto opacity-80">
            Exploring the intersection of design and engineering through full-stack applications.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-28">

          {/* --- PROJECTS LOOP --- */}
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const p = palette[index % palette.length];

            return (
              <TiltCard key={index} className="perspective-1000">
                <motion.div
                  id={theme}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7 }}
                  className={`group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]`}
                >
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.ring}`} />

                  <div className="flex flex-col lg:flex-row h-full">

                    {/* IMAGE SECTION */}
                    <div
                      className={`lg:w-3/5 relative overflow-hidden bg-gradient-to-br ${p.img} p-6 sm:p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-last' : ''}`}
                    >
                      {/* Decorative grid dots */}
                      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] [background-size:18px_18px]" />

                      <motion.img
                        id={theme}
                        src={project.img}
                        alt={project.title}
                        className="relative w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 transform transition-all duration-700 ease-out lg:rotate-x-6 lg:scale-95 lg:group-hover:rotate-0 lg:group-hover:scale-100"
                        style={{
                          transformStyle: 'preserve-3d',
                          rotateY: isEven ? '15deg' : '-15deg',
                        }}
                      />
                    </div>

                    {/* INFO SECTION */}
                    <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative">

                      {/* Project label */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`w-10 h-1 rounded-full ${p.accent}`} />
                        <span className={`${p.text} font-bold tracking-widest uppercase text-xs`}>
                          Project {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-base leading-relaxed mb-8 opacity-85">
                        {project.desc}
                      </p>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-semibold rounded-full border border-white/15 bg-white/5 hover:scale-105 hover:border-white/30 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap gap-3 mt-auto">
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noreferrer"
                          className={`group/btn relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg ${p.shadow} bg-gradient-to-r ${p.cta} hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden`}
                        >
                          <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-white/20" />
                          <FaExternalLinkAlt className="relative" />
                          <span className="relative">Live Demo</span>
                        </a>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold border border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
                        >
                          <FaGithub />
                          Source Code
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
