import { Download } from "./svg/Icons";
import React from "react";
import { Certificado } from "./svg/Icons";

export const Certificados = () => {
  return (
    <div className="w-full h-full">
      <div className=" py-1 md:py-2 text-center flex flex-col items-center justify-center p-4 w-full">
        <div className="flex items-center justify-center gap-1">
          <Certificado color="#47FA92" />
          <p className=" text-[#717071]">Certificado</p>
        </div>
        <p
          className="text-[#c3bdbd] font-semibold
          text-lg "
        >
          Últimas Certificaciones Profesionales en Desarrollo Web
        </p>
      </div>
      <div className=" w-full h-[1px] bg-[#202020] "></div>

      <div className="flex flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-none lg:flex lg:justify-evenly lg:py-4 lg:items-center md:py-5  py-4  px-4 md:px-4 lg:px-4 gap-4 lg:gap-4 items-center lg:h-[80%]">
        <div className="flex items-center justify-between p-2 gap-4 bg-border-especifico rounded-xl w-full">
          <p className=" text-[#9f9d9d] ">
            Curso de fundamentos de arquitectura de software
          </p>
          <a href="/arquitectura.pdf" download={"arquitectura.pdf"}>
            <div className="relative">
              <div className="bg-color-card border border-color-border hover:border-[#4c4f55] transition-all duration-500 hover:bg-color-border rounded-xl p-3">
                <Download color="#a2a1a1" />
              </div>
            </div>
          </a>
        </div>
        <div className="flex items-center justify-between p-2 gap-4 bg-border-especifico rounded-xl w-full">
          <p className=" text-[#9f9d9d] ">
            Patrones en Base de Datos - Bootcamp de Backend Avanzado
          </p>
          <a href="/arquitectura.pdf" download={"arquitectura.pdf"}>
            <div className="relative">
              <div className="bg-color-card border border-color-border hover:border-[#4c4f55] transition-all duration-500 hover:bg-color-border rounded-xl p-3">
                <Download color="#a2a1a1" />
              </div>
            </div>
          </a>
        </div>
        <div className="flex items-center justify-between p-2 gap-4 bg-border-especifico rounded-xl w-full">
          <p className=" text-[#9f9d9d] ">
            Modelado de microservicios - Bootcamp de Backend Avanzado
          </p>
          <a href="/arquitectura.pdf" download={"arquitectura.pdf"}>
            <div className="relative">
              <div className="bg-color-card border border-color-border hover:border-[#4c4f55] transition-all duration-500 hover:bg-color-border rounded-xl p-3">
                <Download color="#a2a1a1" />
              </div>
            </div>
          </a>
        </div>
        <div className="flex items-center justify-between p-2 gap-4 bg-border-especifico rounded-xl w-full">
          <p className=" text-[#9f9d9d] ">
            Curso de fundamentos de arquitectura de software
          </p>
          <a href="/arquitectura.pdf" download={"arquitectura.pdf"}>
            <div className="relative">
              <div className="bg-color-card border border-color-border hover:border-[#4c4f55] transition-all duration-500 hover:bg-color-border rounded-xl p-3">
                <Download color="#a2a1a1" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
