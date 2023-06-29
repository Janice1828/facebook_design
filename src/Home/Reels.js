import React from "react";
import { Card } from "react-bootstrap";
import profile from "../img/blog-1.jpg";
import storyImg from "../img/team-2.jpg";
import person from "../img/team-3.jpg";
import { BsHouseCheck } from "react-icons/bs";
const Storiescard = (props) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <img
            src={props.imgName}
            alt="Stories Img"
            height="180px"
            width="125px"
            style={{ borderRadius: "10px" }}
          />
          <img
            src={props.profile}
            alt="Profile"
            style={{
              position: "absolute",
              left: "26px",
              bottom: "140px",
            }}
            id="profileImg"
          />
          <span
            style={{
              color: "#fff",
              position: "absolute",
              left: "28px",
              bottom: "22px",
            }}
          >
            {props.name}
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};
const storiesDetails = [
  {
    storyName: "Tej maya Limbu",
    img: storyImg,
    profile: profile,
  },
  {
    storyName: "Maya Imsong",
    img: storyImg,
    profile: profile,
  },
  {
    storyName: "Sushma Imsong",
    img: storyImg,
    profile: profile,
  },
  {
    storyName: "Bishnu Chemjong",
    img: storyImg,
    profile: profile,
  },
  {
    storyName: "Dipa Rai",
    img: storyImg,
    profile: profile,
  },
  {
    storyName: "Madan Chemjong",
    img: storyImg,
    profile: profile,
  },
];
const Reels = () => {
  return (
    <>
      <div className="d-flex" id="story">
        <div>
          <Card style={{ height: "214px" }}>
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
                  color: "#fff",
                  position: "relative",
                  bottom: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",

                  justifyContent: "center",
                  alignItems: "center",
                  color: "red",
                }}
              >
                <BsHouseCheck></BsHouseCheck>
                <span>Jenish Limbu</span>
              </div>
            </Card.Body>
          </Card>
        </div>

        {storiesDetails.map((val) => (
          <Storiescard
            name={val.storyName}
            imgName={val.img}
            profile={val.profile}
          />
        ))}
      </div>
    </>
  );
};
export default Reels;
