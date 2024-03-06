import { useState } from "react";
import scanner from "./assets/scanner.png";
import Button from "./components/Button";
import Timer from "./components/Timer";

const ImgContainer = ({ warning, changeCursor }) => {
  const [color, setColor] = useState("bg-green-400");
  const [generateButton, setGenerateButton] = useState('cursor-not-allowed')


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
            <Button value={"Generate"} cursor={generateButton} />
          </div>
        </div>
      </div>
      <Timer
        changeColor={() => setColor("bg-red-400")}
        changeGenerateBtnCursor ={() => setGenerateButton('cursor-pointer')}
        changeCursor={changeCursor}
      />
      <div>
        <Button value={"Download"} cursor={"cursor-pointer"}/>
      </div>
    </div>
  );
};

export default ImgContainer;
