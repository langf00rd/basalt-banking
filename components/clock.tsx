import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // update the time every second (1000ms)
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toTimeString().substring(0, 18); // format the time as hh:mm:ss timezone

  return <p>{formattedTime}</p>;
}
