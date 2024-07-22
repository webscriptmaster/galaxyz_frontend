"use client";

import { useEffect, useState } from "react";

import { motion, useAnimate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PiSpotifyLogoFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

import MakeNewLinkBtn from "./components/MakeNewLinkBtn";

interface Props {
  onViewportEnter?: () => void;
  onAnimationComplete?: () => void;
}

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[8px] bg-[#D9D9D9] p-4 text-[#000000]">
        <p className="text-[18px] font-[600]">{payload?.[0]?.payload?.name}</p>
        <p className="text-[18px] font-[400]">
          Visitors: {payload?.[0]?.payload?.visitors}
        </p>
      </div>
    );
  }

  return null;
}

export default function TrackAnalyze({
  onViewportEnter,
  onAnimationComplete
}: Props) {
  const [scope, animate] = useAnimate();
  const [scopeText, animateText] = useAnimate();
  const [scopeChart, animateChart] = useAnimate();

  const { ref: refText, inView: inViewText } = useInView({
    threshold: 1
  });
  const { ref: refChart, inView: inViewChart } = useInView({
    threshold: 1
  });

  const [stage, setStage] = useState(0);
  const [chartData, setChartData] = useState<Record<string, any>[]>([]);

  const initialize = async () => {
    await animate(scope.current, { scale: 1 }, { duration: 1.5 });
    await setStage(2);

    if (typeof onAnimationComplete === "function") {
      onAnimationComplete();
    }
  };

  useEffect(() => {
    const tempChartData = [];
    for (let i = 14; i >= 0; i--) {
      tempChartData.push({
        name: i === 1 ? "Yesterday" : i === 0 ? "Today" : `${i} days ago`,
        visitors: Math.floor(Math.random() * 1000)
      });
    }
    setChartData(tempChartData);
  }, []);

  useEffect(() => {
    if (stage === 1) {
      initialize();
    }
  }, [stage]);

  useEffect(() => {
    if (stage === 2 && inViewText) {
      animateText(scopeText.current, { opacity: 1 });
    }
    if (stage === 2 && !inViewText) {
      animateText(scopeText.current, { opacity: 0.5 });
    }

    if (stage === 2 && inViewChart) {
      animateChart(scopeChart.current, { opacity: 1 });
    }
    if (stage === 2 && !inViewChart) {
      animateChart(scopeChart.current, { opacity: 0.5 });
    }
  }, [stage, inViewText, inViewChart]);

  return (
    <motion.div
      className="mt-16 flex w-full flex-col items-center px-4"
      ref={scope}
      initial={{ scale: 0.5 }}
      onViewportEnter={() => {
        setStage(1);
        if (typeof onViewportEnter === "function") {
          onViewportEnter();
        }
      }}
    >
      <motion.div className="w-full" initial={{ opacity: 0.5 }} ref={scopeText}>
        <div ref={refText}>
          <div className="mb-10 flex w-full justify-center">
            <h1 className="w-full bg-[linear-gradient(90.33deg,_#FFFFFF_15.77%,_#8A2BE2_45.83%,_#2898FF_73.56%,_#FFFFFF_101.66%)] bg-clip-text text-center text-[35px] font-[600] text-transparent md:w-4/5 md:text-[60px]">
              Track visits and analyze data
            </h1>
          </div>

          <div className="mb-16 flex w-full justify-center px-6">
            <p className="w-full text-center text-[18px] font-[400] text-[#C5C5C5] md:w-3/5 md:text-[30px]">
              Monitor your links and impressions. With advanced analytics you
              can track origin of leads and which platform they are using.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0.5 }}
        ref={scopeChart}
      >
        <div ref={refChart}>
          <div className="flex w-full flex-col rounded-[30px] border border-[#8D8D8D] bg-black p-8">
            <div className="flex w-full flex-col">
              <h2 className="mb-3 text-[20px] font-[600] text-[#C5C5C5]">
                TREND
              </h2>
              <div className="text-[18px] font-[400] text-[#C5C5C5]">
                Last 14 days
              </div>
            </div>

            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={100} data={chartData}>
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="#53DCFA"
                    strokeWidth={2}
                    dot={{ strokeWidth: 0, r: 6, fill: "#B062F9" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex w-full flex-col">
              <h2 className="mb-3 text-[20px] font-[600] text-[#C5C5C5]">
                PLATFORM
              </h2>

              <div className="flex w-full flex-wrap justify-start gap-4 md:gap-16">
                <div className="flex items-center gap-5">
                  <PiSpotifyLogoFill className="text-[30px] text-[#1ED760]" />
                  <p className="text-[18px] font-[500] text-[#C5C5C5]">
                    SPOTIFY (140 views)
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <FcGoogle className="text-[30px]" />
                  <p className="text-[18px] font-[500] text-[#C5C5C5]">
                    GOOGLE (140 views)
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <GrApple className="text-[30px]" />
                  <p className="text-[18px] font-[500] text-[#C5C5C5]">
                    APPLE (55 views)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-16 flex w-full justify-center">
        <MakeNewLinkBtn />
      </div>
    </motion.div>
  );
}
