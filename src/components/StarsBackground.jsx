// components/StarBackground.jsx
import React, { useEffect, useRef } from 'react';

const StarBackground = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    const stars = [];
    const numStars = 200;
    const mouse = { x: width / 2, y: height / 2 };

    // Set colors based on theme
    // If theme is 'light', bg is white and stars are black
    // If theme is 'dark', bg is black and stars are white
    const isDark = theme === 'dark'; 
    const backgroundColor = isDark ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)';
    const starColor = isDark ? 'white' : 'black';

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Draw Background
      ctx.fillStyle = backgroundColor; 
      ctx.fillRect(0, 0, width, height);

      // Draw Stars
      ctx.fillStyle = starColor;
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.speedX;
        star.y += star.speedY;

        const moveX = (mouse.x - width / 2) * 0.005;
        const moveY = (mouse.y - height / 2) * 0.005;

        star.x += moveX;
        star.y += moveY;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [theme]); // Re-run this effect whenever 'theme' changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default StarBackground;