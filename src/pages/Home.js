import React from "react";
import Navbar from "../components/Navbar";
import Shortcuts from "../components/Shortcuts";
import Newsfeed from "../components/Newsfeed";
import Contacts from "../components/Contacts";
import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Container fluid>
        <Navbar />
        <div className="row">
          <div className="col-3">
            <div className="position-fixed shortcut">
              <Shortcuts />
            </div>
          </div>
          <div className="col-6 px-5">
            <Newsfeed />
          </div>
          <div className="col-3">
            <Contacts />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
