"use client";

import { useEffect, useState } from "react";

import { motion, useAnimate } from "framer-motion";
import { LuLink } from "react-icons/lu";
import { useInView } from "react-intersection-observer";

import MakeNewLinkBtn from "./components/MakeNewLinkBtn";

interface Props {
  onViewportEnter?: () => void;
  onAnimationComplete?: () => void;
}

export default function SmartLink({
  onViewportEnter,
  onAnimationComplete
}: Props) {
  const [scope, animate] = useAnimate();
  const { ref, inView } = useInView({
    threshold: 1
  });
  const [stage, setStage] = useState(0);

  const initialize = async () => {
    await animate(scope.current, { scale: 1, opacity: 1 }, { duration: 1.5 });
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
      initial={{ scale: 0.5, opacity: 0.5 }}
      onViewportEnter={() => {
        setStage(1);
        if (typeof onViewportEnter === "function") {
          onViewportEnter();
        }
      }}
    >
      <div ref={ref} className="mt-16 flex w-full flex-col items-center px-4">
        <div className="mb-10 flex w-full justify-center">
          <h1 className="w-full bg-[linear-gradient(90.28deg,_#FFFFFF_7.49%,_#8A2BE2_40.08%,_#2898FF_56.61%,_#FFFFFF_96.79%)] bg-clip-text text-center text-[35px] font-[600] text-transparent md:w-4/5 md:text-[60px]">
            Smart links get smart results
          </h1>
        </div>

        <div className="mb-16 flex w-full justify-center px-6">
          <p className="w-full text-center text-[18px] font-[400] text-[#C5C5C5] md:w-3/5 md:text-[35px]">
            Each link is packed with{" "}
            <span className="font-[600]">intelligent optimization</span> working
            hard to get as many streams as possible.
          </p>
        </div>

        <div className="mb-10 flex w-full items-center justify-center gap-4 rounded-[8px] bg-[#000000] px-12 py-5 md:w-[480px] md:px-24">
          <LuLink className="h-[30px] w-[30px]" />
          <div className="flex text-[25px] font-[300] italic">
            link.music.artist.me
          </div>
        </div>

        <MakeNewLinkBtn />
      </div>
    </motion.div>
  );
}
