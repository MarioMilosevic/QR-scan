import scanner from "./assets/scanner.png";
import Button from "./components/Button";
import Timer from "./components/Timer";
const ImgContainer = ({warning}) => {

  return (
    <div className="border border-black rounded-lg mt-4 flex justify-between p-4">
      <div className="flex">
        <div className="bg-green-400 p-8 rounded-lg flex items-center">
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
      <Timer />
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
