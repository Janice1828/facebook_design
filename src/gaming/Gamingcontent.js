import React from "react";
import gamingImg from "../img/blog-1.jpg";
const Gamingcontent = () => {
  return (
    <div>
      <div>
        <h3>Recently Played</h3>
      </div>
      <div className="position-relative">
        <img src={gamingImg} alt="Gaming Image" height="200px" width="170px" />
        <p style={{ position: "absolute", bottom: "10px", color: "#fff" }}>
          Words With Friends
        </p>
      </div>
    </div>
  );
};

export default Gamingcontent;
