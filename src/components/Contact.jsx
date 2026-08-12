import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import logo from '../../public/logo.gif';
import facebook from '../../public/icon/facebook.jpg';
import linkdin from '../../public/icon/linkdin.jpg';
import youtube from '../../public/icon/youtube.jpg';
import instagram from '../../public/icon/instagram.jpg';

const FORM_ENDPOINT = 'https://getform.io/f/agdldjpb';

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com/', icon: facebook },
  { name: 'LinkedIn', url: 'https://pk.linkedin.com/', icon: linkdin },
  { name: 'YouTube', url: 'https://www.youtube.com/', icon: youtube },
  { name: 'Instagram', url: 'https://www.instagram.com/', icon: instagram },
];

function Contact() {
  const [theme] = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.length < 5) newErrors.name = "Name must be at least 5 characters.";
    if (formData.message.length < 20) newErrors.message = "Message must be at least 20 characters.";
    if (!formData.email.includes('@')) newErrors.email = "Please enter a valid email address.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post(FORM_ENDPOINT, formData);
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isMobile = windowSize.width < 768;

  return (
    <section id="Contact" className={`w-full py-20 px-4 relative overflow-hidden min-h-screen flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-zinc-950' : 'bg-gray-50'}`}>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16 z-10"
      >
        <h2 id={theme} className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg opacity-80">Have a question or want to work together?</p>
      </motion.div>

      <div className="relative w-full max-w-6xl h-[800px] flex items-center justify-center">

        {/* Central Form Hub */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          viewport={{ once: true }}
          className="relative z-20 w-full max-w-[500px] p-1 rounded-2xl bg-gradient-to-br from-lime-400 to-green-600 shadow-2xl"
        >
          <div className={`p-8 rounded-2xl transition-all duration-300 ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className="text-center mb-6">
              {logo && <img src={logo} alt="Logo" className="w-12 h-12 mx-auto mb-2 object-contain" />}
              <h3 className="text-xl font-bold">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-xs font-semibold mb-1 opacity-70" htmlFor="name">Name</label>
                <input
                  id="name" name="name" type="text" value={formData.name} onChange={handleChange}
                  placeholder="John Doe"
                  className={`p-2 rounded-lg border bg-transparent outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-lime-500'}`}
                />
                {errors.name && <span className="text-red-500 text-[10px]">{errors.name}</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-semibold mb-1 opacity-70" htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                  placeholder="john@example.com"
                  className={`p-2 rounded-lg border bg-transparent outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-lime-500'}`}
                />
                {errors.email && <span className="text-red-500 text-[10px]">{errors.email}</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-semibold mb-1 opacity-70" htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows="3" value={formData.message} onChange={handleChange}
                  placeholder="How can I help you?"
                  className={`p-2 rounded-lg border bg-transparent outline-none transition-all resize-none ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-lime-500'}`}
                />
                {errors.message && <span className="text-red-500 text-[10px]">{errors.message}</span>}
              </div>
              <button
                type="submit" disabled={isSubmitting}
                className={`w-full py-2 rounded-lg text-white font-bold transition-all duration-300 ${isSubmitting ? 'bg-gray-500' : 'bg-lime-500 hover:bg-lime-600 shadow-lg hover:shadow-lime-500/30'}`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Social Network Graph */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            {socialLinks.map((social, i) => {
              const angle = (i / socialLinks.length) * 2 * Math.PI - Math.PI / 2;
              const radius = isMobile ? 280 : 400;
              const x2 = Math.cos(angle) * radius;
              const y2 = Math.sin(angle) * radius;

              return (
                <motion.line
                  key={social.name}
                  x1="50%" y1="50%"
                  x2={`calc(50% + ${x2}px)`} y2={`calc(50% + ${y2}px)`}
                  stroke={theme === 'dark' ? 'rgba(163,230,53,0.2)' : 'rgba(77,124,15,0.2)'}
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                />
              );
            })}
          </svg>

          {socialLinks.map((social, i) => {
            const angle = (i / socialLinks.length) * 2 * Math.PI - Math.PI / 2;
            const radius = isMobile ? 280 : 400;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute pointer-events-auto"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  width: '60px',
                  height: '60px'
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  scale: { type: 'spring', stiffness: 260, damping: 20, delay: 0.3 + i * 0.1 },
                  y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }
                }}
                viewport={{ once: true }}
              >
                <div className={`w-full h-full rounded-full flex items-center justify-center border-2 transition-all duration-300 hover:scale-110 shadow-lg ${
                  theme === 'dark'
                  ? 'bg-zinc-800 border-zinc-700 hover:border-lime-400'
                  : 'bg-white border-gray-300 hover:border-lime-500'
                }`}>
                  <img src={social.icon} alt={social.name} className="w-8 h-8 rounded-full object-cover" />
                </div>
                <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${
                  theme === 'dark' ? 'bg-zinc-700 text-white' : 'bg-gray-200 text-gray-800'
                }`}>
                  {social.name}
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Contact;
