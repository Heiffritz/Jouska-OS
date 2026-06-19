import Window from "./Window";
import { contacts } from "../../data/portfolioData";

interface Props {
  onClose: () => void;
}

export default function ContactWindow({
  onClose
}: Props) {
  return (
    <Window
      title="Contact"
      onClose={onClose}
    >
      <div style={{ color: "black" }}>
        {contacts.map(contact => (
          <div
            key={contact.label}
            style={{
              marginBottom: "12px"
            }}
          >
            <strong>
              {contact.label}
            </strong>

            <p>
              {contact.value}
            </p>
          </div>
        ))}
      </div>
    </Window>
  );
}