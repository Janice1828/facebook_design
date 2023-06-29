import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { BsHouseCheck } from "react-icons/bs";
const Marketsettings = () => {
  return (
    <>
      <div className="marketSetting shadow px-3 marketsettin">
        <Row className="flex-column gap-2">
          <Col>
            <h4 style={{ fontWeight: "700 " }}>Marketplace</h4>
          </Col>
          <Col className="d-flex gap-2">
            <Form className="w-100">
              <Form.Control
                className="w-100"
                placeholder="Search Marketplace"
              ></Form.Control>
            </Form>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6>Browse All</h6>
          </Col>

          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Notifications</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Inbox</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Buying</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Selling</h6>
          </Col>
          <Col className="d-flex gap-2">
            <h6> Create new listing</h6>
          </Col>
          <Col className="d-flex gap-2">
            <h6> Filters</h6>
          </Col>
          <Col className="d-flex gap-2">
            <h6> Kathmandu, Nepal. within 65 kilometeres</h6>
          </Col>
          <Col className="d-flex gap-2">
            <h6> Categories</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Vehicles</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Property Rentals</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Apparel</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Classifields</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Electronics</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Entertainment</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Family</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Free Stuff</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Garden & Outdoor</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Hobbies</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Home Goods</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Home Improvement Supplies</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Home Sales</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Musical Instruments</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Office Supplies</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Pet Supplies</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Sporting Goods</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Toys & Games</h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsHouseCheck style={{ fontSize: "20px" }}></BsHouseCheck>
            <h6> Buy and sell groups</h6>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Marketsettings;
