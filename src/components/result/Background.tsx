/* eslint-disable react/no-array-index-key */

"use client";

import { CSSProperties } from "react";

export default function Background() {
  const w = 1512;
  const h = 982;

  const px2vw = (px: number) => `${(px * 100) / w}vw`;
  const px2vh = (px: number) => `${(px * 100) / h}vh`;

  const bgs: CSSProperties[] = [
    {
      zIndex: -10,
      position: "fixed",
      width: px2vw(1512),
      height: px2vh(982),
      left: 0,
      top: 0,
      background: "#000000"
    },
    {
      zIndex: -9,
      position: "fixed",
      width: px2vw(554),
      height: px2vh(554),
      left: px2vw(145),
      top: px2vh(240),
      background:
        "linear-gradient(180deg, #D9D9D9 0%, rgba(218, 234, 36, 0.6) 100%)",
      opacity: 0.2,
      filter: "blur(100px)"
    },
    {
      zIndex: -9,
      position: "fixed",
      width: px2vw(160),
      height: px2vh(160),
      left: px2vw(342),
      top: px2vh(794),
      background:
        "linear-gradient(180deg, #D9D9D9 0%, rgba(36, 91, 234, 0.6) 100%)",
      opacity: 0.3,
      filter: "blur(75px)"
    },
    {
      zIndex: -9,
      position: "fixed",
      width: px2vw(206),
      height: px2vh(206),
      left: px2vw(997),
      top: px2vh(231),
      background:
        "linear-gradient(180deg, #65EB35 0%, rgba(36, 91, 234, 0.6) 100%)",
      opacity: 0.4,
      filter: "blur(100px)"
    },
    {
      zIndex: -9,
      position: "fixed",
      width: px2vw(206),
      height: px2vh(206),
      left: px2vw(1202),
      top: px2vh(755),
      background:
        "linear-gradient(180deg, #65EB35 0%, rgba(255, 255, 255, 0.6) 100%)",
      opacity: 0.4,
      filter: "blur(100px)"
    }
  ];

  return (
    <>
      {bgs.map((bg, index) => (
        <div key={index} style={bg} />
      ))}
    </>
  );
}
