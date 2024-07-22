"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

import { motion, useAnimate } from "framer-motion";
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";

import Logo from "@/components/_layout/Logo";

interface Props {
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}

export default function Footer({
  onAnimationStart,
  onAnimationComplete
}: Props) {
  const [scope, animate] = useAnimate();
  const { ref, inView } = useInView({
    threshold: 1
  });
  const [stage, setStage] = useState(0);

  const initialize = async () => {
    if (typeof onAnimationStart === "function") {
      onAnimationStart();
    }

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
    <motion.footer
      ref={scope}
      initial={{ scale: 0.5, opacity: 0.5 }}
      className="mt-16 flex w-full flex-col bg-black px-4 py-7 md:px-14 md:py-10"
      onViewportEnter={() => setStage(1)}
    >
      <Logo className="mb-8" />

      <div ref={ref} className="flex gap-[72px] md:gap-[160px]">
        <div className="flex flex-col">
          <Link href="/" className="mb-[16px] text-[18px] font-normal">
            Home
          </Link>
          <Link href="/create" className="mb-[16px] text-[18px] font-normal">
            Make a Link
          </Link>
          <Link href="/contact" className="text-[18px] font-normal">
            Contact
          </Link>
        </div>

        <div className="flex flex-col">
          <div className="mb-4 text-[18px] font-normal">Social</div>
          <div className="flex gap-[32px]">
            <Image
              className="cursor-pointer"
              src="/icon/social-x.svg"
              alt="Social X"
              width={20}
              height={20}
            />
            <RiInstagramFill className="h-[24px] w-[24px] cursor-pointer" />
            <RiFacebookCircleFill className="h-[24px] w-[24px] cursor-pointer" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
