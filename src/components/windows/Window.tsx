interface WindowProps {
    title: string;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Window({
    title,
    onClose,
    children
}: WindowProps) {
    return (
        <div
            style={{
                position: "absolute",
                top: "80px",
                left: "160px",
                width: "600px",
                background: "#ECE9D8",
                border: "2px solid gray",
                boxShadow: "0 0 20px rgba(0,0,0,0.4)"
            }}
        >
            {/* Title Bar */}   
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
                background:
                    "linear-gradient(to right,#0A4FFF,#3D8BFF)",
                color: "white",
                fontWeight: "bold"
            }}
        >
                <span>{title}</span>

                <button
                    onClick={onClose}
                    className="
                        w-6
                        h-6
                        bg-red-500
                        hover:bg-red-600
                        border
                        border-red-800
                    "
                >
                    X
                </button>
            </div>

            {/* Content */}
            <div className="p-5">
                {children}
            </div>
        </div>
    );
}