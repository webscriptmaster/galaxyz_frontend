"use client";

import { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import MakeNewLinkBtn from "./components/MakeNewLinkBtn";

interface Props {
  onAnimationComplete?: () => void;
}

export default function NewLinkButton({ onAnimationComplete }: Props) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 1
  });
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage === 0) {
      controls.start({ y: 0 }, { duration: 1.5 });
    }
  }, []);

  useEffect(() => {
    if (stage === 1 && inView) {
      controls.start({ opacity: 1 }, { duration: 1 });
    }

    if (stage === 1 && !inView) {
      controls.start({ opacity: 0.5 }, { duration: 1 });
    }
  }, [stage, inView]);

  return (
    <motion.div
      className="flex w-full flex-col items-center px-4 pt-16 md:w-[480px]"
      initial={stage === 0 ? { y: 200 } : false}
      animate={controls}
      onAnimationComplete={() => {
        if (stage === 0) setStage(1);

        if (stage === 1) {
          if (typeof onAnimationComplete === "function") {
            onAnimationComplete();
          }
        }
      }}
    >
      <MakeNewLinkBtn ref={ref} />
    </motion.div>
  );
}
