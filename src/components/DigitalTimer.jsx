import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const DigitalTimer = () => {
  const [time, setTime] = useState(new Date());
  const [theme] = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <div className={`group flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-500
      ${theme === 'ligth'
        ? 'bg-white/50 border-gray-200 text-gray-800 shadow-sm hover:shadow-md hover:border-blue-300'
        : 'bg-zinc-900/80 border-zinc-700 text-zinc-100 shadow-xl hover:shadow-blue-900/20 hover:border-blue-500/50'}`}
    >
      <div className="relative">
        <Clock size={16} className={`transition-colors duration-300 ${theme === 'ligth' ? 'text-blue-600' : 'text-blue-400'} group-hover:rotate-12`} />
        <div className={`absolute inset-0 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${theme === 'ligth' ? 'bg-blue-400' : 'bg-blue-600'}`} />
      </div>
      <span className="font-mono text-xs md:text-sm font-bold tracking-tight tabular-nums">
        {formatTime(time)}
      </span>
    </div>
  );
};

export default DigitalTimer;
