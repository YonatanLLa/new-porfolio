import Image from "next/image";

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
              Soy un <span className="text-green-400">Programador</span>
            </p>
          </div>
        </div>

        <div>
          <p>Resume cv</p>
        </div>
      </section>
      <section>
        <span>peru</span>
        <span>Programador</span>
        <span>UNJFSC</span>
      </section>

      <section>
        <div>
          <p>WhatsApp me</p>
        </div>
        <div>
          <p>Telegram</p>
        </div>
      </section>
    </div>
  );
};
