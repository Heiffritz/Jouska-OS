import Window from "./Window";

interface Props {
    onClose: () => void;
}

export default function AboutWindow({
    onClose
}: Props) {
    return (
        <Window
            title="About Jouska"
            onClose={onClose}
        >
            <div
                style={{
                    color: "black",
                    padding: "10px"
                }}
            >
                <h1
                    style={{
                        fontSize: "32px",
                        fontWeight: "bold",
                        marginBottom: "16px",
                        color: "black"
                    }}
                >
                    Jouska
                </h1>

                <p>
                    Student, builder, designer,
                    and Minecraft enthusiast.
                </p>

                <br />

                <p>
                    I enjoy creating worlds,
                    mods, websites, and
                    interactive experiences.
                </p>

                <br />

                <p>
                    This portfolio is inspired
                    by Windows XP.
                </p>
            </div>
        </Window>
    );
}