"use client";

import { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  onViewportEnter?: () => void;
  onAnimationComplete?: () => void;
}

export default function ConnectSpace({
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
      controls.start({ scale: 0.5 }, { duration: 1.5 });
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
      ref={ref}
      className="mt-16 flex w-full flex-col px-4"
      initial={stage === 0 ? { scale: 0.5 } : false}
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
      <div className="mb-16 flex justify-center">
        <h1 className="w-full bg-[linear-gradient(91.49deg,_#FFFFFF_14.77%,_#8A2BE2_39.2%,_#2898FF_60.64%,_#FFFFFF_90.8%)] bg-clip-text text-center text-[35px] font-[600] text-transparent md:w-4/5 md:text-[60px]">
          Connect to all platforms and launch your brand into the space
        </h1>
      </div>

      <div className="flex justify-center px-6">
        <p className="w-full text-center text-[18px] font-normal text-[#C5C5C5] md:w-3/5 md:text-[35px]">
          The moon has already been conquered, point to more distant horizons to
          get more streams.
        </p>
      </div>
    </motion.div>
  );
}
