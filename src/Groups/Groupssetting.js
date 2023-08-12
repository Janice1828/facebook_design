import React from "react";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { MdGroups3 } from "react-icons/md";
import { Row, Col, Form } from "react-bootstrap";
import Images from "../img/feature.jpg";
import internship from "../img/groups/interngroup.jpg";
import react from "../img/groups/react.png";
import internNepal from "../img/groups/internnepal.jpg";
import internsathi from "../img/groups/internsathiImg.png";
import leapfrog from "../img/groups/leapfrog.png";
import confession from "../img/groups/confession.jpg";
import infoDev from "../img/groups/infodev.jpg";
import fuseMachine from "../img/groups/fusemachines.jpg";
import bajra from "../img/groups/bajratecj.png";
import kumarijob from "../img/groups/kumarijob.jpg";
import internapply from "../img/groups/intern.jpg";
import jobs from "../img/groups/job.jpg"
import nepalitroop from "../img/groups/nt.png";
const Groupssetting = () => {
  const iconStyle={
    height:"30px",width:"30px" ,background:"#bcc0bc",padding:"5px", borderRadius:"50%"
 }
  return (
    <>
      <div className="marketsettin w-25">
        <Row className="d-flex flex-column gap-3 ">
          <Col>
            <h6>Groups</h6>
          </Col>
          <Col className="d-flex gap-2">
            <h6 style={{ width: "100%" }}>
              <Form style={{ width: "100%" }}>
                <Form.Control placeholder="Search groups" style={{borderRadius:"30px", width:"90%"}}></Form.Control>
              </Form>
            </h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <BsNewspaper style={iconStyle} />
            <h6>Your Feed</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <AiOutlineCompass style={iconStyle}></AiOutlineCompass>
            <h6>Discover</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <MdGroups3 style={iconStyle}></MdGroups3>
            <h6>Your Groups</h6>
          </Col>
          <Col className="d-flex gap-2 border-bottom pb-3 cursor-pointer">
            <h6 style={{background:"#bfe9f4",color:"#3838aa" ,width:"90%", padding:"10px 0px", textAlign:"center"}}>Create New Group</h6>
          </Col>
          <Col className="d-flex gap-2">
            <h5>Grous You Have Joined</h5>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={internship}
              height="40px"
              width="40px"
              style={{ borderRadius: "4px" }}
            />
            <h6>It Internship and jobs</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={react}
              height="40px"
              width="40px"
              style={{ borderRadius: "4px" }}
            />
            <h6>react js developer</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={internNepal}
              height="40px"
              width="40px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Intern Nepal</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={internsathi}
              height="40px"
              width="40px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Internsathi</h6>
          </Col>

          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={jobs}
              height="40px"
              width="40px"
              style={{ borderRadius: "4px" }}
            />
            <h6>It jobs in nepal</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={internapply}
              height="40px"
              width="40px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Intern Apply</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={leapfrog}
              height="40px"
              width="40px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Leapfrog</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={confession}
              height="40px"
              width="40px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Padmashree Confession</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={infoDev}
              height="40px"
              width="40px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Info Developers</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={fuseMachine}
              height="40px"
              width="40px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Fuse Machines</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={bajra}
              height="40px"
              width="40px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Bajra Technologies</h6>
          </Col>

          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={kumarijob}
              height="40px"
              width="40px"
              style={{ borderRadius: "4px" }}
            />
            <h6>Kumari Jobs</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer align-items-center">
            <img
              src={nepalitroop}
              height="40px"
              width="40px"
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
