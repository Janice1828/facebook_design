import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { PiShareFatBold } from "react-icons/pi";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import Groupdata from "../Groups/Groupdata";
const Groupcard = (props) => {
  return (
    <>
      <div>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <p className="mb-0">{props.groupName}</p>
                <small style={{ fontSize: "13px" }}>{props.userName}</small>
              </Card.Header>
              <Card.Body>
                <Card.Text>{props.content}</Card.Text>
                <Card.Img src={props.image}></Card.Img>
                <Card.Footer>
                  <div className="d-flex justify-content-between">
                    <span className="d-flex gap-2 align-items-center">
                      <AiTwotoneLike></AiTwotoneLike>
                      <span> {props.like}</span>
                    </span>
                    <span>{props.comment}</span>
                    <span>{props.share}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-around">
                    <button class="reButtons">
                      <AiTwotoneLike></AiTwotoneLike>
                      <strong>Like</strong>
                    </button>
                    <button class="reButtons">
                      <FaRegCommentAlt></FaRegCommentAlt>
                      <strong>Comment</strong>
                    </button>
                    <button class="reButtons">
                      <PiShareFatBold></PiShareFatBold>
                      <strong>Share</strong>
                    </button>
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
        <div className="mb-4">
          <Groupcard
            groupName={val.groupName}
            userName={val.userName}
            image={val.image}
            content={val.content}
            like={val.like}
            comment={val.comment}
            share={val.shares}
          />
        </div>
      ))}
    </>
  );
};

export default Groupcontent;
