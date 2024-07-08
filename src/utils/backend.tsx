import { Skill } from "@/interface/skills";
import { Node, SpringBoot, Net, Express } from "@/components/svg/IncosSkills";
import { Skills } from "@/components/skill/Icons";
export const backend: Skill[] = [
  {
    name: "Node js",
    icon: <Node color={"#717071"} />,
  },
  {
    name: "Spring Boot",
    icon: <SpringBoot color={"#717071"} />,
  },
  {
    name: ".NET",
    icon: <Net color={"#717071"} />,
  },
  {
    name: "Express",
    icon: <Express color={"#717071"} />,
  },
];
