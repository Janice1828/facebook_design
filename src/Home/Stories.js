import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import profile from "../img/people10.jpg";
import { GrAdd } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import { BsHouseCheck } from "react-icons/bs";
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
                <GrAddCircle
                  style={{ background: "blue", color: "white" }}
                ></GrAddCircle>
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
