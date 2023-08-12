import React from "react";
import Imgs from "../img/groups/internnepal.jpg";
import { Card } from "react-bootstrap";
const Chats = () => {
  return (
    <div>
      <Card className="p-3">
        <Card.Title>
          <h5>Chats You Should Join</h5>
        </Card.Title>
        <Card.Body style={{cursor:"pointer"}}>
          <Card.Text className="d-flex align-items-center gap-2">
            <img
              src={Imgs}
              alt="Group Image"
              height="40px"
              style={{ borderRadius: "10px" }}
            />

            <div>
              <span style={{fontWeight:"500"}}>looking for intern to join</span>
              <br />
              <small>click to join</small>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Chats;
