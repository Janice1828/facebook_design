import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import groupImg from "../img/feature.jpg";
const Groupcontent = () => {
  return (
    <>
      <div>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <p>IT JOBS AND INTERNS</p>
                <small>codavatar</small>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Join our winning team! 🌟
                  <br /> Codavatar is hiring for various positions and looking
                  for talented individuals to be part of our success story.
                  Apply now and take the first step towards an exciting and
                  rewarding career with us.
                  <br /> Don't miss out on this incredible opportunity! <br />
                  Apply at vacancy@codavatar.com. *Remember to define the
                  subject line to the job for which you are applying.*
                  <span variant="primary">
                    #Hiring #team #careerOpportunity
                  </span>
                </Card.Text>
                <Card.Img src={groupImg}></Card.Img>
                <Card.Footer>
                  <div className="d-flex justify-content-around">
                    <Button>Like</Button>
                    <Button>Comment</Button>
                    <Button>Share</Button>
                  </div>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Groupcontent;
