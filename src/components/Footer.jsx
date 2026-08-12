import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa';
import Scrool from './Scrool';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const socials = [
  { href: 'https://facebook.com/',     label: 'Facebook',  Icon: FaFacebookF,  color: 'hover:text-blue-500',   border: 'hover:border-blue-500/60',   shadow: 'hover:shadow-blue-500/40'   },
  { href: 'https://pk.linkedin.com/',  label: 'LinkedIn',  Icon: FaLinkedinIn, color: 'hover:text-sky-500',    border: 'hover:border-sky-500/60',    shadow: 'hover:shadow-sky-500/40'    },
  { href: 'https://www.youtube.com/',  label: 'YouTube',   Icon: FaYoutube,    color: 'hover:text-red-500',    border: 'hover:border-red-500/60',    shadow: 'hover:shadow-red-500/40'    },
  { href: 'https://www.instagram.com/',label: 'Instagram', Icon: FaInstagram,  color: 'hover:text-pink-500',   border: 'hover:border-pink-500/60',   shadow: 'hover:shadow-pink-500/40'   },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      name="Footer"
      className="relative w-full pt-20 pb-8 px-4 md:px-12 overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Soft gradient halos behind the footer */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full blur-3xl opacity-20 bg-cyan-500" />
        <div className="absolute -bottom-24 right-1/4 w-[420px] h-[420px] rounded-full blur-3xl opacity-20 bg-pink-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top: brand + tagline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <a
            href="#Home"
            className="inline-block text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Mudassir
            </span>
            <span className="opacity-70">.</span>
          </a>
          <p className="mt-3 text-sm sm:text-base max-w-xl mx-auto opacity-80">
            Full-Stack MERN Developer building scalable, AI-driven web experiences.
            Let&apos;s create something remarkable together.
          </p>
        </motion.div>

        {/* Social icons */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={1}
          className="flex items-center justify-center gap-3 mb-10"
        >
          {socials.map(({ href, label, Icon, color, border, shadow }) => (
            <motion.li
              key={label}
              whileHover={{ y: -4, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-base opacity-80 transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 ${color} ${border} hover:shadow-lg ${shadow}`}
              >
                <Icon />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Gradient divider */}
        <div className="relative h-px w-full mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>

        {/* Bottom row: copyright + back to top */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={3}
          className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-sm opacity-80"
        >
          <div className="text-center sm:text-left">
            <p>
              &copy; {year}{' '}
              <span className="font-semibold opacity-100">Mudassir</span>. All rights reserved.
            </p>
            <p className="mt-1 flex items-center justify-center sm:justify-start gap-1.5">
              Crafted with{' '}
              <FaHeart className="text-pink-500 animate-pulse" /> by{' '}
              <span className="font-semibold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                Mudassir
              </span>
            </p>
          </div>

          <a
            href="#Home"
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs font-semibold uppercase tracking-widest hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
          >
            <FaArrowUp className="group-hover:-translate-y-0.5 transition-transform" />
            Back to top
          </a>
        </motion.div>

        {/* Existing scroll helper kept as-is */}
        <div className="mt-6 flex justify-center">
          <Scrool />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
