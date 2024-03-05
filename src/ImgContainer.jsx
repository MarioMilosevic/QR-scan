import { useState } from "react";
import scanner from "./assets/scanner.png";
import Button from "./components/Button";
import Timer from "./components/Timer";
const ImgContainer = ({ warning }) => {
  const [timer, setTimer] = useState(10);
  const decrementTimer = () => {
    setTimer((prev) => prev - 1);
  };
  const [color, setColor] = useState("bg-green-400");

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
            <Button />
          </div>
        </div>
      </div>
      <Timer timer={timer} decrementTimer={decrementTimer} changeColor={() => setColor("bg-red-400")}/>
      {/* <span className="self-center h-8 text-2xl">{timer} s</span> */}

      <div>
        <button className="border border-black px-4 py-2 rounded-lg ">
          Download
        </button>
      </div>
    </div>
  );
};

export default ImgContainer;
