import React, { useEffect, useState } from "react";
import MarketCard from "./MarketContentCard";
import { MdLocationPin } from "react-icons/md";
import axios from "axios";
const Marketcontent = () => {
  const [Marketdata, setMarketData] = useState([]);
  const MarketdataFunction = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setMarketData(response.data);
  };
  useEffect(() => {
    MarketdataFunction();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h5>Today's Picks</h5>
        <p className="marketLocation">
          <MdLocationPin></MdLocationPin> Kathmandu . 65 km
        </p>
      </div>
      <hr />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "25% 25% 25% 25%",
          marginTop: "50px",
        }}
      >
        {Marketdata.map((val) => (
          <div key={val.id}>
            <MarketCard
              title={val.title}
              price={val.price}
              location={val.location}
              image={val.image}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Marketcontent;
