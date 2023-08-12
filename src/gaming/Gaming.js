import React from "react";
import Navbar from "../components/Navbar";
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
            <Gamingsetting style={{width:"100% !important", overflow:"hidden"}} />
          </div>
          <div className="col-9 px-5">
            <Gamingcontent />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Gaming;
