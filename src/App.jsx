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
      <Header cursor={cursor} changeCursor={() => setCursor()}/>
      {!isLoaded && <LoadingSpinner />}
      {isLoaded && <ImgContainer cursor={cursor} warning={warning} />}
    </>
  );
};

export default App;
