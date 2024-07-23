// components/AnimatedSection.jsx
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
