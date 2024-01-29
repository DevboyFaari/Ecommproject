import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import BodyImg from "./BodyImg";
import Sneakerdata from "./Sneakerdata";
import Body from "./Body";
// import Tuspi from "./tuspi";

function App() {
  return (
    <div>
      <Navbar />
      <BodyImg />
      <Sneakerdata />
      <Body />
      {/* <Tuspi /> */}
    </div>
  );
}

export default App;
