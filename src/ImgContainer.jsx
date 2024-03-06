import scanner from "./assets/scanner.png";
import Button from "./components/Button";
import Timer from "./components/Timer";

const ImgContainer = ({
  generateNewRequest,
  color,
  colorHandler,
  generateButton,
  generateButtonHandler,
  timer,
  timerHandler,
  warning,
  cursorHandler,
  warningHandler,
}) => {
  const decrementTimer = () => {
    timerHandler((prev) => prev - 1);
  };

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
              cursor={generateButton}
              clickHandler={generateNewRequest}
              isActive={false}
            >
              Generate
            </Button>
          </div>
        </div>
      </div>
      <Timer
        timer={timer}
        decrementTimer={decrementTimer}
        colorHandler={colorHandler}
        generateButtonHandler={generateButtonHandler}
        cursorHandler={cursorHandler}
        warningHandler={warningHandler}
      />
      <div>
        <Button
          cursor={"cursor-pointer"}
          clickHandler={() => console.log("download")}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default ImgContainer;
