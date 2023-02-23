import React from "react";
import RoundOne from "./roundeDesign/RoundOne";
import RoundTwo from "./roundeDesign/RoundTwo";
import RoundThree from "./roundeDesign/RoundThree";
import RoundFour from "./roundeDesign/RoundFour";
import RoundFive from "./roundeDesign/RoundFive";
import Home from "./components/Home";
function App() {
  return ( 
    <div className=" w-full h-screen font-bodyfont text-textColor bg-black relative overflow-hidden">
      <div className=" max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home/>
      </div>
      <div className=" w-full h-full absolute top-0 z-10">
        <RoundOne/>
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive/>
      </div>
    </div>
  )
}
export default App;