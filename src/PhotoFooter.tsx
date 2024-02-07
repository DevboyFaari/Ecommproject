import React from "react";
import "./PhotoFooter.css";

const PhotoFooter = () => {
  return (
    <div className="footer-image">
      <img src="./modelgirl.jpg" alt="model in sneakers" />
      <div className="black">
        <div className="text-container">
          <h1>Limited Stock Available!</h1>
          <h1 className="airpro">AirPro X3. Turbocharged.</h1>
          <p>
            Step into a world where every stride is an adventure, and every
            journey is an opportunity to rediscover the joy of walking. The
            footwear is not just a boot; it's a statement, a commitment to
            embracing life's paths with confidence and enthusiasm
          </p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search shoes..."
              className="search-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoFooter;
