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
          <div className="col-xxl-3 col-0 d-none d-xxl-block">
            <Marketsettings />
          </div>
          <div className="col-xxl-9 col-12">
            <Marketcontent />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
