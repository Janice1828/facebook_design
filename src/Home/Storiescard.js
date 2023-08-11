import { Card } from "react-bootstrap";

const Storiescard = (props) => {
  return (
    <div>
      <Card style={{ cursor: "pointer", height: "230px" }} className="border-0">
        <Card.Body className="p-0">
          <img
            src={props.imgName}
            alt="Stories Img"
            height="200px"
            width="140px" 
            style={{ borderRadius: "10px",top:"15px" }}
          />
          <img
            src={props.profile}
            alt="Profile"
            style={{
              position: "absolute",
              left: "26px",
              bottom: "140px",
            }}
            id="profileImg"
          />
          <span
            style={{
              color: "#fff",
              position: "absolute",
              left: "30%",
              bottom: "38px",
            }}
          >
            {props.name}
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Storiescard;
