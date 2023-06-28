import React from "react";
import Navbar from "../components/Navbar";
import Shortcuts from "../components/Shortcuts";
import Contacts from "../components/Contacts";
import { Container } from "react-bootstrap";
import Marketcontent from "../pageContent/Marketcontent";
const Home = () => {
  return (
    <>
      <Container fluid>
        <Navbar />
        <div className="row">
          <div className="col-4">
            <Shortcuts />
          </div>
          <div className="col-4">
            <Marketcontent />
          </div>
          <div className="col-4">
            <Contacts />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
