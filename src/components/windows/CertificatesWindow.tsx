import Window from "./Window";
import { certificates } from "../../data/portfolioData";

interface Props {
  onClose: () => void;
}

export default function CertificatesWindow({
  onClose
}: Props) {
  return (
    <Window
      title="Certificates"
      onClose={onClose}
    >
      <div style={{ color: "black" }}>
        {certificates.map(cert => (
          <div
            key={cert.name}
            style={{
              marginBottom: "10px"
            }}
          >
            <strong>
              {cert.name}
            </strong>

            <p>
              {cert.issuer}
            </p>

            <p>
              {cert.year}
            </p>
          </div>
        ))}
      </div>
    </Window>
  );
}