import React from "react";
import goods from "../img/blog-1.jpg";
import Marketdata from "./MarketData";
const MarketCard = (props) => {
  return (
    <>
      <div>
        <div className="d-flex flex-column">
          <img
            src={props.image}
            alt="goods"
            width="200px"
            height="230px"
            style={{ borderRadius: "20px" }}
          />
          <div className="">
            <strong>{props.price}</strong>
            <p>{props.title}</p>
            <small>{props.location}</small>
          </div>
        </div>
      </div>
    </>
  );
};
const Marketcontent = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h6>Today's Picks</h6>
        <p>Kathmandu . 65 km</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "25% 25% 25% 25%" }}>
        {Marketdata.map((val) => (
          <MarketCard
            title={val.title}
            price={val.cost}
            location={val.location}
            image={val.image}
          />
        ))}
      </div>
    </>
  );
};

export default Marketcontent;
