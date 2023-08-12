import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { PiShareFatBold } from "react-icons/pi";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import {BiLike} from "react-icons/bi"
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
                <Card.Text style={{lineHeight:"21px"}}>{props.content}</Card.Text>
                <Card.Img src={props.image}></Card.Img>
                <Card.Footer>
                  <div className="d-flex justify-content-between">
                    <span className="d-flex justify-content-between align-items-center gap-1">
                      <AiTwotoneLike></AiTwotoneLike>
                      <span> {props.like}</span>
                    </span>
                    <div className="d-flex gap-3">
                    <span>{props.comment}</span>
                    <span>{props.share}</span>
                  </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-around">
                    <button class="reButtons">
                      <BiLike style={{color:"##877f7f"}}></BiLike>
                      <span>Like</span>
                    </button>
                    <button class="reButtons">
                      <FaRegCommentAlt style={{color:"##877f7f"}}></FaRegCommentAlt>
                      <span>Comment</span>
                    </button>
                    <button class="reButtons">
                      <PiShareFatBold style={{color:"##877f7f"}}></PiShareFatBold>
                      <span>Share</span>
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
