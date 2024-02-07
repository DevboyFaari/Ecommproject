import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import BodyImg from "./BodyImg";
import Sneakerdata from "./Sneakerdata";
import Body from "./Body";
import PhotoFooter from "./PhotoFooter";
import Footer from "./Footer";

// import Tuspi from "./tuspi";

function App() {
  return (
    <div>
      <Navbar />
      <BodyImg />
      <Sneakerdata />
      <Body />
      <PhotoFooter />
      <Footer />
      {/* <Tuspi /> */}
    </div>
  );
}

export default App;
