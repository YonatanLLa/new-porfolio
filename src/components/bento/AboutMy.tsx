import Image from "next/image";
import { Download, Location, Autodidacta, Scoold, Course } from "../svg/Icons";
// border-[#7c7c7c]
export const AboutMy = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <section className="rounded-lg shadow-lg flex justify-between w-full">
        <div className="flex items-center gap-4">
          <div className="border-[1px] border-[#7c7c7c] rounded-lg relative w-[120px] h-[120px]">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat bg-center mix-blend-lighten opacity-80 rounded-lg"
              style={{ backgroundImage: "url('/profile.png')" }}
            ></div>
          </div>
          <div>
            <div className="bg-[#202225] flex items-center justify-center rounded-3xl p-2 gap-2">
              <div className="w-[8px] h-[8px] rounded-full bg-green-500"></div>{" "}
              <p className=" text-[#a2a1a1] text-sm">
                Disponible para trabajar
              </p>
            </div>
            <p className="text-2xl font-bold py-1">Yonatan Llanto</p>
            <p className="text-[#a2a1a1] text-sm">
              Soy un <span className="text-green-400">Programador|</span>
            </p>
          </div>
        </div>

        <div className="flex h-[30px]   items-center ">
          <p className=" pr-2 text-green-300 font-medium">Curriculum</p>
          {/* <div className="bg-[#202225] "> */}
          <div className="bg-[#202225] rounded-md p-1">
            <Download />
          </div>
          {/* </div> */}
        </div>
      </section>
      <section className="flex items-center justify-between w-full bg-black-400 p-2 my-2 rounded-lg">
        <div className="flex items-center gap-1 bg-black-300 rounded-3xl p-1">
          <p>Peru</p>
          <Location />
        </div>
        <div className="flex items-center gap-1 bg-black-300 rounded-3xl p-1">
          <p>Autodidacta</p>
          <Autodidacta />
        </div>
        <div className="flex items-center gap-1 bg-black-300 rounded-3xl p-1">
          <p>Ing. Electronica</p>
          <Scoold />
        </div>
        <div className="flex items-center gap-1 bg-black-300 rounded-3xl p-1">
          <p>bootcamp</p>
          <Course />
        </div>
      </section>

      <section className="flex items-center justify-center w-full gap-4">
        <div className="bg-[#202225] rounded-lg p-2 w-full ">
          <p className="text-center">WhatsApp me</p>
        </div>
        <div className="bg-[#202225] rounded-lg p-2 w-full">
          <p className="text-center">Telegram</p>
        </div>
      </section>
    </div>
  );
};
