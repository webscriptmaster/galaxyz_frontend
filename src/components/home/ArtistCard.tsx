"use client";

import { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuChevronRight, LuMenu, LuMusic } from "react-icons/lu";
import { PiCubeFocus, PiVideoCameraFill } from "react-icons/pi";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components/ui/button";
import useArtistStore from "@/zustand/Artist";

interface Props {
  onViewportEnter?: () => void;
  onAnimationComplete?: () => void;
}

export default function ArtistCard({
  onViewportEnter,
  onAnimationComplete
}: Props) {
  const artist = useArtistStore();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.6
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
      className="relative mt-16 flex flex-col justify-center px-4"
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
      <img
        className="mb-[240px] h-[480px] w-full rounded-t-[30px] object-cover md:h-[720px] md:w-[640px]"
        src={artist.artists?.[0]?.avatar}
        alt="Artist"
      />

      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 flex flex-col justify-between px-4">
        <div className="z-10 flex items-center justify-between rounded-t-[30px] bg-[linear-gradient(180deg,_#4C4C4C_0%,_rgba(89,89,89,0)_100%)] px-8 py-9">
          <LuMenu className="h-5 w-5 cursor-pointer" />
          <BsThreeDotsVertical className="h-5 w-5 cursor-pointer" />
        </div>

        <div className="z-10 flex flex-1 flex-col bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.435484)_32.4%,_#000000_87.9%)]">
          <div className="flex flex-1 flex-col items-center justify-end">
            <div className="mb-8">
              <h2 className="mb-2 text-[40px] font-[600]">
                {artist.artists?.[0]?.firstName} {artist.artists?.[0]?.lastName}
              </h2>
              <p className="text-center text-[25px] font-[400]">
                Stream this artist
              </p>
            </div>
          </div>

          <div className="mb-8 flex flex-col gap-4 px-6">
            <Button className="flex h-[70px] justify-between rounded-[60px] px-8">
              <LuMusic className="h-6 w-6" />
              <span className="uppercase">spotify</span>
              <LuChevronRight className="h-6 w-6" />
            </Button>

            <Button className="flex h-[70px] justify-between rounded-[60px] px-8">
              <PiVideoCameraFill className="h-6 w-6" />
              <span className="uppercase">youtube</span>
              <LuChevronRight className="h-6 w-6" />
            </Button>

            <Button className="flex h-[70px] justify-between rounded-[60px] px-8">
              <PiCubeFocus className="h-6 w-6" />
              <span className="uppercase">merch</span>
              <LuChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
