import React from 'react';
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 } 
  }
};

const Skills = () => {
  // 1. Hook moved INSIDE the component
  const [theme] = useTheme();

  return (
    // 2. Applied id={theme} to the main wrapper
    // This allows you to style children using CSS like: #dark h2 { color: white; }
    <section name='Skills'  className="py-20 ">
      <div className="max-w-7xl bg-transparent mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id={theme} className="text-3xl md:text-4xl font-bold  mb-4">
            Technical Skills
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            A full stack toolset for building scalable, responsive, and performant web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div id={theme} className="grid   grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div 
             id={theme}
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white  rounded-2xl p-6 shadow-xl border border-gray-100  hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 id={theme} className="text-xl font-bold text-gray-800  mb-6 border-b pb-2 border-gray-200 ">
                {category.category}
              </h3>
              
              <div id={theme} className="grid  grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    id={theme} 
                    key={skillIndex}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-2 rounded-lg  transition-colors cursor-default"
                  >
                    <div id={theme} className="text-2xl">
                      {skill.icon}
                    </div>
                    <span id={theme} className="font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;