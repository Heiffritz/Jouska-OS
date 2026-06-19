import Window from "./Window";
import { projects } from "../../data/portfolioData";

interface Props {
  onClose: () => void;
}

export default function ProjectsWindow({
  onClose
}: Props) {
  return (
    <Window
      title="Projects"
      onClose={onClose}
    >
      <div
        style={{
          color: "black"
        }}
      >
        <h2>Projects</h2>

        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
              background: "white"
            }}
          >
            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <p>
              <strong>Tech:</strong>{" "}
              {project.tech.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </Window>
  );
}