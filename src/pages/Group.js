import React from "react";
import Navbar from "../components/Navbar";
import Shortcuts from "../components/Shortcuts";
import Newsfeed from "../components/Newsfeed";
import Contacts from "../components/Contacts";
import { Container } from "react-bootstrap";
import Groupcontent from "../pageContent/Groupcontent";
const Group = () => {
  return (
    <>
      <Container fluid>
        <Navbar />
        <div className="row">
          <div className="col-4">
            <Shortcuts />
          </div>
          <div className="col-4">
            <Groupcontent />
          </div>
          <div className="col-4">
            <Contacts />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Group;
