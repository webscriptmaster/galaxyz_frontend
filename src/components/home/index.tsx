"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";
import { AnimatePresence } from "framer-motion";

import Header from "@/components/_layout/Header";
import LoadingSpinner from "@/components/_layout/LoadingSpinner";

import useArtistStore from "@/zustand/Artist";

import ArtistCard from "./ArtistCard";
import Introduction from "./Introduction";
import NewLinkButton from "./NewLinkButton";
import Planet01 from "./Planet01";
import ArtistReview from "./ArtistReview";
import ConnectSpace from "./ConnectSpace";
import Planet02 from "./Planet02";
import SmartLink from "./SmartLink";
import TrackAnalyze from "./TrackAnalyze";
import Footer from "./Footer";
import Background from "./Background";

export default function Home() {
  const artist = useArtistStore();
  const [stage, setStage] = useState(0);
  const [bgStage, setBgStage] = useState(0);

  const initialize = async () => {
    await artist.searchArtistsAction({ keyword: "" });
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      {artist.loading && <LoadingSpinner />}

      {!artist.loading && (
        <main className={clsx("flex min-h-screen flex-col")}>
          <Background stage={bgStage} />

          <Header />

          <section className="relative flex flex-col items-center pt-[94px]">
            <AnimatePresence>
              {stage >= 0 && <Introduction key="m-introduction" />}

              {stage >= 0 && (
                <NewLinkButton
                  key="m-new-link"
                  onAnimationComplete={() => {
                    if (stage < 1) {
                      setStage(1);
                    }
                  }}
                />
              )}

              {stage >= 1 && (
                <Planet01
                  key="m-planet01"
                  onViewportEnter={() => {
                    setBgStage(1);
                  }}
                  onAnimationComplete={() => {
                    if (stage < 2) {
                      setStage(2);
                    }
                  }}
                />
              )}

              {stage >= 2 && (
                <ArtistCard
                  key="m-artist-card"
                  onViewportEnter={() => setBgStage(2)}
                  onAnimationComplete={() => {
                    if (stage < 3) {
                      setStage(3);
                    }
                  }}
                />
              )}

              {stage >= 3 && (
                <ArtistReview
                  key="m-artist-review"
                  onViewportEnter={() => setBgStage(3)}
                  onAnimationComplete={() => {
                    if (stage < 4) {
                      setStage(4);
                    }
                  }}
                />
              )}

              {stage >= 4 && (
                <ConnectSpace
                  key="m-connect-space"
                  onViewportEnter={() => setBgStage(4)}
                  onAnimationComplete={() => {
                    if (stage < 5) {
                      setStage(5);
                    }
                  }}
                />
              )}

              {stage >= 5 && (
                <Planet02
                  key="m-planet02"
                  onViewportEnter={() => setBgStage(5)}
                  onAnimationComplete={() => {
                    if (stage < 6) {
                      setStage(6);
                    }
                  }}
                />
              )}

              {stage >= 6 && (
                <SmartLink
                  key="m-smart-link"
                  onViewportEnter={() => setBgStage(6)}
                  onAnimationComplete={() => {
                    if (stage < 7) {
                      setStage(7);
                    }
                  }}
                />
              )}

              {stage >= 7 && (
                <TrackAnalyze
                  key="m-track-analyze"
                  onViewportEnter={() => setBgStage(7)}
                  onAnimationComplete={() => {
                    if (stage < 8) {
                      setStage(8);
                    }
                  }}
                />
              )}

              {stage >= 8 && <Footer key="m-footer" />}
            </AnimatePresence>
          </section>
        </main>
      )}
    </>
  );
}
