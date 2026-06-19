import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] =
    useState("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        )
      );
    };

    updateClock();

    const interval =
      setInterval(updateClock, 1000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div style={{ color: "white" }}>
      {time}
    </div>
  );
}

export default Clock;