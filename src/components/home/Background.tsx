/* eslint-disable react/no-array-index-key */

"use client";

import { CSSProperties } from "react";

interface Props {
  stage: number;
}

export default function Background({ stage }: Props) {
  const w = 1512;
  const h = 982;

  const px2vw = (px: number) => `${(px * 100) / w}vw`;
  const px2vh = (px: number) => `${(px * 100) / h}vh`;

  const bgs: CSSProperties[][] = [
    [
      {
        zIndex: -10,
        position: "fixed",
        width: px2vw(1512),
        height: px2vh(982),
        left: 0,
        top: 0,
        background: "#000000"
      }
    ],
    [
      {
        zIndex: -10,
        position: "fixed",
        width: px2vw(1512),
        height: px2vh(982),
        left: `calc(50% - ${px2vw(1512)}/2)`,
        top: `calc(50% - ${px2vh(982)}/2)`,
        background:
          "linear-gradient(107.89deg, #38001B 7.9%, #000000 36.9%, #220011 69.9%, #8E0949 100%)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(554),
        height: px2vh(554),
        left: px2vw(160),
        top: px2vh(179),
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
        left: px2vw(192),
        top: px2vh(637),
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
        left: px2vw(1346),
        top: px2vh(441),
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
        left: px2vw(1217),
        top: px2vh(694),
        background:
          "linear-gradient(180deg, #65EB35 0%, rgba(255, 255, 255, 0.6) 100%)",
        opacity: 0.4,
        filter: "blur(100px)"
      }
    ],
    [
      {
        zIndex: -10,
        position: "fixed",
        width: px2vw(1512),
        height: px2vh(982),
        left: `calc(50% - ${px2vw(1512)}/2)`,
        top: `calc(50% - ${px2vh(982)}/2)`,
        background:
          "linear-gradient(107.89deg, #3E001E 0%, #000000 33.33%, #220011 66.67%, #8E0949 100%)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(554),
        height: px2vh(554),
        left: px2vw(-112),
        top: px2vh(416),
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
        left: px2vw(1015),
        top: px2vh(336),
        background:
          "linear-gradient(180deg, #D9D9D9 0%, rgba(36, 91, 234, 0.6) 100%)",
        opacity: 0.6,
        filter: "blur(75px)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(206),
        height: px2vh(206),
        left: px2vw(1346),
        top: px2vh(233),
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
        left: px2vw(1029),
        top: px2vh(694),
        background:
          "linear-gradient(180deg, #65EB35 0%, rgba(255, 255, 255, 0.6) 100%)",
        opacity: 0.4,
        filter: "blur(100px)"
      }
    ],
    [
      {
        zIndex: -10,
        position: "fixed",
        width: px2vw(1512),
        height: px2vh(982),
        left: `0`,
        top: `0`,
        background: "#000000"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(554),
        height: px2vh(554),
        left: px2vw(974),
        top: px2vh(456),
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
        left: px2vw(281),
        top: px2vh(341),
        background:
          "linear-gradient(180deg, #D9D9D9 0%, rgba(36, 91, 234, 0.6) 100%)",
        opacity: 0.6,
        filter: "blur(75px)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(206),
        height: px2vh(206),
        left: px2vw(120),
        top: px2vh(673),
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
        left: px2vw(1206),
        top: px2vh(224),
        background:
          "linear-gradient(180deg, #65EB35 0%, rgba(255, 255, 255, 0.6) 100%)",
        opacity: 0.4,
        filter: "blur(100px)"
      }
    ],
    [
      {
        zIndex: -10,
        position: "fixed",
        width: px2vw(1512),
        height: px2vh(982),
        left: `calc(50% - ${px2vw(1512)}/2)`,
        top: `calc(50% - ${px2vh(982)}/2)`,
        background:
          "linear-gradient(107.46deg, #000822 0%, #000000 28.23%, #000E3F 55.44%, #000000 89.3%)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(554),
        height: px2vh(554),
        left: px2vw(-7),
        top: px2vh(242),
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
        left: px2vw(534),
        top: px2vh(559),
        background:
          "linear-gradient(180deg, #D9D9D9 0%, rgba(36, 91, 234, 0.6) 100%)",
        opacity: 0.6,
        filter: "blur(75px)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(350),
        height: px2vh(350),
        left: px2vw(916),
        top: px2vh(324),
        background:
          "linear-gradient(180deg, #65EB35 0%, rgba(36, 91, 234, 0.6) 100%)",
        opacity: 0.4,
        filter: "blur(100px)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(167),
        height: px2vh(167),
        left: px2vw(1266),
        top: px2vh(749),
        background:
          "linear-gradient(180deg, #65EB35 0%, rgba(255, 255, 255, 0.6) 100%)",
        opacity: 0.4,
        filter: "blur(100px)"
      }
    ],
    [
      {
        zIndex: -10,
        position: "fixed",
        width: px2vw(1512),
        height: px2vh(982),
        left: `calc(50% - ${px2vw(1512)}/2)`,
        top: `calc(50% - ${px2vh(982)}/2)`,
        background:
          "linear-gradient(107.89deg, #000000 0%, #000F44 36.4%, #010822 69.62%, #000000 91.14%)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(554),
        height: px2vh(554),
        left: px2vw(-7),
        top: px2vh(242),
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
        left: px2vw(534),
        top: px2vh(559),
        background:
          "linear-gradient(180deg, #D9D9D9 0%, rgba(36, 91, 234, 0.6) 100%)",
        opacity: 0.6,
        filter: "blur(75px)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(350),
        height: px2vh(350),
        left: px2vw(916),
        top: px2vh(324),
        background:
          "linear-gradient(180deg, #65EB35 0%, rgba(36, 91, 234, 0.6) 100%)",
        opacity: 0.4,
        filter: "blur(100px)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(167),
        height: px2vh(167),
        left: px2vw(1266),
        top: px2vh(749),
        background:
          "linear-gradient(180deg, #65EB35 0%, rgba(255, 255, 255, 0.6) 100%)",
        opacity: 0.4,
        filter: "blur(100px)"
      }
    ],
    [
      {
        zIndex: -10,
        position: "fixed",
        width: px2vw(1512),
        height: px2vh(982),
        left: `0`,
        top: `0`,
        background: "#000000"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(521),
        height: px2vh(521),
        left: px2vw(-24),
        top: px2vh(426),
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
        left: px2vw(659),
        top: px2vh(595),
        background:
          "linear-gradient(180deg, #D9D9D9 0%, rgba(36, 91, 234, 0.6) 100%)",
        opacity: 0.6,
        filter: "blur(75px)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(222),
        height: px2vh(222),
        left: px2vw(1098),
        top: px2vh(720),
        background:
          "linear-gradient(180deg, #65EB35 0%, rgba(36, 91, 234, 0.6) 100%)",
        opacity: 0.4,
        filter: "blur(100px)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(363),
        height: px2vh(363),
        left: px2vw(807),
        top: px2vh(128),
        background:
          "linear-gradient(180deg, #65EB35 0%, rgba(255, 255, 255, 0.6) 100%)",
        opacity: 0.15,
        filter: "blur(100px)"
      }
    ],
    [
      {
        zIndex: -10,
        position: "fixed",
        width: px2vw(1512),
        height: px2vh(982),
        left: `0`,
        top: `0`,
        background: "#000000"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(455),
        height: px2vh(455),
        left: px2vw(829),
        top: px2vh(591),
        background:
          "linear-gradient(180deg, #D9D9D9 0%, rgba(218, 234, 36, 0.6) 100%)",
        opacity: 0.2,
        filter: "blur(100px)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(257),
        height: px2vh(257),
        left: px2vw(853),
        top: px2vh(145),
        background:
          "linear-gradient(180deg, #D9D9D9 0%, rgba(36, 91, 234, 0.6) 100%)",
        opacity: 0.6,
        filter: "blur(75px)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(159),
        height: px2vh(159),
        left: px2vw(627),
        top: px2vh(546),
        background:
          "linear-gradient(180deg, #65EB35 0%, rgba(36, 91, 234, 0.6) 100%)",
        opacity: 0.4,
        filter: "blur(100px)"
      },
      {
        zIndex: -9,
        position: "fixed",
        width: px2vw(363),
        height: px2vh(363),
        left: px2vw(-17),
        top: px2vh(331),
        background:
          "linear-gradient(180deg, #5A35EB 0%, rgba(255, 255, 255, 0.6) 100%)",
        opacity: 0.15,
        filter: "blur(100px)"
      }
    ]
  ];

  return (
    <>
      {bgs[stage].map((bg, index) => (
        <div key={index} style={bg} />
      ))}
    </>
  );
}
