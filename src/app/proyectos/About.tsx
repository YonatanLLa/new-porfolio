// {
//   img: "/PERFIL-TRANSP.png",
// },
// {
//   img: "/CONOCI-TRANS.png",
// },

// {
//   img: "/EXPER-TRANSP.png",
// },

import { cn } from "@/libs/utils";
import Marquee from "@/components/magicui/Marquee";
import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    img: "/about/prueba1.png",
    title: "Conocimiento",
  },
  {
    img: "/about/prueba2.png",
    title: "Experiencia",
  },
  {
    img: "/about/prueba3.png",
    title: "Habilidades",
  },
];

// const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <figure
      className={cn(
        "relative w-80  overflow-hidden rounded-xl  "
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01]",
        // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] "
      )}
    >
      <div>
        <p className="text-[#c3bdbd] font-semibold text-lg text-center">
          {title}
        </p>

        <div className="flex flex-col justify-center  items-center gap-2 h-[200px] w-[300px]  bg-border-general">
          <Image
            className="w-full h-full object-contain rounded-lg "
            width={800}
            height={600}
            alt=""
            src={img}
          />
        </div>
      </div>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl  bg-background  md:shadow-xl">
      <Marquee className="[--duration:20s]">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#151515] dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#151515] dark:from-background"></div>

      <div className="absolute w-full h-full bg-[#151515] opacity-10 dark:from-background z-10"></div>
      <Link
        href="/"
        className="absolute bottom-10 z-50 bg-green-400 w-40 h-12 rounded-xl border-4 border-black-400  text-color-border grid place-items-center hover:bg-green-500 transition-colors duration-300"
      >
        <p className="text-base font-medium">Acerca de</p>
      </Link>
    </div>
  );
};

export default MarqueeDemo;
