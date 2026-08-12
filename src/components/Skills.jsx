import React, { useState } from 'react';
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
  SiMongodb
} from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-500" /> },
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
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
              stroke={
                theme === 'dark'
                  ? (isHighlighted ? '#a3e635' : 'rgba(163,230,53,0.2)')
                  : (isHighlighted ? '#4d7c0f' : 'rgba(77,124,15,0.2)')
              }
              strokeWidth={isHighlighted ? 1 : 0.5} // Adjusted for 100x100 viewBox
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
            />
          );
        })}
      </svg>

      {/* Center Hub */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-20 h-20 md:w-24 md:h-24 z-10"
        style={{ x: '-50%', y: '-50%' }} // Safely center with framer-motion
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        viewport={{ once: true }}
      >
        <div 
          id={theme} 
          className={`w-full h-full rounded-full flex items-center justify-center text-center p-2 font-bold text-xs md:text-sm shadow-2xl border-2 transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-zinc-900 border-lime-400 text-lime-400 shadow-lime-400/20'
              : 'bg-white border-lime-600 text-lime-600 shadow-lime-600/10'
          }`}
        >
          {category.category}
        </div>
      </motion.div>

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
              transform: 'translate(-50%, -50%)', // Standard CSS centering
              width: '48px',
              height: '48px',
            }}
          >
            {/* Inner motion div handles animation without breaking absolute positioning */}
            <motion.div
              onMouseEnter={() => setHoveredSkill(nodeId)}
              onMouseLeave={() => setHoveredSkill(null)}
              id={theme}
              className={`w-full h-full rounded-full flex items-center justify-center text-xl md:text-2xl transition-all duration-300 cursor-pointer shadow-lg border-2 ${
                theme === 'dark'
                  ? 'bg-zinc-800 border-zinc-700 text-white hover:border-lime-400 hover:shadow-lime-400/30 hover:scale-110'
                  : 'bg-gray-100 border-gray-300 text-gray-800 hover:border-lime-600 hover:shadow-lime-600/30 hover:scale-110'
              }`}
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
              className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 ${
                theme === 'dark' ? 'bg-zinc-700 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {skill.name}
            </div>
          </div>
        );
      })}
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
          className="text-center mb-16 md:mb-24"
        >
          <h2 id={theme} className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            A full stack toolset for building scalable, responsive, and performant web applications.
          </p>
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