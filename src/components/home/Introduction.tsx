"use client";

import { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Introduction() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 1
  });
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage === 0) {
      controls.start({ y: 0 }, { duration: 1.5 });
      setStage(1);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === 1 && inView) {
      controls.start({ opacity: 1 }, { duration: 1 });
    }

    if (stage === 1 && !inView) {
      controls.start({ opacity: 0.5 }, { duration: 1 });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="flex w-full flex-col px-4 pt-16"
      initial={stage === 0 ? { y: -200 } : false}
      animate={controls}
    >
      <div className="mb-8 flex justify-center">
        <h1 className="bg-[linear-gradient(94.72deg,_#FFFFFF_11.25%,_#8A2BE2_33.48%,_#2898FF_43.24%,_#FFFFFF_78.85%)] bg-clip-text text-center text-[35px] font-semibold text-transparent md:text-[80px]">
          A new galaxy
          <br />
          for your fans
        </h1>
      </div>

      <div className="flex justify-center px-6">
        <p className="w-full text-center text-[18px] font-normal text-[#FFFFFF] md:w-3/5 md:text-[25px]">
          Create your own digital universe of music, videos and merchandise in
          just a few clicks and share it with your fans via a simple link.
        </p>
      </div>
    </motion.div>
  );
}
