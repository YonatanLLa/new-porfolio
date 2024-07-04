import React from "react";
import {
  BackEnd,
  Configruracion,
  Disenio,
  FrontEnd,
  Proceso,
} from "../svg/title-icons";

export const Aspectos = () => {
  return (
    <div className="flex gap-2 flex-col items-center justify-center">
      <div className=" py-1 text-center">
        <div className="flex items-center justify-center gap-1">
          <Proceso color="#47FA92" />
          <p className=" text-[#717071]   ">Proceso de trabajo</p>
        </div>
        <p
          className="text-[#c3bdbd] font-semibold
          text-lg "
        >
          Aspectos destacados del flujo de trabajo
        </p>
      </div>
      <div className=" w-full h-[1px] bg-[#202020] "></div>
      <div></div>
      <div className="grid grid-cols-2  gap-2  w-full h-full px-4 ">
        <div className="bg-border-especifico rounded-lg text-sm p-[.4rem] flex items-center gap-2">
          <div className="flex items-center justify-center p-2 rounded-lg bg-[#202020]">
            <Disenio color="#717071" />
          </div>
          <p className="text-[#c3bdbd]  text-base ">Planificación y Diseño</p>
        </div>
        <div className="bg-border-especifico rounded-lg text-base p-[.4rem] flex items-center gap-2">
          <div className="flex items-center justify-center p-2 rounded-lg bg-[#202020]">
            <Configruracion color="#717071" />
          </div>
          <p className="text-[#c3bdbd]  text-base ">Configurar Entorno</p>
        </div>
        <div className="bg-border-especifico rounded-lg text-base p-[.4rem] flex items-center gap-2">
          <div className="flex items-center justify-center p-2 rounded-lg bg-[#202020]">
            <FrontEnd color="#717071" />
          </div>
          <p className="text-[#c3bdbd]  text-base ">Desarrollo Front-end</p>
        </div>
        <div className="bg-border-especifico rounded-lg text-base p-[.4rem] flex items-center gap-2">
          <div className="flex items-center justify-center p-2 rounded-lg bg-[#202020]">
            <BackEnd color="#717071" />
          </div>
          <p className="text-[#c3bdbd]  text-base ">Desarrollo Back-end</p>
        </div>
      </div>
    </div>
  );
};
