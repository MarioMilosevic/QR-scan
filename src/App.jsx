import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import LoadingSpinner from "./LoadingSpinner";
import ImgContainer from "./ImgContainer";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [warning, setWarning] = useState("");
  const [cursor, setCursor] = useState('cursor-not-allowed')
  const [color, setColor] = useState("bg-green-400");
  const [generateButton, setGenerateButton] = useState("cursor-not-allowed");
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);  
    }, 2000);
  }, []);

  // const decrementTimer = () => {
  //   setTimer((prev) => prev - 1);
  // };

  const generateNewRequest = () => {
    if(timer <= 0) {
      setIsLoaded(false)
      setColor("bg-green-400")
      setCursor('cursor-not-allowed')
      setGenerateButton('cursor-not-allowed')
      setWarning('')
      setTimer(10)
      setTimeout(() => {
        setIsLoaded(true);  
      }, 2000);
    }
  }


  return (
    <>
      <Header cursor={cursor} generateNewRequest={generateNewRequest}/>
      {!isLoaded && <LoadingSpinner />}

      {isLoaded && <ImgContainer generateNewRequest={generateNewRequest} cursor={cursor} warning={warning} cursorHandler={setCursor} warningHandler={setWarning} isLoadedHandler={setIsLoaded} color={color} colorHandler={setColor} generateButton={generateButton} generateButtonHandler={setGenerateButton} timer={timer} timerHandler={setTimer}/>}
    </>
  );
};

export default App;
