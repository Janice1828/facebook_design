import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
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
            <Toast.Header className="d-flex justify-content-between align-items-center border-0">
              <div className="d-flex gap-1">
                <img
                  src={props.profilePicture}
                  alt="RONB"
                  height="40px"
                  width="40px"
                  style={{ borderRadius: "50%" }}
                />
                <strong style={{ fontSize: "15px" }}>{props.name}</strong>
              </div>
            </Toast.Header>
            <Toast.Body className="w-100 py-0">
              <p>{props.content}</p>
              <img
                src={props.contentImage}
                alt="Img Routine"
                style={{ height: "width:100%", width: "100%" }}
              />
            </Toast.Body>
            <div className="d-flex justify-content-between px-3">
              <div>{props.like}</div>
              <div className="d-flex gap-2">
                <div>{props.comment}</div>
                <div>{props.share}</div>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-around">
              <button type="" id="like">
                Like
              </button>
              <button type="" id="comment">
                Comment
              </button>
              <button type="" id="share">
                Share
              </button>
            </div>
            <hr></hr>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}
export default Contentnews;
