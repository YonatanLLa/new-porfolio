"use client";

import { cn } from "@/libs/utils";
import { AnimatedList } from "@/components/magicui/Animated-list";
import {
  Creatividad,
  Desarrollo,
  Innovacion,
  Profesional,
  Puntualidad,
  Resultados,
} from "../svg/elegirma";

interface Item {
  name: string;
  description: string;
  icon: JSX.Element;
  color: string;
  key: number;
}

let notifications = [
  {
    name: "Innovación Constante",
    description: "@yonatanlla",
    icon: <Innovacion color="#717071" />,
    color: "#232528",
  },
  {
    name: "Profesionalismo Garantizado",
    description: "@yonatanlla",
    icon: <Profesional color="#717071" />,
    color: "#232528",
  },
  {
    name: "Puntualidad Asegurada",
    description: "@yonatanlla",
    icon: <Puntualidad color="#717071" />,
    color: "#232528",
  },
  {
    name: "Creatividad Destacada",
    description: "@yonatanlla",
    icon: <Creatividad color="#717071" />,
    color: "#232528",
  },

  {
    name: "Desarrollo Eficiente",
    description: "@yonatanlla",
    icon: <Desarrollo color="#717071" />,
    color: "#232528",
  },
  {
    name: "Resultados Confiables",
    description: "@yonatanlla",
    icon: <Resultados color="#717071" />,
    color: "#232528",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre  dark:text-white ">
            <span className="text-[#c3bdbd] text-base">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          <p className="text-[#717071]  ">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo() {
  return (
    <div className="relative flex max-h-[328px] min-h-[328px] w-full max-w-[32rem] flex-col overflow-hidden rounded-2xl   bg-background px-2 shadow-lg">
      <AnimatedList>
        {notifications.map((item, idx: number) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
      <div className="pointer-events-none rounded-2xl absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#151515] dark:from-background"></div>
    </div>
  );
}
