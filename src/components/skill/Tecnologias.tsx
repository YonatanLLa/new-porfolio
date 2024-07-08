import React from "react";
import { Tec } from "../svg/title-icons";
import { tecnologiaData } from "@/utils/tecnologia-data";

export const Tecnologias = () => {
  return (
    <div className="bg-border-general flex items-center  flex-col gap-2 w-full h-full">
      <div className="flex  flex-col items-center justify-center w-full py-1">
        <div className="flex items-center justify-center gap-1">
          <Tec color="#47FA92" />
          <h3 className="text-[#717071]">Tecnologias</h3>
        </div>
        <p className="text-[#c3bdbd] font-semibold text-lg px-2 text-center">
          Especializado en JavaScript y TypeScript
        </p>
      </div>
      <div className=" w-full h-[1px] bg-[#202020] "></div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-4 w-full h-full pb-4 py-2">
        {tecnologiaData.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-border-especifico rounded-lg  flex items-center gap-2  p-1"
            >
              <div className="flex items-center justify-center p-2 rounded-lg bg-[#202020]">
                {item.icon}
              </div>
              <p className="text-[#c3bdbd]  ">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
