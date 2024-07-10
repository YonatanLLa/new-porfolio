"use client";
import CountUp from "react-countup";

export const CantidadProject = () => {
  return (
    <div className=" ">
      <div className="flex items-center justify-center   gap-1 h-full">
        <CountUp
          className="text-7xl font-semibold text-[#8c8b8b] "
          end={30}
          duration={5}
        />{" "}
        <span className="text-5xl text-green-300">+</span>
      </div>
    </div>
  );
};
