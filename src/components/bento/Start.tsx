"use client";
import CountUp from "react-countup";
import { Estrella, Flag, Startup } from "../svg/Icons";

export const Start = () => {
  return (
    <div className="grid grid-cols-3 w-full h-full gap-4">
      <div className="relative w-full h-full rounded-3xl  border bg-[#101010] border-[#202020] p-[0.3rem]">
        <div className="flex flex-col items-center justify-center relative gap-2 border border-[#202020]   rounded-3xl px-4  w-full h-full  ">
          <div className="flex items-center justify-center   gap-1">
            <CountUp
              className="text-7xl font-semibold text-[#8c8b8b] "
              end={30}
              duration={5}
            />{" "}
            <span className="text-5xl text-green-300">+</span>
          </div>
          <div className="bg-color-card  bg-opacity-100 shadow-2xl absolute w-full h-[20px] rounded-full blur-lg"></div>
          <div className="bg-color-card shadow-2xl border border-color-border flex items-center justify-center rounded-3xl py-1 px-4 gap-2  w-full">
            <Flag color="#47FA92" />
            <p className="text-sm">Proyectos</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full rounded-3xl  border bg-[#101010] border-[#202020] p-[0.3rem]">
        <div className="flex flex-col items-center justify-center relative gap-2 border border-[#202020]   rounded-3xl px-4  w-full h-full  ">
          <div className="flex items-center justify-center  gap-1">
            <CountUp
              className="text-7xl font-semibold  text-[#8c8b8b] "
              end={2}
              duration={5}
            />{" "}
            <span className="text-5xl text-green-300">+</span>
          </div>
          <div className="bg-color-card  bg-opacity-100 shadow-2xl absolute w-full h-[20px] rounded-full blur-lg"></div>

          <div className="bg-color-card shadow-2xl border border-color-border flex items-center justify-center rounded-3xl py-1 px-4 gap-2  w-full">
            <Startup color="#47FA92" />
            <p className="text-sm">Startup</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full rounded-3xl  border bg-[#101010] border-[#202020] p-[0.3rem]">
        <div className="flex flex-col items-center justify-center relative gap-2 border border-[#202020]   rounded-3xl px-4  w-full h-full  ">
          <div className="flex items-center justify-center  gap-1">
            <CountUp
              className="text-7xl font-semibold   text-[#8c8b8b]"
              end={1}
              duration={5}
            />{" "}
            <span className="text-5xl text-green-300">+</span>
          </div>
          <div className="bg-color-card  bg-opacity-100 shadow-2xl absolute w-full h-[20px] rounded-full blur-lg"></div>

          <div className="bg-color-card shadow-2xl border border-color-border flex items-center justify-center rounded-3xl py-1 px-4 gap-2 w-full">
            <Estrella color="#47FA92" />
            <p className="text-sm">Experiencia</p>
          </div>
        </div>
      </div>
    </div>
  );
};
