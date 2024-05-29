export const Skills = () => {
  const MySkills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "VSCode",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Framer",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg",
    },
    {
      name: "Sass",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      <div className="grid grid-rows-3 gap-4 w-full h-full ">
        <div className="row-span-1 row-end-2 w-full h-full  border border-[#202020] bg-[#101010] rounded-3xl"></div>
        <div className=" row-span-2 row-end-4 w-full h-full  border border-[#202020] bg-[#101010] rounded-3xl"></div>
      </div>
      <div className="grid grid-rows-2 gap-4 w-full h-full ">
        <div className=" w-full h-full  border border-[#202020] bg-[#101010] rounded-3xl"></div>
        <div className=" w-full h-full  border border-[#202020] bg-[#101010] rounded-3xl"></div>
      </div>
    </div>
  );
};
