"use client";

import { PiArrowRight } from "react-icons/pi";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import useArtistStore from "@/zustand/Artist";

interface Props {
  artistId: string;
}

export default function JoinGalaxy({ artistId }: Props) {
  const artist = useArtistStore();
  const selectedArtist = artist.artists.find((a) => a._id === artistId);

  return (
    <div className="flex w-full flex-col px-4">
      <div className="mb-6 text-center text-[35px] font-[500]">
        Join {selectedArtist?.firstName} {selectedArtist?.lastName}'s Galaxy
      </div>

      <div className="mb-16 text-center text-[22px] font-[400] text-[#9F9F9F]">
        Join and receive exclusive news and updates about this artist
      </div>

      <div className="mb-16 flex w-full justify-center">
        <Input
          className="h-auto w-full p-4 text-[22px] font-[400] text-[#9F9F9F] lg:w-4/5 lg:p-8"
          placeholder="Email"
        />
      </div>

      <div className="mb-32 flex w-full justify-center">
        <Button className="flex h-auto w-full gap-4 bg-[#8A2BE2] p-4 text-[30px] font-[400] text-white hover:bg-[#8A2BE2]/80 lg:w-[520px]">
          <span>Join now</span>
          <PiArrowRight />
        </Button>
      </div>
    </div>
  );
}
