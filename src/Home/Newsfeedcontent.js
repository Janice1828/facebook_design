import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { BiBorderBottom } from "react-icons/bi";
import { BsGlobeAmericas } from "react-icons/bs";
function Contentnews(props) {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  return (
    <div
      style={{
        width: "100%",

        padding: "0px",
        boxSizing: "border-box",
        marginTop: "20px",
      }}
    >
      <Row style={{ padding: "0px", margin: "0px" }}>
        <Col className="mb-2 p-0 w-100">
          <Toast
            show={showA}
            onClose={toggleShowA}
            style={{ width: "100%", padding: "0px" }}
          >
            <Toast.Header className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3">
                <img
                  src={props.profilePicture}
                  alt="RONB"
                  height="40px"
                  width="40px"
                  style={{ borderRadius: "50%" }}
                />
                <div>
                  <strong
                    style={{ fontSize: "15px", textTransform: "capitalize" }}
                  >
                    {props.name}
                  </strong>
                  <p style={{ display: "flex", alignItems: "center" }}>
                    {props.time}m &nbsp;
                    <BsGlobeAmericas></BsGlobeAmericas>
                  </p>
                </div>
              </div>
            </Toast.Header>
            <Toast.Body className="w-100 py-0">
              <p>{props.content}</p>
              <img
                src={props.contentImage}
                alt="Img Routine"
                style={{ height: "450px", width: "100%" }}
              />
            </Toast.Body>
            <hr />
            <div className="d-flex justify-content-between px-3">
              <div className="d-flex gap-2 align-items-center">
                <AiOutlineLike
                  style={{
                    background: "blue",
                    color: "white",
                    borderRadius: "50%",
                    padding: "3px",
                    height: "28px",
                    width: "28px",
                  }}
                ></AiOutlineLike>
                <span> {props.like} k</span>
              </div>
              <div className="d-flex gap-2">
                <div>{props.comment} comments</div>
                <div>{props.share} shares</div>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-around mb-4">
              <button
                type=""
                id="like"
                className="d-flex gap-2 align-items-center"
              >
                <AiOutlineLike class="likeIcon"></AiOutlineLike>
                <strong>Like</strong>
              </button>
              <button
                type=""
                id="comment"
                className="d-flex gap-2 align-items-center"
              >
                <FaRegCommentAlt class="commentIcon"></FaRegCommentAlt>
                <strong>Comment</strong>
              </button>
              <button
                type=""
                id="share"
                className="d-flex gap-2 align-items-center"
              >
                <PiShareFatThin class="shareIcon"></PiShareFatThin>
                <strong>Share</strong>
              </button>
            </div>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}
export default Contentnews;
