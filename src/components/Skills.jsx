import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiKubernetes,
  SiLangchain
} from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Redis", icon: <SiRedis /> },
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "LangChain", icon: <SiLangchain /> },
    ]
  }
];

// Helper component for each independent skill cluster
const SkillCluster = ({ category, theme, hoveredSkill, setHoveredSkill }) => {
  const N = category.skills.length;
  const radius = 38; // Percentage distance from the center
  const center = 50; // Center of the container

  return (
    <div className="relative w-full max-w-[320px] aspect-square mx-auto">
      {/* Rotating orbit layer — holds the SVG lines + icons and spins as one circle */}
      <div className="absolute inset-0 group/orbit animate-orbit hover:[animation-play-state:paused]">
      {/* SVG Connections Layer */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        style={{ overflow: 'visible' }}
      >
        {category.skills.map((_, i) => {
          const angle = (i / N) * 2 * Math.PI - Math.PI / 2; // Start from top
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          const nodeId = `${category.category}-${i}`;
          const isHighlighted = hoveredSkill === nodeId;

          return (
            <motion.line
              key={nodeId}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke={isHighlighted ? 'var(--accent-primary)' : 'var(--border-default)'}
              strokeWidth={isHighlighted ? 1 : 0.5}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
            />
          );
        })}
      </svg>

      {/* Skill Nodes */}
      {category.skills.map((skill, i) => {
        const angle = (i / N) * 2 * Math.PI - Math.PI / 2;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        const nodeId = `${category.category}-${i}`;

        return (
          <div
            key={nodeId}
            className="absolute group"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              width: '48px',
              height: '48px',
            }}
          >
            {/* Counter-rotation wrapper keeps the icon + tooltip upright while orbiting */}
            <div className="w-full h-full animate-orbit-reverse group-hover/orbit:[animation-play-state:paused]">
            {/* Inner motion div handles animation without breaking absolute positioning */}
            <motion.div
              id={theme}
              className='w-full h-full rounded-full flex items-center justify-center text-xl md:text-2xl transition-all duration-300 cursor-pointer shadow-lg'
              style={{
                border: '2px solid var(--border-default)',
                backgroundColor: 'var(--surface-2)',
                color: 'var(--text-primary)'
              }}
              onMouseEnter={(e) => {
                setHoveredSkill(nodeId);
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                setHoveredSkill(null);
                e.currentTarget.style.borderColor = 'var(--border-default)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              animate={{ y: [0, -6, 0] }} // Floating animation
              transition={{
                scale: { type: 'spring', stiffness: 260, damping: 20, delay: i * 0.1 },
                y: {
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              viewport={{ once: true }}
            >
              {skill.icon}
            </motion.div>

            {/* Tooltip */}
            <div
              className='absolute top-full mt-3 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20'
              style={{
                backgroundColor: 'var(--surface-3)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-default)'
              }}
            >
              {skill.name}
            </div>
            </div>
          </div>
        );
      })}
      </div>

      {/* Center Hub — stays outside the rotating layer so its text stays upright */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-20 h-20 md:w-24 md:h-24 z-10"
        style={{ x: '-50%', y: '-50%' }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        viewport={{ once: true }}
      >
        <div
          id={theme}
          className='w-full h-full rounded-full flex items-center justify-center text-center p-2 font-bold text-xs md:text-sm shadow-2xl transition-all duration-300'
          style={{
            border: '2px solid var(--accent-primary)',
            backgroundColor: 'var(--surface-1)',
            color: 'var(--accent-primary)',
            boxShadow: '0 0 20px var(--accent-glow)'
          }}
        >
          {category.category}
        </div>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const [theme] = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="Skills"
      className="py-20 relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h2 id={theme} className="text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{
                  color: 'var(--text-primary)',
                  lineHeight: '1.1'
                }}>
              Technical <span className="gradient-text inline-block">Skills</span>
            </h2>
            <div className="mt-6 h-1 w-24 rounded-full"
                 style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }} />
            <p className="mt-8 text-lg leading-relaxed"
               style={{
                 color: 'var(--text-secondary)',
                 maxWidth: '42rem',
                 textAlign: 'center'
               }}>
              A full stack toolset for building scalable, responsive, and performant web applications.
            </p>
          </div>
        </motion.div>

        {/* Responsive Grid Layout for Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-12">
          {skillsData.map((category, index) => (
            <SkillCluster
              key={index}
              category={category}
              theme={theme}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
