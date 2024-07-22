"use client";

import { LuPlus } from "react-icons/lu";
import useArtistStore from "@/zustand/Artist";

interface Props {
  artistId: string;
}

export default function SongList({ artistId }: Props) {
  const artist = useArtistStore();
  const selectedArtist = artist.artists.find((a) => a._id === artistId);

  return (
    <div className="flex w-full flex-col px-4 lg:w-[528px]">
      <div className="mb-8 text-left text-[22px] font-[500] text-[#9F9F9F] lg:text-center">
        {selectedArtist?.songs?.length} matching song
      </div>

      <div className="flex flex-col gap-4">
        {selectedArtist?.songs?.map((s) => (
          <div
            key={s._id}
            className="flex items-center justify-between border-b border-b-[#757575] pb-4"
          >
            <div className="flex items-center gap-5">
              <img
                src={selectedArtist?.avatar}
                alt={`${selectedArtist?.firstName} ${selectedArtist.lastName}`}
                className="h-[70px] w-[70px] rounded-full"
              />

              <div className="flex flex-col">
                <div className="text-[30px] font-[600]">{s.name}</div>
                <div className="text-[20px] font-[500] text-[#9F9F9F]">
                  {selectedArtist.firstName} {selectedArtist.lastName}
                </div>
              </div>
            </div>

            <LuPlus className="cursor-pointer text-[24px] text-[#9F9F9F]" />
          </div>
        ))}
      </div>
    </div>
  );
}
