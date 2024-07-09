import StyleGithub from "./bento/StyleGithub";
import { AnimatedListDemo } from "./bento/Testimonios";
import { Aspectos } from "./bento/Aspectos";
import MarqueeDemo from "./bento/Project";
import { Github, Instagram, Linkedin } from "./svg/red-social";
import { Elegirme } from "./svg/title-icons";
export const Project = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-8 lg:grid-rows-5 gap-4 w-full h-full">
      {/* carrusel de proyectos */}
      <div className=" lg:col-span-5 lg:row-span-3 bg-border-general">
        {/* <p className="text-3xl font-bold">carrusel de proyectos</p>
         */}
        <MarqueeDemo />
      </div>
      {/* Red social */}
      <div className=" lg:col-span-3 lg:col-end-9 lg:row-span-1 ">
        <div className="flex items-center h-full gap-4 w-full justify-evenly">
          <div className="bg-border-especifico w-full h-full rounded-2xl flex flex-col py-4 lg:py-0 gap-1 items-center justify-center">
            <Github color="#47FA92" />
            <p className="text-[#c3bdbd] text-base">Github</p>
          </div>
          <div className="bg-border-especifico w-full h-full rounded-2xl flex flex-col py-4 lg:py-0 gap-1 items-center justify-center">
            <Linkedin color="#47FA92" />
            <p className="text-[#c3bdbd] text-base">Linkedin</p>
          </div>
          <div className="bg-border-especifico w-full h-full rounded-2xl flex flex-col py-4 lg:py-0 gap-1 items-center justify-center">
            <Instagram color="#47FA92" />
            <p className="text-[#c3bdbd] text-base">Instagram</p>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className=" lg:col-span-3 lg:col-end-9 lg:row-span-6 bg-border-general  w-full h-full">
        {/* <Services /> */}
        <div className="flex flex-col items-center justify-center py-2">
          <div className="flex items-center justify-center gap-1">
            <Elegirme color="#47FA92" />
            <p className=" text-[#717071]  ">¿Por qué yo?</p>
          </div>
          <p className="text-[#c3bdbd] font-semibold text-lg ">
            {" "}
            ¿Por qué elegirme?
          </p>
        </div>
        <div className=" w-full h-[1px] bg-[#202020] mb-[1rem]"></div>

        <AnimatedListDemo />
      </div>
      {/* Proceso de trabajo */}
      <div className="lg:col-span-5 lg:row-span-4 bg-border-general pb-2">
        <Aspectos />
        {/* <p className="text-3xl font-bold">Project relevante 2</p> */}
      </div>
    </div>
  );
};
