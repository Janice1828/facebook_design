import React from "react";
import { Card } from "react-bootstrap";
const Chats = () => {
  return (
    <div>
      <Card className="p-3">
        <Card.Title>
          <h5>Chats You Should Join</h5>
        </Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
              <span>looking for intern to join</span>
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
