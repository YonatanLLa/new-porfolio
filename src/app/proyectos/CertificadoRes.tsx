import React from "react";
import { Download, Responsive, Seo, VersionControl } from "./svg/Icons";

export const CertificadoRes = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
      <div className=" bg-border-general gap-2 md:gap-4 px-2 py-4 col-span-2 flex flex-col md:flex-row justify-center items-center">
        <div className="md:block flex items-center md:w-auto gap-4 w-full">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <Responsive color="#47FA92" />
          </div>
          <p className="text-[#c3bdbd] font-semibold text-lg block md:hidden  ">
            Lenguajes de Programación
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <p className="text-[#c3bdbd] font-semibold text-lg hidden md:block ">
            Diseño Responsivo
          </p>
          <p className=" text-[#9f9d9d] ">
            Diseño sitios web responsivos para una experiencia de usuario
            consistente en todos los dispositivos.
          </p>
        </div>
      </div>
      <div className=" bg-border-general gap-2 md:gap-4 px-2 py-4 col-span-2 flex flex-col md:flex-row justify-center items-center h-full">
        <div className="md:block flex items-center md:w-auto gap-4 w-full">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <Seo color="#47FA92" />
          </div>
          <p className="text-[#c3bdbd] font-semibold text-lg block md:hidden  ">
            Lenguajes de Programación
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <p className="text-[#c3bdbd] font-semibold text-lg hidden md:block ">
            Optimización SEO
          </p>
          <p className=" text-[#9f9d9d] ">
            Implemento SEO para mejorar la visibilidad de tu sitio web en los
            motores de búsqueda.
          </p>
        </div>
      </div>
      <div className=" bg-border-general gap-2 md:gap-4 px-2 py-4 col-span-2 flex flex-col md:flex-row justify-center items-center">
        <div className="md:block flex items-center md:w-auto gap-4 w-full">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <VersionControl color="#47FA92" />
          </div>
          <p className="text-[#c3bdbd] font-semibold text-lg block md:hidden  ">
            Control de Versiones
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <p className="text-[#c3bdbd] font-semibold text-lg hidden md:block ">
            Control de Versiones
          </p>
          <p className=" text-[#9f9d9d] ">
            Utilizando Git, mantengo la integridad del código, facilitando la
            colaboración y la gestión de proyectos.
          </p>
        </div>
      </div>
    </div>
  );
};
