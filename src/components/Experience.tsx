import { IconsExperience } from "./svg/red-social";
import { Experiencia } from "./svg/title-icons";

export const Experience = () => {
  return (
    <div className="flex flex-col items-center md:py-1 justify-center  text-white">
      <div className="flex flex-col items-center justify-center py-2">
        <div className="flex items-center justify-center gap-1">
          <Experiencia color="#47FA92" />
          <h3 className="text-[#717071]">Experiencia</h3>
        </div>
        <p className="text-[#c3bdbd] font-semibold text-lg text-center">
          Desde el 2022 hasta la actualidad
        </p>
      </div>
      <div className=" w-full h-[1px] bg-[#202020] "></div>

      <div className="py-2 flex flex-col justify-center gap-4 pt-4 px-4">
        <div className="flex items-start   gap-2">
          <div className="mt-1 bg-[#202020] p-2 rounded-lg">
            <IconsExperience color="#717071" />
          </div>
          <div>
            <h4 className="text-lg text-[#c3bdbd]  font-semibold">
              Desarrollador Full Stack
            </h4>
            <p className="text-[#717071]">
              2023 - Presente | Colombia - Pulsodex
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2 w-full h-full relative z-20">
          <div className="mt-1 bg-[#202020] p-2 rounded-lg ">
            <IconsExperience color="#717071" />
          </div>
          <div className="w-[3px] h-[62%] rounded-full bg-[#202020]  absolute bottom-1 left-5 z-10"></div>
          <div className=" ">
            <h4 className="text-lg text-[#c3bdbd] font-semibold ">
              Desarrollador Full Stack
            </h4>
            <p className="text-[#717071]">2022 - 2023 | Proyectos Personales</p>
            <p className=" text-[#9f9d9d] ">
              Desarrollé proyectos personales con HTML, CSS, TypeScript,
              JavaScript, React.js, Next.js, Tailwind, Node.js y Golang,
              mejorando mis habilidades en diseño de software y resolución de
              problemas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
