import React from "react";
import gamingImg from "../img/blog-1.jpg";
import Gamingdata from "./Gamingdata";
const GamingcontentCard = (props) => {
  return (
    <div>
      <div className="position-relative">
        <img src={props.img} alt="Gaming Image" height="250px" width="100%" style={{cursor:"pointer"}} />
      
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
      <div style={{ display: "grid", gridTemplateColumns: "23% 23% 23% 23%",gridGap:"20px", marginTop:"30px" }}>
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
