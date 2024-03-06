import { useRef, useEffect } from "react";
const Timer = ({
  timer,
  decrementTimer,
  changeImgColor,
  changeGenerateBtnCursor,
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
      changeImgColor();
      changeGenerateBtnCursor();
      cursorHandler();
      warningHandler("Time is up !");
    }
  }, [timer]);

  return <span className="self-center h-8 text-2xl">{timer} s</span>;
};

export default Timer;
