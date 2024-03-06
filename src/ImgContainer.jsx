import scanner from "./assets/scanner.png";
import Button from "./components/Button";
import Timer from "./components/Timer";

const ImgContainer = ({
  generateNewRequest,
  isActive,
  isActiveHandler,
  timer,
  timerHandler,
  warning,
  warningHandler,
}) => {
  const decrementTimer = () => {
    timerHandler((prev) => prev - 1);
  };
  const color = isActive ? "bg-red-400" : "bg-green-400";

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
            <Button clickHandler={generateNewRequest} isActive={isActive}>
              Generate
            </Button>
          </div>
        </div>
      </div>
      <Timer
        timer={timer}
        decrementTimer={decrementTimer}
        warningHandler={warningHandler}
        isActiveHandler={isActiveHandler}
      />
      <div>
        <Button
          clickHandler={() => console.log("download")}
          isActive={isActive}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default ImgContainer;
