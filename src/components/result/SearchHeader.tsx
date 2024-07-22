"use client";

import { LuSearch } from "react-icons/lu";

import { Input } from "@/components/ui/input";

import useSearchStore from "@/zustand/Search";
import useArtistStore from "@/zustand/Artist";

export default function SearchHeader() {
  const artist = useArtistStore();
  const search = useSearchStore();

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await artist.searchArtistsAction({ keyword: search.keyword });
    }
  };

  const handleSearchClick = async () => {
    await artist.searchArtistsAction({ keyword: search.keyword });
  };

  return (
    <div className="relative w-full">
      <Input
        className="h-12 w-full rounded-none px-4 text-[16px]"
        placeholder="Search or paste a link..."
        value={search.keyword}
        onChange={(e) => search.setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <LuSearch
        className="absolute right-[16px] top-[50%] translate-y-[-50%] cursor-pointer text-[20px] text-[#B3B3B3]"
        onClick={handleSearchClick}
      />
    </div>
  );
}
