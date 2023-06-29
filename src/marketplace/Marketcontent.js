import React from "react";
import goods from "../img/blog-1.jpg";
const Marketcontent = () => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <h6>Today's Picks</h6>
          <p>Kathmandu . 65 km</p>
        </div>
        <div className="d-flex flex-column">
          <img
            src={goods}
            alt="goods"
            width="200px"
            height="230px"
            style={{ borderRadius: "20px" }}
          />
          <strong>FREE</strong>
          <p>Summer Outfit for boys</p>
          <small>Kathmandu, Bagmati</small>
        </div>
      </div>
    </>
  );
};

export default Marketcontent;
