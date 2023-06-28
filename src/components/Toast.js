import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import ronb from "../img/user.jpg";

function DismissibleExample() {
  const [showA, setShowA] = useState(true);
  // const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  // const toggleShowB = () => setShowB(!showB);

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
              <div className="d-flex align-items-center gap-1">
                <img src={ronb} alt="RONB" height="25px" width="25px" />
                <strong style={{ fontSize: "15px" }}>
                  Routine Of Nepal Banda
                </strong>
              </div>
            </Toast.Header>
            <Toast.Body className="w-100">
              <p>
                नेपाल आयल निगमले एक वर्षमा २४ अर्ब कमाएर भारतीय आयल निगमको सबै
                ऋण तिरेको छ भने अब स्वचालित मूल्य लागू गर्ने पनि तयारी गरेको छ ।
              </p>
              <img
                src={ronb}
                alt="Img Routine"
                style={{ height: "width:100%", width: "100%" }}
              />
            </Toast.Body>
            <div className="d-flex justify-content-between">
              <div>415</div>
              <div className="d-flex gap-2">
                <div>20 comments</div>
                <div>3 shares</div>
              </div>
            </div>
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

export default DismissibleExample;
