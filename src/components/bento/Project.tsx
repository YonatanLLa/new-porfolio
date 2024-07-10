import { cn } from "@/libs/utils";
import Marquee from "@/components/magicui/Marquee";
import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    img: "/project/snake.png",
  },
  {
    img: "/project/red-social.png",
  },
  {
    img: "/project/ecommerce.png",
  },
  {
    img: "/project/stef.png",
  },
  {
    img: "/project/auth.png",
  },
  {
    img: "/project/arkanoi.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64  overflow-hidden rounded-xl  p-2"
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01]",
        // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] "
      )}
    >
      <div className="flex flex-row items-center gap-2 h-[140px]">
        <Image
          className="w-full h-full object-cover rounded-lg"
          width={800}
          height={600}
          alt=""
          src={img}
        />
      </div>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl  bg-background  md:shadow-xl">
      <Marquee className="[--duration:20s]">
        {firstRow.map((review, index) => (
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
        href="/proyectos"
        className="absolute bottom-10 z-50 bg-green-400 w-40 h-12 rounded-xl border-4 border-black-400  text-color-border grid place-items-center hover:bg-green-700 transition-colors duration-300"
      >
        <p className=" font-medium">Ver trabajos</p>
      </Link>
    </div>
  );
};

export default MarqueeDemo;
