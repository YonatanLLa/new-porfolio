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
export const AboutMy = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-1 h-full">
      <section className="rounded-lg shadow-lg flex justify-between w-full">
        <div className="flex items-center gap-4">
          <div className="border-[1px] border-[#606060] rounded-lg relative w-[100px] h-[100px]">
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
            <p className="text-2xl font-bold py-1 text-[#8c8b8b]">
              Yonatan Llanto
            </p>
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
      <section className="lg:flex flex-wrap items-center justify-between w-full bg-[#202225] border border-[#25282b] p-2 my-2 rounded-lg">
        <div className="flex items-center gap-2 bg-[#2c2f33] rounded-3xl px-3 py-1 text-sm">
          <Location color="#47FA92" />
          <p className="text-[#bdbbbb]">Perú</p>
        </div>
        <div className="flex items-center gap-2 bg-[#2c2f33] border border-[#33363b] rounded-3xl px-3 py-1 text-sm">
          <Autodidacta color="#47FA92" />
          <p className="text-[#bdbbbb]">Autodidacta</p>
        </div>
        <div className="flex items-center gap-2 bg-[#2c2f33] border border-[#33363b] rounded-3xl px-3 py-1 text-sm">
          <Scoold color="#47FA92" />
          <p className="text-[#bdbbbb]">Ing. Electronica</p>
        </div>
        <div className="flex items-center gap-2 bg-[#2c2f33] border border-[#33363b] rounded-3xl px-3 py-1 text-sm">
          <Course color="#47FA92" />
          <p className="text-[#bdbbbb]">bootcamp</p>
        </div>
      </section>

      <section className="flex items-center justify-center w-full gap-4 ">
        <div className="flex items-center justify-center gap-2 bg-[#202225] border border-[#25282b] rounded-lg p-2 w-full ">
          <WhatsApp color="#47FA92" />
          <p className="text-center text-[#bdbbbb]">WhatsApp</p>
        </div>
        <div className="flex items-center justify-center gap-2 bg-[#202225] border border-[#25282b] rounded-lg p-2 w-full">
          <Telegram color="#47FA92" />
          <p className="text-center text-[#bdbbbb]">Telegram</p>
        </div>
      </section>
    </div>
  );
};
