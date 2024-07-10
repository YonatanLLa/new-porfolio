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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-6 gap-4 w-full  ">
      <div className="bg-border-general gap-2 md:gap-4 px-4 py-4 col-span-2 flex flex-col md:flex-row justify-center items-center  lg:p-2">
        <div className="md:block flex items-center md:w-auto gap-4 w-full">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <Tecnologia color="#47FA92" />
          </div>
          <p className="text-[#c3bdbd] font-semibold text-lg block md:hidden  ">
            Lenguajes de Programación
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <p className="text-[#c3bdbd] font-semibold text-lg hidden md:block  ">
            Lenguajes de Programación
          </p>
          <p className=" text-[#9f9d9d] ">
            Domino los lenguajes clave - HTML, CSS y JavaScript, lo que me
            permite crear soluciones web desde cero.
          </p>
        </div>
      </div>
      <div className=" bg-border-general gap-2 md:gap-4 px-4 py-4 col-span-2 flex flex-col md:flex-row justify-center items-center lg:p-2">
        <div className="md:block flex items-center md:w-auto gap-4 w-full">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <Frameworks color="#47FA92" />
          </div>
          <p className="text-[#c3bdbd] font-semibold text-lg block md:hidden  ">
            Frameworks Avanzados
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <p className="text-[#c3bdbd] font-semibold text-lg hidden md:block ">
            Frameworks Avanzados
          </p>
          <p className=" text-[#9f9d9d] ">
            Especialista en frameworks avanzados como React y Next.js para crear
            aplicaciones web interactivas.
          </p>
        </div>
      </div>
      <div className="bg-border-general gap-2 md:gap-4 px-4 py-4 col-span-2 flex flex-col md:flex-row justify-center items-center lg:p-2">
        <div className="md:block flex items-center md:w-auto gap-4 w-full">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex  items-center justify-center">
            <Database color="#47FA92" />
          </div>
          <p className="text-[#c3bdbd] font-semibold text-lg block md:hidden  ">
            Gestión de Bases de Datos
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <p className="text-[#c3bdbd] font-semibold text-lg hidden md:block ">
            Gestión de Bases de Datos
          </p>
          <p className=" text-[#9f9d9d] ">
            Con experiencia en PostgreSQL, MySQL y MongoDB, garantizo una
            gestión efectiva de datos.
          </p>
        </div>
      </div>
      <div className=" bg-border-general gap-2 md:gap-4 px-4 py-4 col-span-2 flex flex-col md:flex-row justify-center items-center lg:p-2 md:hidden   lg:flex">
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
      <div className=" bg-border-general gap-2 md:gap-4 px-4 py-4 col-span-2 flex flex-col md:flex-row justify-center items-center lg:p-2 md:hidden   lg:flex">
        <div className="md:block flex items-center md:w-auto gap-4 w-full">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <Responsive color="#47FA92" />
          </div>
          <p className="text-[#c3bdbd] font-semibold text-lg block md:hidden  ">
            Diseño Responsivo
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
      <div className=" bg-border-general gap-2 md:gap-4 px-4 py-4 col-span-2 flex flex-col md:flex-row justify-center items-center lg:p-2 md:hidden   lg:flex">
        <div className="md:block flex items-center md:w-auto gap-4 w-full">
          <div className=" bg-[#202020] rounded-full w-16 h-16 flex items-center justify-center">
            <Seo color="#47FA92" />
          </div>
          <p className="text-[#c3bdbd] font-semibold text-lg block md:hidden  ">
            Optimización SEO
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
    </div>
  );
};
