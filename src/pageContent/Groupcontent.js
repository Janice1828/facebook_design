import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Groupdata from "../Groups/Groupdata";
const Groupcard = (props) => {
  return (
    <>
      <div>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <p>{props.groupName}</p>
                <small>{props.userName}</small>
              </Card.Header>
              <Card.Body>
                <Card.Text>{props.content}</Card.Text>
                <Card.Img src={props.image}></Card.Img>
                <Card.Footer>
                  <div className="d-flex justify-content-between">
                    <span>{props.like}</span>
                    <span>{props.comment}</span>
                    <span>{props.share}</span>
                  </div>
                  <div className="d-flex justify-content-around">
                    <Button id="reButtons">Like</Button>
                    <Button id="reButtons">Comment</Button>
                    <Button id="reButtons">Share</Button>
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
const Groupcontent = () => {
  return (
    <>
      {Groupdata.map((val) => (
        <Groupcard
          groupName={val.groupName}
          userName={val.userName}
          image={val.image}
          content={val.content}
          like={val.like}
          comment={val.comment}
          share={val.shares}
        />
      ))}
    </>
  );
};

export default Groupcontent;
