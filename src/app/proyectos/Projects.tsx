import React from "react";
import { projects } from "@/libs/Projects-realizados";
import Image from "next/image";
import { Github, Links } from "./svg/fondo";

export const Projects = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 w-full h-full">
        {projects.map((item, index) => (
          <div
            className="bg-border-general flex flex-col items-center gap-2  py-2 "
            key={index}
          >
            <div className="flex flex-row items-center gap-2 px-2">
              <Image
                className="w-full h-full object-cover rounded-2xl "
                width={800}
                height={600}
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className="flex  items-center justify-between w-full z-50 px-4">
              <p className="text-[#c3bdbd] font-semibold text-lg">
                {item.title}
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-color-card border border-color-border hover:border-[#4c4f55] transition-all duration-500 hover:bg-color-border rounded-xl p-2 cursor-pointer">
                  <Github color="#a2a1a1" />
                </div>
                <div className="bg-color-card border border-color-border hover:border-[#4c4f55] transition-all duration-500 hover:bg-color-border rounded-xl p-2 cursor-pointer">
                  <Links color="#a2a1a1" />
                </div>
              </div>
              <p className="text-[#c3bdbd] font-semibold text-lg">
                {item.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
