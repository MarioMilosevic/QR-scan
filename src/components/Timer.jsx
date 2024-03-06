import { useRef, useEffect } from "react";
const Timer = ({ timer, decrementTimer, warningHandler, isActiveHandler }) => {
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      decrementTimer();
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timerId.current);
      warningHandler("Time is up !");
      isActiveHandler(true);
    }
  }, [timer]);

  return <span className="self-center h-8 text-2xl">{timer} s</span>;
};

export default Timer;
