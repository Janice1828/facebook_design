import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const Products = () => <h2>Products Page</h2>;
const sideContentHome = () => {
  <h3>Side Content for Home Page</h3>;
};
const sideContentContact = () => {
  <h3>Side Content for Contact Page</h3>;
};
const sideContentAbout = () => {
  <h3>Side Content for About Page</h3>;
};
const Test = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>

      <div className="side-content">
        <Routes>
          <Route exact path="/" element={sideContentHome}></Route>
          <Route path="/about" element={sideContentAbout}></Route>
          <Route path="/contact" element={sideContentContact}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Test;
