import React from "react";
import {
  Database,
  Frameworks,
  Responsive,
  Seo,
  Tecnologia,
  VersionControl,
} from "./svg/Icons";

export const Experiencia = () => {
  return (
    <div className="grid grid-rows-2   grid-cols-6 gap-4 w-full  ">
      <div className=" bg-border-general  gap-4 px-2 py-2 col-span-2 flex  justify-center items-center">
        <div className="">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <Tecnologia color="#47FA92" />
          </div>
        </div>
        <div className=" flex flex-col  justify-start">
          <p className="text-[#c3bdbd] font-semibold text-lg  ">
            Lenguajes de Programación
          </p>
          <p className=" text-[#9f9d9d] ">
            Domino los lenguajes clave - HTML, CSS y JavaScript, lo que me
            permite crear soluciones web desde cero.
          </p>
        </div>
      </div>
      <div className=" bg-border-general col-span-2 flex gap-4 px-2  justify-center items-center">
        <div className="">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <Frameworks color="#47FA92" />
          </div>
        </div>
        <div className=" flex flex-col  justify-start">
          <p className="text-[#c3bdbd] font-semibold text-lg  ">
            Frameworks Avanzados
          </p>
          <p className=" text-[#9f9d9d] ">
            Especialista en frameworks avanzados como React y Next.js para crear
            aplicaciones web interactivas.
          </p>
        </div>
      </div>
      <div className=" bg-border-general col-span-2 flex gap-4 px-2  justify-center items-center">
        <div className="">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <Database color="#47FA92" />
          </div>
        </div>
        <div className=" flex flex-col  justify-start">
          <p className="text-[#c3bdbd] font-semibold text-lg  ">
            Gestión de Bases de Datos
          </p>
          <p className=" text-[#9f9d9d] ">
            Con experiencia en PostgreSQL, MySQL y MongoDB, garantizo una
            gestión efectiva de datos.
          </p>
        </div>
      </div>
      <div className=" bg-border-general col-span-2 flex gap-4 px-2  justify-center items-center">
        <div className="">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <VersionControl color="#47FA92" />
          </div>
        </div>
        <div className=" flex flex-col  justify-start">
          <p className="text-[#c3bdbd] font-semibold text-lg  ">
            Control de Versiones
          </p>
          <p className=" text-[#9f9d9d] ">
            Utilizando Git, mantengo la integridad del código, facilitando la
            colaboración y la gestión de proyectos.
          </p>
        </div>
      </div>
      <div className=" bg-border-general col-span-2 flex gap-4 px-2  justify-center items-center">
        <div className="">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <Responsive color="#47FA92" />
          </div>
        </div>
        <div className=" flex flex-col  justify-start">
          <p className="text-[#c3bdbd] font-semibold text-lg  ">
            Diseño Responsivo
          </p>
          <p className=" text-[#9f9d9d] ">
            Diseño sitios web responsivos para una experiencia de usuario
            consistente en todos los dispositivos.
          </p>
        </div>
      </div>
      <div className=" bg-border-general col-span-2 flex gap-4 px-2  justify-center items-center">
        <div className="">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <Seo color="#47FA92" />
          </div>
        </div>
        <div className=" flex flex-col  justify-start">
          <p className="text-[#c3bdbd] font-semibold text-lg  ">
            Optimización SEO
          </p>
          <p className=" text-[#9f9d9d] ">
            Implemento SEO para mejorar la visibilidad de tu sitio web en los
            motores de búsqueda.
          </p>
        </div>
      </div>
    </div>
  );
};
