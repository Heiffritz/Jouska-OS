import Window from "./Window";
import { skills } from "../../data/portfolioData";

interface Props {
  onClose: () => void;
}

export default function SkillsWindow({
  onClose
}: Props) {
  return (
    <Window
      title="Skills"
      onClose={onClose}
    >
      <div style={{ color: "black" }}>
        <h2>Programming</h2>

        <ul>
          {skills.programming.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <h2>Design</h2>

        <ul>
          {skills.design.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <h2>Minecraft</h2>

        <ul>
          {skills.minecraft.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </Window>
  );
}