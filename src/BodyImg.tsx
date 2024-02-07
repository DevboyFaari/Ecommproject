import React from "react";
import "./BodyImg.css";
import { FaArrowRight } from "react-icons/fa";
// import Sneakerdata from "./Sneakerdata";

const BodyImg = () => {
  return (
    <div className="main">
      <img src="./bigshoes.png" alt="color" className="body-img grow-image" />
      <div className="shoes">
        <h1>AIRPRO X3</h1>
        <h1>AIRPRO X3</h1>
        <h1>AIRPRO X3</h1>
        <button className="rounded-button">
          <FaArrowRight className="arrow-right" />
          Shop Collection
        </button>
        <div className="unbelievable">
          <h1>UNBELIEVABLE</h1>
          <h3 className="speed">SPEED.COMFORT.</h3>
        </div>
        {/* <Sneakerdata /> */}
      </div>
    </div>
  );
};

export default BodyImg;
