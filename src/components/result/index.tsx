"use client";

import clsx from "clsx";

import { useEffect, useState } from "react";

import Header from "@/components/_layout/Header";

import useArtistStore from "@/zustand/Artist";

import SearchHeader from "./SearchHeader";
import ArtistList from "./ArtistList";
import SongList from "./SongList";
import ArtistMerchandising from "./ArtistMerchandising";
import JoinGalaxy from "./JoinGalaxy";
import Background from "./Background";

export default function Result() {
  const artist = useArtistStore();
  const [artistId, setArtistId] = useState("");

  useEffect(() => {
    setArtistId(artist.artists?.[0]?._id ?? "");
  }, [artist.artists]);

  return (
    <main className={clsx("flex min-h-screen flex-col")}>
      <Background />

      <Header />

      <section className="flex w-full flex-1 flex-col pt-[94px]">
        <SearchHeader />

        <div className="flex flex-1 flex-col lg:flex-row">
          <ArtistList artistId={artistId} setArtistId={setArtistId} />

          <div className="flex flex-1 flex-col items-center gap-20 pt-20">
            <SongList artistId={artistId} />

            <ArtistMerchandising artistId={artistId} />

            <JoinGalaxy artistId={artistId} />
          </div>
        </div>
      </section>
    </main>
  );
}
