"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import clsx from "clsx";
import { LuSearch } from "react-icons/lu";

import Header from "@/components/_layout/Header";
import Logo from "@/components/_layout/Logo";
import { Input } from "@/components/ui/input";

import useSearchStore from "@/zustand/Search";
import useArtistStore from "@/zustand/Artist";
import Background from "./Background";

export default function Create() {
  const router = useRouter();
  const search = useSearchStore();
  const artist = useArtistStore();

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await artist.searchArtistsAction({ keyword: search.keyword });
      router.push("/result");
    }
  };

  const handleSearchClick = async () => {
    await artist.searchArtistsAction({ keyword: search.keyword });
    router.push("/result");
  };

  useEffect(() => {
    search.setKeyword("");
  }, []);

  return (
    <main className={clsx("flex min-h-screen flex-col")}>
      <Background />

      <Header />

      <section className="flex w-full flex-1 flex-col items-center justify-center gap-16 px-4 pt-[94px]">
        <Logo />

        <div className="relative w-full md:w-[640px]">
          <Input
            className="h-12 w-full px-4 text-[16px] md:h-24 md:px-8 md:text-[24px]"
            placeholder="Search or paste a link..."
            value={search.keyword}
            onChange={(e) => search.setKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <LuSearch
            className="absolute right-[16px] top-[50%] translate-y-[-50%] cursor-pointer text-[20px] text-[#B3B3B3] md:right-[32px] md:text-[30px]"
            onClick={handleSearchClick}
          />
        </div>

        <p className="w-full text-center text-[18px] font-[400] md:w-[480px]">
          To make a Galaxyz link, search for a song/album/artist or paste a
          music link (eg. spotify) above.
        </p>
      </section>
    </main>
  );
}
