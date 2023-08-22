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
        <div className="row pt-4 mt-3">
          <div className="col-md-3 d-none d-lg-block col-0">
            <div className="position-fixed shortcut">
              <Shortcuts />
            </div>
          </div>
          <div className="col-lg-6 px-md-5 px-0 col-12">
            <Newsfeed />
          </div>
          <div className="col-md-3 d-none d-lg-block col-0">
            <Contacts />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
