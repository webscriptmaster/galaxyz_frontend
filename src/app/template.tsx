"use client";

import LoadingSpinner from "@/components/_layout/LoadingSpinner";

import useArtistStore from "@/zustand/Artist";
import useSearchStore from "@/zustand/Search";

export default function RootTemplate({
  children
}: {
  children: React.ReactNode;
}) {
  const artist = useArtistStore();
  const search = useSearchStore();

  const hasHydrated = artist.hasHydrated && search.hasHydrated;

  return (
    <>
      {!hasHydrated && <LoadingSpinner />}

      {hasHydrated && children}
    </>
  );
}
