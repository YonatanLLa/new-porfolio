interface Project {
  title: string;
  type: string;
  url?: string;
  image: string;
  z: number;
}

export const projects: Project[] = [
  {
    title: "Wave",
    type: "FrontEnd",
    url: "https://wabeweb.vercel.app/",
    image: "/project/wave.png",
    z: 1,
  },
  {
    title: "Geor",
    type: "FrontEnd",
    url: "https://geor.pro/login#/exchange_rates",
    image: "/project/Geor.png",
    z: 2,
  },
  {
    title: "Red social",
    type: "FronEnd",
    url: "https://portafolio-yonatan.vercel.app/",
    image: "/project/portafolio.png",
    z: 3,
  },
  {
    title: "Stef",
    type: "FrontEnd",
    url: "https://steff.vercel.app/",
    image: "/project/stef.png",
    z: 4,
  },
];
