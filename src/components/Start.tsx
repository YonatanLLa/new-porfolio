"use client";
import CountUp from "react-countup";
import { Download, Estrella, Flag, Startup } from "./svg/Icons";

export const Start = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 w-full h-full gap-4 ">
      <div className="relative w-full h-full rounded-2xl  border bg-[#101010] border-[#202020] p-[0.3rem]">
        <div className="flex flex-col items-center justify-center relative gap-2 border border-[#202020]   rounded-2xl lg:px-4 px-2 md:py-2 py-2  w-full h-full  ">
          <div className="flex items-center justify-center   gap-1">
            <CountUp
              className="text-7xl font-semibold text-[#8c8b8b] "
              end={6}
              duration={5}
            />{" "}
            <span className="text-5xl text-green-300">+</span>
          </div>
          <div className="bg-color-card  bg-opacity-100 shadow-2xl absolute w-full h-[20px] rounded-full blur-lg"></div>
          <div className="bg-color-card shadow-2xl border border-color-border flex items-center justify-center rounded-2xl  lg:px-4 px-2 py-1 gap-2  w-full">
            <Flag color="#47FA92" />
            <p className=" text-[#c3bdbd]">Proyectos</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full rounded-2xl  border bg-[#101010] border-[#202020] p-[0.3rem]">
        <div className="flex flex-col items-center justify-center relative gap-2 border border-[#202020]   rounded-2xl lg:px-4 px-2 md:py-2 py-2  w-full h-full  ">
          <div className="flex items-center justify-center  gap-1">
            <CountUp
              className="text-7xl font-semibold  text-[#8c8b8b] "
              end={2}
              duration={5}
            />{" "}
            <span className="text-5xl text-green-300">+</span>
          </div>
          <div className="bg-color-card  bg-opacity-100 shadow-2xl absolute w-full h-[20px] rounded-full blur-lg"></div>

          <div className="bg-color-card shadow-2xl border border-color-border flex items-center justify-center rounded-2xl  lg:px-4 px-2 py-1 gap-2  w-full">
            <Startup color="#47FA92" />
            <p className=" text-[#c3bdbd]">Startup</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full rounded-2xl  border bg-[#101010] border-[#202020] p-[0.3rem]">
        <div className="flex flex-col items-center justify-center relative gap-2 border border-[#202020]   rounded-2xl lg:px-4 px-2 md:py-2 py-2  w-full h-full  ">
          <div className="flex items-center justify-center  gap-1">
            <CountUp
              className="text-7xl font-semibold   text-[#8c8b8b]"
              end={1}
              duration={5}
            />{" "}
            <span className="text-5xl text-green-300">+</span>
          </div>
          <div className="bg-color-card  bg-opacity-100 shadow-2xl absolute w-full h-[20px] rounded-full blur-lg"></div>

          <div className="bg-color-card shadow-2xl border border-color-border flex items-center justify-center rounded-2xl  lg:px-4 px-2 py-1 gap-2 w-full">
            <Estrella color="#47FA92" />
            <p className=" text-[#c3bdbd]">Experiencia</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-color-card border border-color-border hover:border-[#4c4f55] transition-all duration-500 hover:bg-color-border rounded-xl p-2  md:hidden ">
        <a href="/Yonatan_Llanto.pdf" download={"Yonatan_Llanto.pdf"}>
          <div className="relative flex items-center justify-center  w-full h-full">
            <p className=" pr-2 text-green-300 text-base font-medium  xl:block">
              Curriculum
            </p>{" "}
            <div className="">
              <Download color="#a2a1a1" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
