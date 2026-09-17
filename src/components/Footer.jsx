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
  { href: 'https://facebook.com/', label: 'Facebook', Icon: FaFacebookF, brand: '#1877f2' },
  { href: 'https://www.linkedin.com/in/codebymudassir/', label: 'LinkedIn', Icon: FaLinkedinIn, brand: '#0a66c2' },
  { href: 'https://www.youtube.com/', label: 'YouTube', Icon: FaYoutube, brand: '#ff0000' },
  { href: 'https://www.instagram.com/', label: 'Instagram', Icon: FaInstagram, brand: '#e1306c' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      name="Footer"
      className="relative w-full pt-20 pb-8 px-4 md:px-12 overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Soft accent halos behind the footer */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div
          className="absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        />
        <div
          className="absolute -bottom-24 right-1/4 w-[420px] h-[420px] rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: 'var(--accent-secondary)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top: brand + tagline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-10"
        >
          <a href="#Home" className="inline-block text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="gradient-text">Mudassir</span>
          </a>
          <p
            className="mt-4 text-sm sm:text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)', maxWidth: '34rem' }}
          >
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
          className="flex items-center justify-center gap-3 mb-10 list-none p-0"
        >
          {socials.map(({ href, label, Icon, brand }) => (
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md text-base transition-all duration-300"
                style={{
                  border: '1px solid var(--border-default)',
                  backgroundColor: 'var(--overlay-light)',
                  color: 'var(--text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = brand;
                  e.currentTarget.style.color = brand;
                  e.currentTarget.style.boxShadow = `0 8px 20px -8px ${brand}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-default)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--border-hover), transparent)',
          }}
        />

        {/* Bottom row: copyright + back to top */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={3}
          className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 text-sm"
        >
          <div className="text-center sm:text-left" style={{ color: 'var(--text-muted)' }}>
            <p>
              &copy; {year}{' '}
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                Mudassir
              </span>
              . All rights reserved.
            </p>
            <p className="mt-1.5 flex items-center justify-center sm:justify-start gap-1.5">
              Crafted with
              <FaHeart className="animate-pulse" style={{ color: '#ec4899' }} />
              by
              <span className="font-semibold gradient-text">Mudassir</span>
            </p>
          </div>

          <a
            href="#Home"
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md text-xs font-semibold uppercase tracking-widest transition-all duration-300"
            style={{
              border: '1px solid var(--border-default)',
              backgroundColor: 'var(--overlay-light)',
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
              e.currentTarget.style.color = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-default)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <FaArrowUp className="group-hover:-translate-y-0.5 transition-transform" />
            Back to top
          </a>
        </motion.div>

        {/* Existing scroll helper kept as-is */}
        <div className="mt-8 flex justify-center">
          <Scrool />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
