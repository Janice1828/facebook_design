import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "react-bootstrap";
import { GrAddCircle } from "react-icons/gr";
import axios from "axios";
import { IconContext } from "react-icons";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Reelscard = (props) => {
  return (
    <div className="">
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

const Reels = () => {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      const data = await response.data.data;

      return data;
    },
  });
  if (postQuery.isLoading) return <h1>Loading....</h1>;
  if (postQuery.isError) return <h1>Error loading data!!!</h1>;
  return (
    <>
      <div className="d-flex gap-2" id="story">
        <div>
          <Card style={{ height: "214px", border: "none" }}>
            <Card.Body className="p-0">
              <div
                style={{
                  borderRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "100%",
                  width: "125px",
                  background: "#f2774c",
                }}
              ></div>

              <div
                style={{
                  color: "#fff",
                  position: "relative",
                  bottom: "55px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "red",
                }}
              >
                <IconContext.Provider
                  value={{
                    size: "20px",
                    background: "white",
                    color: "white",
                  }}
                >
                  <div>
                    <GrAddCircle id="add"></GrAddCircle>
                  </div>
                </IconContext.Provider>
                <span style={{ color: "#fff" }}>Create Reels</span>
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
          {postQuery.data.map((item) => (
            <div key={item.id}>
              <Reelscard
                name={item.full_name}
                imgName={item.avatar}
                profile={item.avatar}
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
};
export default Reels;
