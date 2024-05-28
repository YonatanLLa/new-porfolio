"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import {
  Download,
  Location,
  Autodidacta,
  Scoold,
  Course,
  WhatsApp,
  Telegram,
} from "../svg/Icons";

// border-[#7c7c7c]
export const AboutMy: React.FC = () => {
  const whatsappURL = `https://wa.me/918199369`;
  const telegramURL = `https://t.me/yonatanlla`;

  const [text] = useTypewriter({
    words: ["Frontend", "Backend"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-1 h-full">
      <section className="rounded-xl  flex justify-between w-full">
        <div className="flex items-center gap-4">
          <div className="border-[1px] border-[#606060] shadow-sm shadow-[#606060] rounded-xl relative w-[135px] h-[135px]">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat bg-center mix-blend-lighten opacity-80 rounded-xl"
              style={{ backgroundImage: "url('/profile.png')" }}
            ></div>
          </div>
          {/*  */}
          <div className="flex flex-col items-start py-4">
            <div className="bg-color-card  border border-color-border flex items-center justify-center rounded-3xl py-2 px-4 gap-2">
              <div className="w-[8px] h-[8px] rounded-full bg-green-500"></div>{" "}
              <p className=" text-[#c3bdbd] text-sm ">
                Disponible para trabajar
              </p>
            </div>
            <p className="text-3xl font-bold py-2 text-[#8c8b8b] p">
              Yonatan Llanto
            </p>
            <p className="text-[#a2a1a1] text-sm">
              Soy un desarrollador{" "}
              <span className="text-green-400">{text}</span>
              <span className="text-[#a2a1a1] text-sm">
                <Cursor />
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-start py-4">
          <div className="flex items-center">
            <p className=" pr-2 text-green-300 font-medium">Curriculum</p>
            {/* <div className="bg-[#202225] "> */}
            <a href="/yonatan.pdf" download={"yonatan.pdf"}>
              <div className="relative">
                <div className="bg-color-card border border-color-border hover:border-[#4c4f55] transition-all duration-500 hover:bg-color-border rounded-xl p-2">
                  <Download color="#a2a1a1" />
                </div>
              </div>
            </a>
          </div>
          {/* </div> */}
        </div>
      </section>
      <section className="lg:flex flex-wrap items-center justify-between w-full bg-color-card-container border border-color-card p-4  my-2 rounded-xl">
        <div className="flex items-center gap-2 bg-color-card border border-color-border rounded-3xl px-3 py-1 text-sm">
          <Location color="#47FA92" />
          <p className="text-[#bdbbbb]">Perú</p>
        </div>
        <div className="flex items-center gap-2 bg-color-card border border-color-border rounded-3xl px-3 py-1 text-sm">
          <Autodidacta color="#47FA92" />
          <p className="text-[#bdbbbb]">Autodidacta</p>
        </div>
        <div className="flex items-center gap-2 bg-color-card border border-color-border rounded-3xl px-3 py-1 text-sm">
          <Scoold color="#47FA92" />
          <p className="text-[#bdbbbb]">Ing. Electronica</p>
        </div>
        <div className="flex items-center gap-2 bg-color-card border border-color-border rounded-3xl px-3 py-1 text-sm">
          <Course color="#47FA92" />
          <p className="text-[#bdbbbb]">bootcamp</p>
        </div>
      </section>

      <section className="flex items-center justify-center w-full gap-4 ">
        {/* <div className="flex items-center justify-center gap-2 bg-[#202225] border border-[#25282b] rounded-xl py-4 w-full ">
          <WhatsApp color="#47FA92" />
          <p className="text-center text-[#bdbbbb]">WhatsApp</p>
        </div> */}
        <div className="w-full">
          <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <div className="inline-flex w-full gap-2 py-4 hover:animate-background-shine items-center justify-center  border border-color-card  hover:border-[#4c4f55] bg-[#191919] hover:bg-[linear-gradient(110deg,#16171a,45%,#33363b,90%,#16171a)] hover:bg-[length:200%_100%] rounded-xl text-gray-400 transition-all duration-500 ">
              <WhatsApp color="#47FA92" />
              <p className="text-center text-[#bdbbbb]">WhatsApp</p>
            </div>{" "}
          </a>
        </div>
        <div className="w-full">
          <a href={telegramURL} target="_blank" rel="noopener noreferrer">
            <div className="inline-flex w-full gap-2 py-4 hover:animate-background-shine items-center justify-center  border border-color-card hover:border-[#4c4f55] bg-[#191919] hover:bg-[linear-gradient(110deg,#16171a,45%,#33363b,90%,#16171a)] hover:bg-[length:200%_100%] rounded-xl text-gray-400  transition-all duration-500 ">
              <Telegram color="#47FA92" />
              <p className="text-center text-[#bdbbbb]">Telegram</p>
            </div>{" "}
          </a>
        </div>
      </section>
    </div>
  );
};
