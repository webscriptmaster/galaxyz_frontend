"use client";

import { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import numeral from "numeral";
import { useInView } from "react-intersection-observer";

import { PiCheckCircleFill } from "react-icons/pi";
import useArtistStore from "@/zustand/Artist";
import { IReview } from "@/types/interfaces";

interface Props {
  onViewportEnter?: () => void;
  onAnimationComplete?: () => void;
}

function ReviewCard(prop: IReview) {
  const { reviewer, feedback } = prop;

  return (
    <div className="flex w-full flex-col rounded-[15px] border border-[#8D8D8D] p-6">
      <div className="mb-4 flex items-center gap-4">
        <img
          className="h-[60px] w-[60px] rounded-full"
          src={reviewer?.avatar}
          alt="Reviewer"
        />

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="text-[25px] font-[600]">
              {reviewer?.firstName} {reviewer?.lastName}
            </div>
            <PiCheckCircleFill className="h-6 w-6 text-[#B6B6B6]" />
          </div>

          <div className="text-[20px] font-[400]">
            {numeral(reviewer?.follows).format("0.0a").toUpperCase()} Follow
          </div>
        </div>
      </div>
      <p className="text-[18px] font-[400]">{feedback}</p>
    </div>
  );
}

export default function ArtistReview({
  onViewportEnter,
  onAnimationComplete
}: Props) {
  const artist = useArtistStore();
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
      className="mt-16 flex w-full flex-col justify-center gap-6 bg-black px-4 py-16 md:flex-row"
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
      {(artist.artists?.[0]?.reviews ?? []).slice(0, 3).map((review) => (
        <ReviewCard key={review._id} {...review} />
      ))}
    </motion.div>
  );
}
