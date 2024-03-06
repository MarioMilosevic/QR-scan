import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import LoadingSpinner from "./LoadingSpinner";
import ImgContainer from "./ImgContainer";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [warning, setWarning] = useState("");
  const [cursor, setCursor] = useState('cursor-not-allowed')

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);  
    }, 2000);
  }, []);


  return (
    <>
      <Header cursor={cursor} />
      {!isLoaded && <LoadingSpinner />}
      {isLoaded && <ImgContainer cursor={cursor} warning={warning} changeCursor={() => setCursor("cursor-pointer")}/>}
    </>
  );
};

export default App;
