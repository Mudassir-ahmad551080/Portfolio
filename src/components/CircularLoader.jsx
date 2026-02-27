import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CircularLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const steps = 100;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep += 1;
      setProgress(currentStep);

      if (currentStep >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 500); // Small delay before hiding
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Calculate circle properties
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
    >
      <div className="relative">
        {/* Background Circle */}
        <svg width="160" height="160" className="transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#a3e635" // lime-400
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.03s linear',
            }}
          />
        </svg>
        
        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-white">
            {progress}
            <span className="text-2xl text-lime-400">%</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CircularLoader;