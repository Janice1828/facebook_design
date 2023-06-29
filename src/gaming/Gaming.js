import React from "react";
import Navbar from "../components/Navbar";
import Shortcuts from "../components/Shortcuts";
import Newsfeed from "../components/Newsfeed";
import Contacts from "../components/Contacts";
import { Container } from "react-bootstrap";
import Gamingcontent from "./Gamingcontent";
import Gamingsetting from "./Gamingsetting";
const Gaming = () => {
  return (
    <>
      <Container fluid>
        <Navbar />
        <div className="row">
          <div className="col-3">
            <Gamingsetting />
          </div>
          <div className="col-9">
            <Gamingcontent />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Gaming;
