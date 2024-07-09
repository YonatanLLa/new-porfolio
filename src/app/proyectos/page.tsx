import React from "react";
import About from "./About";
import { CantidadProject } from "./CantidadProject";
import { Projects } from "./Projects";
import { Certificados } from "./Certificados";
import { Experiencia } from "./Experiencia";

const page = () => {
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-4 grid-rows-3  max-w-[1600px]  max-h-[800px] h-full lg:p-4 gap-4 w-full">
        <div className="bg-border-general  ">
          <CantidadProject />
        </div>
        <div className=" bg-border-general row-start-2">
          <About />
        </div>
        <div className=" row-span-2 col-span-2">
          <Projects />
        </div>
        <div className=" bg-border-general row-span-2 col-start-4 col-end-6">
          <Certificados />
        </div>
        <div className=" row-start-3 col-span-5">
          <Experiencia />
        </div>
      </div>
    </div>
  );
};

export default page;
