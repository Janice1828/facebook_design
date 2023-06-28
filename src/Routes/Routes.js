import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newsfeed from "../components/Newsfeed";
const Routess = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Newsfeed} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routess;
