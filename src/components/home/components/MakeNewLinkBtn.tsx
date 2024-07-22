"use client";

import { useRouter } from "next/navigation";

import { ForwardedRef, forwardRef } from "react";

import clsx from "clsx";
import { PiArrowRight } from "react-icons/pi";

import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
}

function MakeNewLinkBtn(
  { className }: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/create");
  };

  return (
    <div ref={ref} className={clsx("w-full md:w-[480px]", className)}>
      <Button
        className="flex h-auto w-full items-center gap-4 bg-[#8A2BE2] px-16 py-5 hover:bg-[#8A2BE2]/80 md:px-24"
        onClick={handleClick}
      >
        <span className="text-[30px] font-normal text-[#FFFFFF]">
          Make a new link
        </span>
        <PiArrowRight className="h-[18px] w-[18px] text-[#FFFFFF]" />
      </Button>
    </div>
  );
}

export default forwardRef(MakeNewLinkBtn);
