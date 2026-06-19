import Window from "./Window";

interface Props {
  onClose: () => void;
}

export default function GalleryWindow({
  onClose
}: Props) {
  return (
    <Window
      title="Gallery"
      onClose={onClose}
    >
      <div
        style={{
          color: "black",
          display: "grid",
          gridTemplateColumns:
            "repeat(2, 1fr)",
          gap: "10px"
        }}
      >
        <div
          style={{
            height: "150px",
            background: "#ccc"
          }}
        >
          Image 1
        </div>

        <div
          style={{
            height: "150px",
            background: "#ccc"
          }}
        >
          Image 2
        </div>

        <div
          style={{
            height: "150px",
            background: "#ccc"
          }}
        >
          Image 3
        </div>

        <div
          style={{
            height: "150px",
            background: "#ccc"
          }}
        >
          Image 4
        </div>
      </div>
    </Window>
  );
}