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
import { NavLink } from "react-router-dom";
function TextControlsExample() {
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
                style={{ borderRadius: "20px", width: "215px" }}
              ></Form.Control>
            </Form.Label>
          </Form>
        </Col>
        <Col className="d-flex justify-content-around">
          <IconContext.Provider value={{}}>
            <NavLink to="/" id="navLink">
              <AiFillHome></AiFillHome>
            </NavLink>
            <NavLink to="/market" id="navLink">
              <GiBlockHouse></GiBlockHouse>
            </NavLink>
            <NavLink to="/group" id="navLink">
              <HiUserGroup></HiUserGroup>
            </NavLink>
            <NavLink to="/gaming" id="navLink">
              <CgGames></CgGames>
            </NavLink>
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
            <TbGridDots className="navIcons"></TbGridDots>

            <BsMessenger className="navIcons"></BsMessenger>

            <IoMdNotifications className="navIcons"></IoMdNotifications>
            <BiSolidUser className="navIcons"></BiSolidUser>
          </IconContext.Provider>
        </Col>
      </Row>
    </>
  );
}

export default TextControlsExample;
