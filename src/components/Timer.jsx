import { useRef, useEffect } from "react";
const Timer = ({
  timer,
  decrementTimer,
  colorHandler,
  generateButtonHandler,
  cursorHandler,
  warningHandler,
}) => {
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
      colorHandler("bg-red-400");
      generateButtonHandler('cursor-pointer')
      cursorHandler('cursor-pointer');
      warningHandler("Time is up !");
    }
  }, [timer]);

  return <span className="self-center h-8 text-2xl">{timer} s</span>;
};

export default Timer;
