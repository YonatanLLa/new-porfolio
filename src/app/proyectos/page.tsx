import React from "react";
import About from "./About";
import { CantidadProject } from "./CantidadProject";
import { Projects } from "./Projects";
import { Certificados } from "./Certificados";
import { Experiencia } from "./Experiencia";
import { CertificadoRes } from "./CertificadoRes";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:grid-rows-15  md:max-w-[929px]  lg:max-w-[1666px]  max-w-[439px]    h-full p-4 gap-4 w-full">
        <div className=" md:col-span-4 lg:row-span-2 lg:col-span-2 block lg:hidden">
          <Projects />
        </div>
        <div className="bg-border-general  md:col-span-2 lg:col-span-1">
          <CantidadProject />
        </div>
        <div className="  md:col-span-2 lg:col-span-1 bg-border-general lg:row-start-2">
          <About />
        </div>
        <div className=" lg:row-span-2 lg:col-span-2 hidden lg:block">
          <Projects />
        </div>
        <div className="md:col-span-4 bg-border-general lg:row-span-2 lg:col-start-4 lg:col-end-6">
          <Certificados />
        </div>

        <div className="md:col-span-2 lg:row-start-3 lg:col-span-5 ">
          <Experiencia />
        </div>
        <div className="md:col-span-2 md:block hidden lg:hidden ">
          <CertificadoRes />
        </div>
      </div>
    </div>
  );
};

export default page;
