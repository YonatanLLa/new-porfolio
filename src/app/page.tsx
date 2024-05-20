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
    <main className=" ">
      <div className="grid grid-cols-8 grid-rows-5 h-screen p-8 gap-8">
        <section className="border-2 border-red-500 col-span-3 row-span-2 rounded-lg">
          <AboutMy />
        </section>
        <section className="border-2 border-blue-500 col-start-4 col-end-9 row-span-3 rounded-lg">
          <Project />
        </section>
        <section className="border-2 border-green-500 col-span-3 rounded-lg">
          <Start />
        </section>
        <section className="border-2 border-yellow-500 rounded-lg row-end-6 row-start-4 col-span-3">
          <Skills />
        </section>
        <div className="grid grid-cols-subgrid gap-4 col-span-6 row-start-4 row-end-6">
          <section className="border-2 border-pink-500 rounded-lg col-span-3 grid-end-4">
            <Experience />
          </section>
          <section className="border-2 border-purple-500 col-span-2 rounded-lg">
            <Contact />
          </section>
        </div>
      </div>
    </main>
  );
}
