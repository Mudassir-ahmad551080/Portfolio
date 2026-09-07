import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

// Professional ring cursor: a tiny inner dot + an outer ring that smoothly
// follows the mouse. The ring expands and dims when hovering over interactive
// elements (links, buttons, project cards, etc.).
const SnakeCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [theme] = useTheme();

  useEffect(() => {
    // Skip on touch-only devices.
    if (window.matchMedia('(hover: none)').matches) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    // Target positions for the ring (lagged) and dot (snapped to mouse).
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    // Hover state — toggled by detecting interactive elements under the cursor.
    let isHovering = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Snap the inner dot to the real cursor position so it feels precise.
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      // Check whether the element under the cursor is interactive.
      const el = e.target;
      const interactive = el.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]'
      );
      const next = !!interactive;
      if (next !== isHovering) {
        isHovering = next;
        document.body.classList.toggle('cursor-hover', isHovering);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // Hide the system cursor only while this component is mounted.
    document.body.classList.add('cursor-snake');

    // Render loop — eases the ring toward the mouse. The dot is already
    // snapped to the mouse in the move handler.
    let rafId = 0;
    const tick = () => {
      // Lerp factor: lower = laggier, higher = snappier. 0.18 feels smooth
      // and professional without being sluggish.
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.body.classList.remove('cursor-snake');
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  // Ring color follows the theme. We pass it as a CSS var so the CSS rule
  // can pick it up without us re-rendering the whole DOM tree on theme change.
  const ringColor = theme === 'dark' ? '#ffffff' : '#111111';
  const dotColor = theme === 'dark' ? '#ffffff' : '#111111';

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="cursor-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 30,
          height: 30,
          border: `1.5px solid ${ringColor}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition:
            'width 0.25s ease, height 0.25s ease, background-color 0.25s ease, border-color 0.25s ease, opacity 0.25s ease',
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          backgroundColor: dotColor,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default SnakeCursor;
