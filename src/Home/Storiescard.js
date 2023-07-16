import { Card } from "react-bootstrap";

const Storiescard = (props) => {
  return (
    <div>
      <Card style={{ cursor: "pointer", height: "230px" }}>
        <Card.Body>
          <img
            src={props.imgName}
            alt="Stories Img"
            height="180px"
            width="125px"
            style={{ borderRadius: "10px" }}
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
              left: "85px",
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
