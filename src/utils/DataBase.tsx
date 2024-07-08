import { Skill } from "@/interface/skills";
import {
  Node,
  SpringBoot,
  Net,
  Express,
  Postgresql,
  Mysql,
  MongoDB,
  MysqlRes,
  SQLite,
} from "@/components/svg/IncosSkills";
import { Skills } from "@/components/skill/Icons";
export const Database: Skill[] = [
  {
    name: "PostgreSQL",
    icon: <Postgresql color={"#717071"} />,
  },
  {
    name: "MySQL",
    icon: <MysqlRes color={"#717071"} />,
  },
  {
    name: "SQLite",
    icon: <SQLite color={"#717071"} />,
  },
  {
    name: "MongoDB",
    icon: <MongoDB color={"#717071"} />,
  },
];
