"use client";

import { useEffect } from "react";
import clsx from "clsx";
import useArtistStore from "@/zustand/Artist";

interface Props {
  artistId: string;
  setArtistId: (newArtistId: string) => void;
}

export default function ArtistList({ artistId, setArtistId }: Props) {
  const artist = useArtistStore();

  const handleArtistClick = (newArtistId: string) => () => {
    setArtistId(newArtistId);
  };

  useEffect(() => {
    if (!artistId && artist.artists?.length > 0) {
      setArtistId(artist.artists?.[0]?._id ?? "");
    }
  }, []);

  return (
    <>
      <div className="hidden w-[320px] min-w-[320px] flex-col bg-[linear-gradient(180deg,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0.297761)_41.5%,_rgba(0,0,0,0)_70.5%)] px-4 pt-20 lg:flex">
        <div className="mb-12 text-[22px] font-[500] text-[#9F9F9F]">
          {artist.artists?.length} matching artist
        </div>

        <div className="flex flex-col">
          {artist.artists?.map((a) => (
            <div
              key={a._id}
              className="mb-4 cursor-pointer border-b border-b-[#353535] pb-2"
              onClick={handleArtistClick(a._id ?? "")}
            >
              <div
                className={clsx(
                  "flex items-center gap-4 rounded-[5px] px-3 py-2",
                  a._id === artistId ? "bg-[#1B1B1B]" : ""
                )}
              >
                <img
                  src={a.avatar}
                  alt={`${a.firstName} ${a.lastName}`}
                  className="h-[50px] w-[50px] rounded-full"
                />

                <div className="text-[22px] font-[500]">{`${a.firstName} ${a.lastName}`}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col px-4 py-4 lg:hidden">
        <div className="mb-6 text-[18px] font-[500] text-[#9F9F9F]">
          {artist.artists?.length} matching artist
        </div>

        <div className="flex w-full flex-wrap gap-3">
          {artist.artists?.map((a) => (
            <div
              key={a._id}
              className={clsx(
                "flex cursor-pointer items-center gap-3 rounded-[70px] px-6 py-3",
                a._id === artistId ? "bg-[#838383]" : "bg-[#1B1B1B]"
              )}
              onClick={handleArtistClick(a._id ?? "")}
            >
              <img
                src={a.avatar}
                alt={`${a.firstName} ${a.lastName}`}
                className="h-[30px] w-[30px] rounded-full"
              />

              <div className="text-[18px] font-[500]">{`${a.firstName} ${a.lastName}`}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
