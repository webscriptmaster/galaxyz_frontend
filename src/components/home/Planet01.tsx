"use client";

import { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  onViewportEnter?: () => void;
  onAnimationComplete?: () => void;
}

export default function Planet01({
  onViewportEnter,
  onAnimationComplete
}: Props) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 1
  });
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage === 0) {
      controls.start({ y: 0, scale: 0.5 }, { duration: 1.5 });
    }
  }, []);

  useEffect(() => {
    if (stage === 1 && inView) {
      controls.start({ scale: 1, opacity: 1 }, { duration: 1 });
    }

    if (stage === 1 && !inView) {
      controls.start({ opacity: 0.5 }, { duration: 1 });
    }
  }, [stage, inView]);

  return (
    <motion.div
      className="px-4 pt-16"
      initial={stage === 0 ? { y: 200, scale: 0.5 } : false}
      animate={controls}
      onViewportEnter={() => {
        if (typeof onViewportEnter === "function") {
          onViewportEnter();
        }
      }}
      onAnimationComplete={() => {
        if (stage === 0) setStage(1);

        if (stage === 1) {
          if (typeof onAnimationComplete === "function") {
            onAnimationComplete();
          }
        }
      }}
    >
      <img ref={ref} src="/home/planet-01.png" alt="Planet" />
    </motion.div>
  );
}
