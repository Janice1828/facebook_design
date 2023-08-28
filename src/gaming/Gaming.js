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
          <div className="col-0 col-xl-3 d-none d-xl-block">
            <Gamingsetting style={{width:"100% !important", overflow:"hidden"}} />
          </div>
          <div className="col-xl-9 px-5 col-12">
            <Gamingcontent />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Gaming;
