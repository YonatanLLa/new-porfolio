import { Experiencia } from "../svg/title-icons";

interface Color {
  color: string;
}

export const Skills = ({ color }: Color) => {
  return (
    <>
      <Experiencia color={color} />
    </>
  );
};
