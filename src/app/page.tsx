import {
  AboutMy,
  Contact,
  Experience,
  Project,
  Skills,
  Start,
} from "@/components/bento/components";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="lg:grid lg:grid-cols-7 lg:grid-rows-5 lg:h-screen lg:p-4 bg-[#0b0c0d] gap-4 max-w-[1600px] w-full max-h-[900px]">
        <section className="border border-[#2e2e2e] bg-[#151719] col-span-3 row-span-2 rounded-lg">
          <AboutMy />
        </section>
        <section className="border border-[#2e2e2e] bg-[#151719] col-start-4 col-end-8 row-span-3 rounded-lg">
          <Project />
        </section>
        <section className="border border-[#2e2e2e] bg-[#151719] col-span-3 rounded-lg">
          <Start />
        </section>
        <section className="border border-[#2e2e2e] bg-[#151719] rounded-lg row-start-4 row-end-6 col-span-3">
          <Skills />
        </section>
        <div className="grid grid-cols-2 gap-4 col-span-4 row-start-4 row-end-6">
          <section className="border border-[#2e2e2e] bg-[#151719] rounded-lg col-span-1">
            <Experience />
          </section>
          <section className="border border-[#2e2e2e] bg-[#151719] col-span-1 rounded-lg">
            <Contact />
          </section>
        </div>
      </div>
    </main>
  );
}
