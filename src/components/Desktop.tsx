import {
  AboutMy,
  Contact,
  Experience,
  Project,
  Skills,
  Start,
} from "./bento/components";
export const Desktop = () => {
  return (
    <main className="flex justify-center">
      <div className="lg:grid lg:grid-cols-7 lg:grid-rows-5 lg:p-4  gap-4 max-w-[1600px] w-full">
        <section className="border border-[#202020] bg-[#101010] col-span-3 row-span-2 rounded-3xl">
          <AboutMy />
        </section>
        <section className="border border-[#202020] bg-[#101010] col-start-4 col-end-8 row-span-3 rounded-3xl">
          <Project />
        </section>
        <section className="border border-[#202020] bg-[#101010] col-span-3 rounded-3xl">
          <Start />
        </section>
        <section className="border border-[#202020] bg-[#101010] rounded-3xl row-start-4 row-end-6 col-span-3">
          <Skills />
        </section>
        <div className="grid grid-cols-2 gap-4 col-span-4 row-start-4 row-end-6">
          <section className="border border-[#202020] bg-[#101010] rounded-3xl col-span-1">
            <Experience />
          </section>
          <section className="border border-[#202020] bg-[#101010] col-span-1 rounded-3xl">
            <Contact />
          </section>
        </div>
      </div>
    </main>
  );
};