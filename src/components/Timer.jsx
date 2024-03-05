import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(10);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timerId.current);
      console.log("kraj");
    }
  }, [timer]);

  return <span className="self-center h-8 text-2xl">{timer} s</span>;
};

export default Timer;
