import React from "react";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { MdGroups3 } from "react-icons/md";
import { Row, Col, Form } from "react-bootstrap";
import Images from "../img/feature.jpg";
const Groupssetting = () => {
  return (
    <>
      <div className="marketsettin w-25">
        <Row className="d-flex flex-column gap-2  ">
          <Col>
            <h6>Groups</h6>
          </Col>
          <Col className="d-flex gap-2">
            <h6 style={{ width: "100%" }}>
              <Form style={{ width: "100%" }}>
                <Form.Control placeholder="Search groups"></Form.Control>
              </Form>
            </h6>
          </Col>
          <Col className="d-flex gap-2">
            <BsNewspaper style={{ fontSize: "20px" }} />
            <h6>Your Feed</h6>
          </Col>
          <Col className="d-flex gap-2">
            <AiOutlineCompass style={{ fontSize: "20px" }}></AiOutlineCompass>
            <h6>Discover</h6>
          </Col>
          <Col className="d-flex gap-2">
            <MdGroups3 style={{ fontSize: "20px" }}></MdGroups3>
            <h6>Your Groups</h6>
          </Col>
          <Col className="d-flex gap-2">
            <h6>Create New Group</h6>
          </Col>
          <Col className="d-flex gap-2">
            <h5>Grous You Have Joined</h5>
          </Col>
          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>It Internship and jobs</h6>
          </Col>
          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>react js developer</h6>
          </Col>
          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Intern Nepal</h6>
          </Col>
          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Internsathi</h6>
          </Col>

          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>It jobs in nepal</h6>
          </Col>
          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Intern Apply</h6>
          </Col>
          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Leapfrog</h6>
          </Col>
          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Padmashree Confession</h6>
          </Col>
          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Info Developers</h6>
          </Col>
          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Fuse Machines</h6>
          </Col>
          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Bajra Technologies</h6>
          </Col>

          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Kumari Jobs</h6>
          </Col>
          <Col className="d-flex gap-2">
            <img
              src={Images}
              height="35px"
              width="35px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Nepali Troops</h6>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Groupssetting;
