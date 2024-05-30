import {
  JavaScript,
  TypeScript,
  ToJavaScript,
  ToTypeScript,
  ReactJs,
  NextJs,
  Html,
  Css,
  Tailwind,
  Golang,
  ToGolang,
  ToNodeJs,
  NodeJs,
  NestJs,
  Express,
  Prisma,
  Postgresql,
  Mysql,
  MongoDB,
  Docker,
  Aws,
  Sequelize,
} from "../svg/IncosSkills";

export const Skills = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full h-full">
      <div className=" gap-4 border border-[#202020] bg-[#101010]  rounded-2xl ">
        <div className=" relative flex items-center justify-center w-full h-full">
          <div className=" bg-[#101010] absolute h-[98%] w-[98%] rounded-3xl z-10 opacity-95 "></div>
          <div className=" absolute right-2 z-0 bottom-2">
            <JavaScript color="#a2a1a1" />
          </div>
          <div className=" rounded-lg bg-[#101010] opacity-60  border border-color-border p-1 m-1 gap-1 absolute z-10 flex items-center justify-center flex-wrap">
            <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
              <ToJavaScript color="#d1cdcd" />
            </div>
            <p className="text-md text-[#d1cdcd] font-normal">JavaScript</p>
          </div>
        </div>
      </div>
      <div className=" border border-[#202020] bg-[#101010]  rounded-2xl ">
        <div className=" relative flex items-center justify-center w-full h-full ">
          <div className=" bg-[#101010] absolute h-[98%] w-[98%] rounded-3xl z-10 opacity-95 "></div>
          <div className=" absolute right-2 z-0 bottom-2">
            <TypeScript color="#a2a1a1" />
          </div>
          <div className=" rounded-lg bg-[#101010] opacity-60  border border-color-border p-1 m-1 gap-1 absolute z-10 flex items-center justify-center flex-wrap">
            <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
              <ToTypeScript color="#d1cdcd" />
            </div>
            <p className="text-md text-[#d1cdcd] font-normal">TipeScript</p>
          </div>
        </div>
      </div>
      <div className=" border  border-[#202020] bg-[#101010] col-start-3 col-end-5 rounded-2xl flex items-center justify-around px-2 relative">
        {/* fondo */}
        <div className=" border border-[#202020] absolute h-[80%] w-[70%] z-10 rounded-2xl "></div>
        {/* <div className=" border border-[#202020] absolute h-[70%] w-[60%] z-10 rounded-2xl "></div> */}
        {/* <div className=" border border-[#202020] absolute h-[60%] w-[50%] z-10 rounded-2xl "></div> */}
        {/* <div className=" border border-color-card absolute h-[50%] w-[20%] z-10 rounded-2xl "></div> */}

        <div className=" rounded-lg bg-[#101010]  border border-color-border p-1 gap-1 z-10 flex items-center justify-center flex-wrap">
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <ReactJs color="#949292" />
          </div>
          <p className="text-md text-[#949292] font-normal">ReactJs</p>
        </div>
        <div className=" rounded-lg bg-[#101010]  border border-color-border p-1 gap-1 z-10 flex items-center justify-center flex-wrap">
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center p-2">
            <NextJs color="#949292" />
          </div>
          <p className="text-md text-[#949292] font-normal">NextJs</p>
        </div>
      </div>
      <div className="border  border-[#202020] bg-[#101010] row-span-2 row-end-4  rounded-2xl p-2 flex items-center justify-around flex-col gap-1 relative">
        <div className=" border border-[#202020] absolute h-[80%] w-[70%] z-10 rounded-2xl "></div>

        <div className=" rounded-lg bg-[#101010]  border border-color-border m-1 p-1 gap-1 z-10 flex items-center xl:justify-start justify-center w-full flex-wrap">
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <Html color="#949292" />
          </div>
          <p className="text-md text-[#949292] font-normal">Html</p>
        </div>
        <div className=" rounded-lg bg-[#101010]  border border-color-border m-1 p-1 gap-1 z-10 flex items-center xl:justify-start justify-center w-full flex-wrap">
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <Css color="#949292" />
          </div>
          <p className="text-md text-[#949292] font-normal">Css</p>
        </div>
        <div className=" rounded-lg bg-[#101010]  border border-color-border m-1 p-1 gap-1 z-10 flex items-center xl:justify-start justify-center w-full flex-wrap">
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <Tailwind color="#949292" />
          </div>
          <p className="text-md text-[#949292] font-normal">Tailwind</p>
        </div>
      </div>
      <div className="border  border-[#202020] bg-[#101010] col-start-2 col-end-4 grid place-items-center rounded-2xl">
        <div className="flex items-center justify-center  bg-black  ">
          <h2 className="tecnolia-text text-5xl font-bold  absolute">
            Tecnologias
          </h2>
        </div>
      </div>
      <div className="  border-[#202020] bg-[#101010]  rounded-2xl">
        <div className=" relative flex items-center justify-center w-full h-full">
          <div className=" bg-[#101010] absolute h-[90%] w-[90%] z-10 opacity-95 "></div>
          <div className=" absolute right-2 z-0 bottom-2">
            <Golang color="#a2a1a1" />
          </div>
          <div className=" rounded-lg bg-[#101010] opacity-60  border border-color-border m-1 p-1 gap-1 absolute z-10 flex items-center justify-center flex-wrap">
            <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
              <ToGolang color="#d1cdcd" />
            </div>
            <p className="text-md text-[#d1cdcd] font-normal">Golang</p>
          </div>
        </div>
      </div>
      <div className="  border-[#202020] bg-[#101010] col-start-2 col-end-4  rounded-2xl flex gap-2 flex-col w-full p-2">
        <div className="flex xl:gap-4 gap-2 justify-center">
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <NestJs color="#838282" />
          </div>
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <Express color="#838282" />
          </div>
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <Prisma color="#838282" />
          </div>
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <Postgresql color="#838282" />
          </div>
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <Sequelize color="#838282" />
          </div>
        </div>
        <div className="flex xl:gap-4 gap-2 justify-center">
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <Mysql color="#838282" />
          </div>
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <MongoDB color="#838282" />
          </div>
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <Docker color="#838282" />
          </div>
          <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
            <Aws color="#838282" />
          </div>
        </div>
      </div>
      <div className="  border-[#202020] bg-[#101010]  rounded-2xl">
        <div className=" relative flex items-center justify-center w-full h-full">
          <div className=" bg-[#101010] absolute h-[90%] w-[90%] z-10 opacity-95 "></div>
          <div className=" absolute right-2 z-0 bottom-2">
            <NodeJs color="#a2a1a1" />
          </div>
          <div className=" rounded-lg bg-[#101010] opacity-60  border border-color-border m-1 p-1 gap-1 absolute z-10 flex items-center justify-center flex-wrap">
            <div className="bg-color-card  rounded-lg w-10 h-10 grid place-items-center">
              <ToNodeJs color="#d1cdcd" />
            </div>
            <p className="text-md text-[#d1cdcd] font-normal">NodeJs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
