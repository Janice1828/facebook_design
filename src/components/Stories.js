import React from "react";
import { Card } from "react-bootstrap";
import person from "../img/team-3.jpg";
const Stories = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <img
            src={person}
            alt="Stories Img"
            height="160px"
            width="120px"
            style={{ borderRadius: "15px" }}
          />
          <span style={{color:"#fff", position:"absolute", left:"19px", bottom:"22px"}}>Jenish Imsong</span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Stories;
