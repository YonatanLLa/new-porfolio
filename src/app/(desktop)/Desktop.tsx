import { Backend } from "@/components/skill/Backend";
import {
  AboutMy,
  ContactForm,
  Experience,
  Skills,
  Start,
  Project,
} from "../../components/components";
import { Tecnologias } from "@/components/skill/Tecnologias";
import { DataBase } from "@/components/skill/DataBase";
import { FrontEnd } from "@/components/skill/FrontEnd";
export const Desktop = () => {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col md:grid md:grid-cols-10  md:grid-rows-13 lg:grid-cols-7 lg:grid-rows-5  p-4 gap-4 max-w-[439px]  md:max-w-[929px] lg:max-w-[1666px] w-full">
        <section className="border border-[#202020] bg-[#101010] md:col-span-6 md:row-start-1 md:row-end-3 lg:col-span-3 lg:row-span-2 rounded-2xl ">
          <AboutMy />
        </section>
        <section className="md:row-start-3 md:row-end-4 md:col-span-6 lg:col-span-3 md:hidden block">
          <Start />
        </section>
        <section className="rounded-2xl relative md:col-start-7 md:col-end-11 md:row-start-1 md:row-span-5 lg:col-start-4 lg:col-end-8 lg:row-span-3  ">
          <Project />
        </section>
        <section className="md:row-start-3 md:row-end-4 md:col-span-6 lg:col-span-3 md:block hidden">
          <Start />
        </section>
        <section className=" lg:row-start-4 lg:row-end-6 lg:col-span-3 hidden lg:block">
          <Skills />
        </section>
        <div className="grid md:col-span-6 md:row-start-4 md:row-end-7 lg:grid-cols-2 gap-4 lg:col-span-4 lg:row-start-4 lg:row-end-6">
          <section className="border border-[#202020] bg-[#101010] rounded-2xl col-span-1">
            <Experience />
          </section>
          <section className="border border-[#202020] bg-[#101010] col-span-1 rounded-2xl md:block hidden">
            <ContactForm />
          </section>
        </div>
        <div className="md:col-start-7 md:col-end-11  md:row-start-6 md:row-end-7 lg:hidden">
          <Backend />
        </div>
        <div className="md:col-span-6 md:row-start-7 md:row-end-8 bg-border-general lg:hidden">
          <Tecnologias />
        </div>
        <div className="md:col-start-7 md:col-end-11 md:row-start-7 md:row-end-8 bg-border-general lg:hidden">
          <DataBase />
        </div>
        <div className="md:col-span-10 md:row-start-8 md:row-end-9 bg-border-general lg:hidden">
          <FrontEnd />
        </div>
        <section className="border border-[#202020] bg-[#101010] col-span-1 rounded-2xl block md:hidden">
          <ContactForm />
        </section>
      </div>
    </main>
  );
};
