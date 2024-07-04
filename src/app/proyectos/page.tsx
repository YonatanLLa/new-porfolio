import React from "react";
import About from "./About";
import { CantidadProject } from "./CantidadProject";
import { Projects } from "./Projects";
import { Certificados } from "./Certificados";
import { Experiencia } from "./Experiencia";

const page = () => {
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-4 grid-rows-3  max-w-[1600px] h-screen lg:p-4 gap-4">
        <div className="border border-red-500 ">
          <CantidadProject />
        </div>
        <div className="border border-yellow-500">
          <About />
        </div>
        <div className="border border-blue-500">
          <Projects />
        </div>
        <div className="border border-green-500">
          <Certificados />
        </div>
        <div className="border border-purple-500">
          <Experiencia />
        </div>
      </div>
    </div>
  );
};

export default page;
