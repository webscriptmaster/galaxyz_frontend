"use client";

import numeral from "numeral";
import useArtistStore from "@/zustand/Artist";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface Props {
  artistId: string;
}

export default function ArtistMerchandising({ artistId }: Props) {
  const artist = useArtistStore();
  const selectedArtist = artist.artists.find((a) => a._id === artistId);

  return (
    <div className="flex w-full flex-col px-4">
      <div className="mb-8 text-left text-[22px] font-[500] text-[#9F9F9F] lg:text-center">
        Artist merchandising
      </div>

      <ScrollArea className="lg:w-[calc(100vw-320px-44px)]" type="always">
        <div className="mb-4 flex flex-col justify-center gap-6 lg:flex-row">
          {selectedArtist?.merchandisings?.map((m) => (
            <div
              key={m._id}
              className="flex w-full flex-col items-center rounded-[16px] border border-[#6A6A6A] px-4 py-4 lg:w-[320px]"
            >
              <img src={m.img} alt={m.name} className="mb-2" />
              <div className="mb-2 text-[22px] font-[600]">{m.name}</div>
              <div className="mb-6 text-[20px] font-[500] text-[#9F9F9F]">
                {numeral(m.price).format("$0,0.00")}
              </div>
              <div className="mb-4 w-full px-8">
                <Button className="h-auto w-full bg-[#8A2BE2] py-3 text-[25px] font-[400] text-white hover:bg-[#8A2BE2]/80">
                  Buy
                </Button>
              </div>
            </div>
          ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
