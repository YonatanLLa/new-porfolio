import StyleGithub from "./bento/StyleGithub";
import Services from "./bento/Services";
import { AnimatedListDemo } from "./bento/Testimonios";
import { Aspectos } from "./bento/Aspectos";
import MarqueeDemo from "./bento/Project";
import { Github, Instagram, Linkedin } from "./svg/red-social";
import { Elegirme } from "./svg/title-icons";
export const Project = () => {
  return (
    <div className="grid grid-cols-8 grid-rows-5 gap-4 w-full h-full">
      <div className=" col-span-5 row-span-3 bg-border-general">
        {/* <p className="text-3xl font-bold">carrusel de proyectos</p>
         */}
        <MarqueeDemo />
      </div>
      <div className=" col-span-3 col-end-9 row-span-1 ">
        <div className="flex items-center h-full gap-4 w-full justify-evenly">
          <div className="bg-border-especifico w-full h-full rounded-2xl flex flex-col gap-1 items-center justify-center">
            <Github color="#47FA92" />
            <p className="text-[#c3bdbd] text-base">Github</p>
          </div>
          <div className="bg-border-especifico w-full h-full rounded-2xl flex flex-col gap-1 items-center justify-center">
            <Linkedin color="#47FA92" />
            <p className="text-[#c3bdbd] text-base">Linkedin</p>
          </div>
          <div className="bg-border-especifico w-full h-full rounded-2xl flex flex-col gap-1 items-center justify-center">
            <Instagram color="#47FA92" />
            <p className="text-[#c3bdbd] text-base">Instagram</p>
          </div>
        </div>
      </div>
      <div className=" col-span-3 col-end-9 row-span-6 bg-border-general  w-full h-full">
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
      <div className="col-span-5 row-span-4 bg-border-general">
        <Aspectos />
        {/* <p className="text-3xl font-bold">Project relevante 2</p> */}
      </div>
      {/* <div className="col-start-4 col-end-6 row-span-4  bg-color-card    rounded-xl place-items-center ">
        <StyleGithub />
      </div> */}
      {/* <div className="col-start-4 col-end-9 row-span-2 border border-purple-400">
        <p className="text-3xl font-bold">Frasee</p>
      </div> */}
    </div>
  );
};
