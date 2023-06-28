import React from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ModalInput from "./Modal";

import { BiSolidUser } from "react-icons/bi";
import DismissibleExample from "./Toast";
import Stories from "./Stories";
import Reels from "./Reels";
const Newsfeed = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={12}>
            <Nav variant="" className="d-flex justify-content-around">
              <Nav.Item>
                <Nav.Link eventKey="first">Stories</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Reels</Nav.Link>
              </Nav.Item>
            </Nav>
            <hr />
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Stories />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Reels />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Card>
        <Card.Body>
          <BiSolidUser></BiSolidUser>
          <ModalInput show={modalShow} onHide={() => setModalShow(false)} />
          <hr />
          <div className="d-flex justify-content-around">
            <Card.Text className="d-flex">
              <BiSolidUser></BiSolidUser>
              <p>Live Video</p>
            </Card.Text>
            <Card.Text className="d-flex">
              <BiSolidUser></BiSolidUser>
              <p>Photo/Video</p>
            </Card.Text>
            <Card.Text className="d-flex">
              <BiSolidUser></BiSolidUser>
              <p>Feeling/Activity</p>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
      <DismissibleExample />
    </>
  );
};

export default Newsfeed;
