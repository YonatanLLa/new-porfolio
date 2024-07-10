interface Project {
  title: string;
  type: string;
  image: string;
  z: number;
}

export const projects: Project[] = [
  {
    title: "Pulsodex",
    type: "Fullstack",
    image: "/project/auth.png",
    z: 1,
  },
  {
    title: "Bookhub",
    type: "Fullstack",
    image: "/project/ecommerce.png",
    z: 2,
  },
  {
    title: "Red social",
    type: "Fullstack",
    image: "/project/red-social.png",
    z: 3,
  },
  {
    title: "Red social",
    type: "Backend",
    image: "/project/snake.png",
    z: 4,
  },
];
