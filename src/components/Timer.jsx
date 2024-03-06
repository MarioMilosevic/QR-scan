import { useRef, useEffect, useState } from "react";
const Timer = ({ changeColor, changeCursor }) => {
  const [timer, setTimer] = useState(10);
  const timerId = useRef();

  const decrementTimer = () => {
    setTimer((prev) => prev - 1);
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      decrementTimer();
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timerId.current);
      changeColor();
      changeCursor()
    }
  }, [timer]);

  return <span className="self-center h-8 text-2xl">{timer} s</span>;
};

export default Timer;
