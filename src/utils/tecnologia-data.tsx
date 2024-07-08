import { Skill } from "@/interface/skills";
import {
  JavaScriptRes,
  TypeScriptRes,
  Node,
  TypeScript,
  GolangRes,
  Java,
  CSharp,
  Python,
} from "@/components/svg/IncosSkills";
import { Skills } from "@/components/skill/Icons";
export const tecnologiaData: Skill[] = [
  {
    name: "JavaScript",
    icon: <JavaScriptRes color={"#717071"} />,
  },
  {
    name: "TypeScript",
    icon: <TypeScriptRes color={"#717071"} />,
  },
  {
    name: "Golang",
    icon: <GolangRes color={"#717071"} />,
  },
  {
    name: "Java",
    icon: <Java color={"#717071"} />,
  },
  {
    name: "C#",
    icon: <CSharp color={"#717071"} />,
  },
  {
    name: "Python",
    icon: <Python color={"#717071"} />,
  },
];
