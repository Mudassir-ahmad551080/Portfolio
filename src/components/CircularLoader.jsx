import React, { useEffect, useState, useRef } from 'react';

const CircularLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  const DURATION = 2200; // ms for 0→100

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const raw = Math.min((elapsed / DURATION) * 100, 100);

      // Ease-in-out-cubic
      const t = raw / 100;
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const value = Math.round(eased * 100);

      setProgress(value);

      if (raw < 100) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setTimeout(() => {
          setVisible(false);
          if (onComplete) onComplete();
        }, 450);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  if (!visible) return null;

  // SVG circle params
  const SIZE = 160;
  const STROKE = 5;
  const RADIUS = (SIZE - STROKE * 2) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  const isComplete = progress === 100;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#09090b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: isComplete ? 'opacity 0.45s ease, transform 0.45s ease' : 'none',
        opacity: isComplete ? 0 : 1,
        transform: isComplete ? 'scale(1.04)' : 'scale(1)',
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(163,230,53,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(163,230,53,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      {/* Outer glow ring */}
      <div
        style={{
          position: 'relative',
          width: SIZE + 40,
          height: SIZE + 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            width: SIZE + 20,
            height: SIZE + 20,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(163,230,53,${progress / 700}) 0%, transparent 70%)`,
            transition: 'background 0.1s',
            filter: 'blur(12px)',
          }}
        />

        {/* SVG Arc */}
        <svg
          width={SIZE}
          height={SIZE}
          style={{ transform: 'rotate(-90deg)', position: 'relative', zIndex: 2 }}
        >
          {/* Track */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={STROKE}
          />
          {/* Progress arc */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="#a3e635"
            strokeWidth={STROKE}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.05s linear',
              filter: 'drop-shadow(0 0 6px rgba(163,230,53,0.7))',
            }}
          />
        </svg>

        {/* Number in center */}
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            zIndex: 3,
          }}
        >
          <span
            style={{
              color: '#a3e635',
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
              textShadow: '0 0 20px rgba(163,230,53,0.5)',
              minWidth: 56,
              textAlign: 'center',
            }}
          >
            {progress}
          </span>
          <span
            style={{
              color: 'rgba(163,230,53,0.45)',
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            %
          </span>
        </div>
      </div>

      {/* Label */}
      <div
        style={{
          marginTop: 28,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <span
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 11,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          {isComplete ? 'Ready' : 'Loading'}
        </span>

        {/* Animated dots */}
        {!isComplete && (
          <div style={{ display: 'flex', gap: 5, marginTop: 2 }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  backgroundColor: '#a3e635',
                  display: 'inline-block',
                  animation: `pulse-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
                  opacity: 0.3,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
};

export default CircularLoader;