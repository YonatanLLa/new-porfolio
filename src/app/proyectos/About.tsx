import React from "react";
import Link from "next/link";
import { Fondo } from "./svg/fondo";
const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 relative">
      <div className="absolute  z-1">{/* <Fondo /> */}</div>
      <div className="flex items-center justify-center w-full ">
        <div className="border-[1px] border-color-border shadow-sm  rounded-full relative w-[135px] h-[135px] ">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center mix-blend-lighten opacity-80 rounded-full"
            style={{ backgroundImage: "url('/profile.png')" }}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full  ">
        <Link
          href="/"
          className="  bg-green-400 w-40 h-12 rounded-xl border-4 border-black-400  text-color-border grid place-items-center hover:bg-green-500 transition-colors duration-300 b"
        >
          <p className="text-base font-medium">Sobre mi</p>
        </Link>
      </div>
    </div>
  );
};

export default About;
