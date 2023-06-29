import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import Marketcontent from "./Marketcontent";
import Marketsettings from "./Marketsettings";
const Home = () => {
  return (
    <>
      <Container fluid>
        <Navbar />
        <div className="row">
          <div className="col-3">
            <Marketsettings />
          </div>
          <div className="col-9">
            <Marketcontent />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
