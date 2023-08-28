import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import Groupcontent from "../pageContent/Groupcontent";
import Groupssetting from "./Groupssetting";
import Chats from "./Chats";
const Group = () => {
  return (
    <>
      <Container fluid>
        <Navbar />
        <div className="row gap-5">
          <div className="col-0 col-xl-3 d-xl-block d-none">
            <Groupssetting />
          </div>
          <div className="col-xl-5 col-12 px-xl-0 px-5">
            <Groupcontent />
          </div>
          <div className="d-xl-block d-none col-0 col-xl-3">
            <Chats />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Group;
