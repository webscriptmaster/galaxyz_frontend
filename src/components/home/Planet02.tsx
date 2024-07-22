"use client";

import { useEffect, useState } from "react";

import { motion, useAnimate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MakeNewLinkBtn from "./components/MakeNewLinkBtn";

interface Props {
  onViewportEnter?: () => void;
  onAnimationComplete?: () => void;
}

export default function Planet02({
  onViewportEnter,
  onAnimationComplete
}: Props) {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();

  const { ref, inView } = useInView({
    threshold: 1
  });
  const [stage, setStage] = useState(0);

  const initialize = async () => {
    await animate(scope.current, { scale: 1 }, { duration: 1.5 });
    await animate2(scope2.current, { opacity: 1 }, { duration: 1.5 });
    await setStage(2);

    if (typeof onAnimationComplete === "function") {
      onAnimationComplete();
    }
  };

  useEffect(() => {
    if (stage === 1) {
      initialize();
    }
  }, [stage]);

  useEffect(() => {
    if (stage === 2 && inView) {
      animate(scope.current, { opacity: 1 });
    }

    if (stage === 2 && !inView) {
      animate(scope.current, { opacity: 0.5 });
    }
  }, [stage, inView]);

  return (
    <motion.div
      ref={scope}
      initial={{ scale: 0.5 }}
      className="mt-16 flex flex-col items-center px-4"
      onViewportEnter={() => {
        setStage(1);

        if (typeof onViewportEnter === "function") {
          onViewportEnter();
        }
      }}
    >
      <motion.img
        ref={scope2}
        initial={{ opacity: 0 }}
        src="/home/planet-02-linked.png"
        alt="Planet Linked"
      />

      <div
        ref={ref}
        className="flex translate-y-[-40%] flex-col items-center justify-center gap-10"
      >
        <img
          className="w-1/2 md:w-full"
          src="/home/planet-02.png"
          alt="Planet"
        />

        <MakeNewLinkBtn />
      </div>
    </motion.div>
  );
}
