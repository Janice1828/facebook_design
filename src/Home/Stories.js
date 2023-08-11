import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import profile from "../img/people/team-3.jpg";
import { GrAddCircle } from "react-icons/gr";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import Storiescard from "./Storiescard";
import four from "../img/people/four.jpg"
import two from "../img/people/two.jpg"
import three from "../img/people/three.jpg"
import five from "../img/people/five.jpg"
const Stories = () => {
  const data=[
    {
      avatar:four,
      first_name:"Jenisha"
    },
    {
      avatar:two,
      first_name:"Samkishya"
    },
    {
      avatar:three,
      first_name:"Shristi"
    },
    {
      avatar:four,
      first_name:"Shristi"
    }
  ]
  return (
    <>
      <div className="d-flex" id="story">
        <div>
          <Card style={{ height: "200px" }} className="border-0">
            <Card.Body className="p-0">
              <img
                src={profile}
                alt="Stories Img"
                height="160px"
                width="140px"
                style={{
                 borderRadius:"10px"
                }}
              />
              <div
                style={{
                  color: "white !important",
                  position: "relative",
                  bottom: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GrAddCircle style={{color:"#fff",background:"white", height:"30px", width:"30px" ,padding:"4px", borderRadius:"50%"}}></GrAddCircle>
                <span>Create Story</span>
              </div>
            </Card.Body>
          </Card>
        </div>
       
          {data.map((val) => (
            <div key={val.id}>
              <Storiescard
                name={val.first_name}
                imgName={val.avatar}
                profile={val.avatar}
              />
            </div>
          ))}
     
      </div>
    </>
  );
};
export default Stories;
