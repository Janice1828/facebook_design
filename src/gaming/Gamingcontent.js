import React from "react";
import gamingImg from "../img/blog-1.jpg";
import Gamingdata from "./Gamingdata";
const GamingcontentCard = (props) => {
  return (
    <div>
      <div className="position-relative mt-5">
        <img src={props.img} alt="Gaming Image" height="200px" width="170px" />
        <p
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "20px",
            color: "#fff",
          }}
        >
          {props.title}
        </p>
      </div>
    </div>
  );
};
const Gamingcontent = () => {
  return (
    <>
      <div>
        <h3>Recently Played</h3>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "25% 25% 25% 25%" }}>
        {Gamingdata.map((va) => (
          <div key={va.id}>
            <GamingcontentCard img={va.img} title={va.title} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Gamingcontent;
