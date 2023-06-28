import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GiBlockHouse } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { TbGridDots } from "react-icons/tb";
import { CgGames } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { BsMessenger } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
function TextControlsExample() {
  // const placeHolderIcons = <BsSearch />;
  return (
    <>
      <Row className="px-4 py-2 shadow align-items-center mb-3">
        <Col className="d-flex gap-2">
          <FaFacebook size="40px" color="#3b5998"></FaFacebook>
          <Form>
            <Form.Label>
              <Form.Control
                type="text"
                placeholder="Search Facebook"
                style={{ borderRadius: "25px" }}
              ></Form.Control>
            </Form.Label>
          </Form>
        </Col>
        <Col className="d-flex justify-content-around">
          <IconContext.Provider value={{ color: "#65676B", size: "25px" }}>
            <Link to="/">
              <AiFillHome></AiFillHome>
            </Link>
            <Link to="/market">
              <GiBlockHouse></GiBlockHouse>
            </Link>
            <Link to="/group">
              <HiUserGroup></HiUserGroup>
            </Link>
            <Link to="/gaming">
              <CgGames></CgGames>
            </Link>
          </IconContext.Provider>
        </Col>
        <Col className="d-flex gap-3 justify-content-end">
          <IconContext.Provider
            value={{
              color: "#000",
              size: "25px",
              className: "bg-secondary bg-opacity-50",
            }}
          >
            <TbGridDots className="p-1 rounded-4"></TbGridDots>

            <BsMessenger className="p-1 rounded-4"></BsMessenger>
            <IoMdNotifications className="p-1 rounded-4"></IoMdNotifications>
            <BiSolidUser className="p-1 rounded-4"></BiSolidUser>
          </IconContext.Provider>
        </Col>
      </Row>
    </>
  );
}

export default TextControlsExample;
