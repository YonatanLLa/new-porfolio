"use client";
import CountUp from "react-countup";
import { GithubAb, GithubLg, GithubMd } from "./svg/fondo";
import Link from "next/link";

export const CantidadProject = () => {
  return (
    <a href="https://github.com/YonatanLLa" target="_blank">
      <div className="   flex items-center justify-center relative h-full w-full z-10 px-4 py-4">
        <div className="absolute text-5xl z-0 right-1 md:hidden block ">
          <GithubLg color="#2e2e2e92" />{" "}
        </div>
        <div className="absolute text-5xl z-0 right-1 md:hidden hidden lg:block">
          <GithubAb color="#2e2e2e92" />{" "}
        </div>
        <div className="absolute text-5xl z-0 right-1 lg:hidden md:block hidden">
          <GithubMd color="#2e2e2e92" />{" "}
        </div>
        <div className="flex items-center justify-center  h-full z-10">
          <span className="text-5xl text-green-300">+</span>
          <CountUp
            className="md:text-9xl lg:text-8xl text-6xl font-semibold text-[#8c8b8b] "
            start={0}
            end={20}
            duration={5}
          />{" "}
          <span className="text-2xl md:text-4xl  lg:text-4xl text-green-300 pl-4">
            Proyectos en Github
          </span>
        </div>
      </div>
    </a>
  );
};
