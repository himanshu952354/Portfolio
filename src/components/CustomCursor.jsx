import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Detect touch/coarse-pointer devices (mobile phones, tablets)
const isTouchDevice = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

export default function CustomCursor({ isHoveringRing, isHoveringMenu, menuPosition }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isTouch] = useState(() => isTouchDevice());
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Don't attach any mouse listeners on touch devices
    if (isTouch) return;

    const moveCursor = (e) => {
      if (isHoveringMenu && menuPosition) {
        const strength = 0.4; // Magnetic Pull coefficient (elastic limits multiplier)
        const pullX = menuPosition.x + (e.clientX - menuPosition.x) * strength;
        const pullY = menuPosition.y + (e.clientY - menuPosition.y) * strength;
        cursorX.set(pullX - 20);
        cursorY.set(pullY - 20);
      } else {
        cursorX.set(e.clientX - 20);
        cursorY.set(e.clientY - 20);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'IMG') {
        setIsHoveringImage(true);
      } else {
        setIsHoveringImage(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isTouch, isHoveringMenu, menuPosition]);

  // Hide the default cursor when this component is active (mouse devices only)
  useEffect(() => {
    if (isTouch) return; // Never hide cursor on touch devices

    document.body.style.cursor = 'none';

    // Select all interactive elements
    const styleLinksAndButtons = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"], img');
      interactiveElements.forEach(el => {
        el.style.cursor = 'none';
      });
    }

    styleLinksAndButtons();
    // Run again slightly after mount to catch dynamically rendered items
    const timeout = setTimeout(styleLinksAndButtons, 500);

    return () => {
      document.body.style.cursor = 'auto';
      clearTimeout(timeout);
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"], img');
      interactiveElements.forEach(el => {
        el.style.cursor = 'auto';
      });
    };
  }, [isTouch]);

  // Render nothing on touch/mobile devices
  if (isTouch) return null;

  return (
    <motion.div
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'white',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        scale: isHoveringMenu ? 1.6 : (isHoveringRing ? 0 : (isHoveringImage ? 2.5 : 1)),
      }}
      transition={{ duration: 0.2 }}
    />
  );
}
