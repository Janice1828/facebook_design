import React from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ModalInput from "./Modal";
import profilePicture from "../img/home/jenish.jpg"
import DismissibleExample from "./Toast";
import {RiGalleryFill} from "react-icons/ri";
import Stories from "../Home/Stories";
import Reels from "../Home/Reels";
import {BiHappy} from "react-icons/bi";
import {BsFillCameraReelsFill} from "react-icons/bs"
const Newsfeed = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="px-4">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="reelsstories">
            <Col sm={12}>
              <Nav variant="" className="d-flex justify-content-around">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="text-dark">
                    Stories
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="text-dark">
                    Reels
                  </Nav.Link>
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
        <Card className="mt-3" id="inp">
          <Card.Body>
            <div className="d-flex align-items-center">
           <img src={profilePicture} alt="Image" style={{height:"30px", width:"30px", borderRadius:"50%"}}/>
            <ModalInput
              show={modalShow}
              onHide={() => setModalShow(false)}
              width="180px"
            />
            </div>

            <hr />
            <div className="d-flex justify-content-around">
              <Card.Text className="d-flex gap-2">
              <BsFillCameraReelsFill style={{color:"red", height:"25px", width:"25px"}}></BsFillCameraReelsFill>
                <p>Live Video</p>
              </Card.Text>
              <Card.Text className="d-flex gap-2">
              <RiGalleryFill style={{color:"green", height:"25px", width:"25px"}}></RiGalleryFill>
                <p>Photo/Video</p>
              </Card.Text>
              <Card.Text className="d-flex gap-2">
               <BiHappy style={{color:"yellow", height:"25px", width:"25px"}}></BiHappy>
                <p>Feeling/Activity</p>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        <DismissibleExample />
      </div>
    </>
  );
};

export default Newsfeed;
