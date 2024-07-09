import { Project } from "@/components/Project";
import React from "react";
import { projects } from "@/libs/Projects-realizados";

export const Projects = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full ">
        {projects.map((item, index) => (
          <div className="bg-border-general relative  " key={index}>
            <div className=" flex justify-center ">
              <div
                className={`w-32 h-32 absolute -top-[7rem] bg-[#000] border  border-[#202020] rounded-full clip-half `}
              ></div>
            </div>
            <div className=" z-50">
              <p>{item.title}</p>
              <p>{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
