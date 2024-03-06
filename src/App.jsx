import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import LoadingSpinner from "./LoadingSpinner";
import ImgContainer from "./ImgContainer";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [warning, setWarning] = useState("");
  const [timer, setTimer] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  const generateNewRequest = () => {
    if (timer <= 0) {
      setIsLoaded(false);
      setWarning("");
      setTimer(10);
      setIsActive(false);
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    }
  };

  return (
    <>
      <Header isActive={isActive} generateNewRequest={generateNewRequest} />
      {!isLoaded && <LoadingSpinner />}

      {isLoaded && (
        <ImgContainer
          generateNewRequest={generateNewRequest}
          isActive={isActive}
          isActiveHandler={setIsActive}
          warning={warning}
          warningHandler={setWarning}
          isLoadedHandler={setIsLoaded}
          timer={timer}
          timerHandler={setTimer}
        />
      )}
    </>
  );
};

export default App;
