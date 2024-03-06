import { useState } from "react";
import scanner from "./assets/scanner.png";
import Button from "./components/Button";
import Timer from "./components/Timer";

const ImgContainer = ({ warning, cursorHandler, warningHandler, isLoadedHandler }) => {
  const [color, setColor] = useState("bg-green-400");
  const [generateButton, setGenerateButton] = useState("cursor-not-allowed");
  const [timer, setTimer] = useState(10);

  const decrementTimer = () => {
    setTimer((prev) => prev - 1);
  };

  const generateNewRequest = () => {
    if(timer <= 0) {
      isLoadedHandler(false)
      setColor("bg-green-400")
      cursorHandler('cursor-not-allowed')
      setGenerateButton('cursor-not-allowed')
      warningHandler('')
      setTimer(10)
      setTimeout(() => {
        isLoadedHandler(true);  
      }, 2000);
    }
  }

  //   kada istekne tajmer da buttonima dam cursor pointer i onClick dje ce da stave isLoaded na false, timer na 10 boju zelenu
  return (
    <div className="border border-black rounded-lg mt-4 flex justify-between p-4">
      <div className="flex">
        <div className={`${color} p-8 rounded-lg flex items-center`}>
          <div className="text-center">
            <img
              src={scanner}
              alt="qr scanner"
              className="w-[150px] h-[150px] mb-8"
            />
            <p className="mb-2">{warning}</p>
            <Button
              value={"Generate"}
              cursor={generateButton}
              clickHandler={generateNewRequest}
            />
          </div>
        </div>
      </div>
      <Timer
        timer={timer}
        decrementTimer={decrementTimer}
        changeImgColor={() => setColor("bg-red-400")}
        changeGenerateBtnCursor={() => setGenerateButton("cursor-pointer")}
        cursorHandler={cursorHandler}
        warningHandler={warningHandler}
      />
      <div>
        <Button
          value={"Download"}
          cursor={"cursor-pointer"}
          clickHandler={() => console.log("download")}
        />
      </div>
    </div>
  );
};

export default ImgContainer;
