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
          <div className="col-3">
            <Groupssetting />
          </div>
          <div className="col-5">
            <Groupcontent />
          </div>
          <div className="col-3">
            <Chats />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Group;
