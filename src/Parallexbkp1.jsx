import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./index.css";

// Custom hook for parallax effect
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Image component
function Image({ id, isInView }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section ref={ref}>
      <div>
        <img src={`/${id}.jpg`} alt={`A London skyscraper ${id}`} />
      </div>
      {isInView && (
        <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
      )}
    </section>
  );
}

// Main App component
export default function Parallex() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Animating text size based on scroll position in normal section
  const textSize = useTransform(scrollYProgress, [0, 0.5], ["1rem", "10rem"]);

  return (
    <>
      {/* Normal Section with Text Size Animation */}
      <section className="normal-section">
        <motion.h1 style={{ fontSize: textSize }}>
          Welcome to the Website
        </motion.h1>
        <p>This section has no scroll animation.</p>
      </section>

      {/* Parallax Section */}
      <div ref={ref}>
        {[1, 2, 3, 4, 5].map((image) => (
          <Image key={image} id={image} isInView={true} />
        ))}
      </div>

      {/* Another Normal Section */}
      <section className="normal-section">
        <h1>Another Section</h1>
        <p>This section also has no scroll animation.</p>
      </section>

      {/* Progress bar for scroll feedback (optional) */}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
