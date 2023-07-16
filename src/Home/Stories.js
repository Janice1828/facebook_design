import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import profile from "../img/people10.jpg";
import { GrAddCircle } from "react-icons/gr";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import Storiescard from "./Storiescard";
const Stories = () => {
  const [data, setData] = useState([]);
  const storiesDetails = async () => {
    const resonse = await axios.get("https://reqres.in/api/users?page=2");
    setData(resonse.data.data);
  };
  useEffect(() => {
    storiesDetails();
  }, []);
  return (
    <>
      <div className="d-flex gap-2" id="story">
        <div>
          <Card style={{ height: "230px" }}>
            <Card.Body>
              <img
                src={profile}
                alt="Stories Img"
                height="150px"
                width="125px"
                style={{
                  borderTopRightRadius: "10px",
                  borderTopRightRadius: "10px",
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
                <GrAddCircle style={{ color: "white" }}></GrAddCircle>
                <span>Create Story</span>
              </div>
            </Card.Body>
          </Card>
        </div>
        <OwlCarousel
          items={3}
          className="owl-theme rtl"
          loop={false}
          nav
          margin={8}
        >
          {data.map((val) => (
            <div key={val.id}>
              <Storiescard
                name={val.first_name}
                imgName={val.avatar}
                profile={val.avatar}
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
};
export default Stories;
