import React from "react";
import Navbar from "../components/Navbar";
import Shortcuts from "../components/Shortcuts";
import Newsfeed from "../components/Newsfeed";
import Contacts from "../components/Contacts";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-4">
          <Shortcuts />
        </div>
        <div className="col-4">
          <Newsfeed />
        </div>
        <div className="col-4">
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default Home;
