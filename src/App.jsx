import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import LoadingSpinner from "./LoadingSpinner";
import ImgContainer from "./ImgContainer";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [timer, setTimer] = useState(10);
  const [warning, setWarning] = useState("");


  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);  
    }, 2000);
  }, []);


  // useEffect(() => {
  //   setTimeout(() => {

  //     setIsLoaded(true);
       
  //  const interval =  setInterval(() => {
  //      setTimer((prev) => {
  //        return prev - 1
  //      })
  //     }, 1000);
       
  //      return () => clearInterval(interval)
  //   }, 2000);
  // }, [ ]);

  // prvo spiner pa nakon 2 sekunde se pojavi kontejner
  // treba da odbrojava 10 sekundi i nakon toga da boja bude crvena
  // da generate button ne bude vise not-allowed vec allowed
  // klikom na button da se generise spiner i sve iz pocetka

  return (
    <>
      <Header />
      {!isLoaded && <LoadingSpinner />}
      {isLoaded && <ImgContainer  warning={warning} />}
    </>
  );
};

export default App;
