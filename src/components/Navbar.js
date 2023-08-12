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
import jenish from "../img/home/jenish.jpg";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
function TextControlsExample() {
  return (
    <>
      <Row className="px-4 py-2 shadow align-items-center mb-3 position-sticky top-0 nav ">
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
        <Col className="d-flex justify-content-around navlink">
          <IconContext.Provider value={{}}>
            <NavLink to="/" id="navLink">
              <AiFillHome className="navMiddlleIcon"></AiFillHome>
            </NavLink>
            <NavLink to="/market" id="navLink">
              <GiBlockHouse className="navMiddlleIcon"></GiBlockHouse>
            </NavLink>
            <NavLink to="/group" id="navLink">
              <HiUserGroup className="navMiddlleIcon"></HiUserGroup>
            </NavLink>
            <NavLink to="/gaming" id="navLink">
              <CgGames className="navMiddlleIcon"></CgGames>
            </NavLink>
          </IconContext.Provider>
        </Col>
        <Col className="d-flex gap-3 justify-content-end">
          <IconContext.Provider
            value={{
              color: "#000",
              size: "25px",
              className: "bg-secondary bg-opacity-25",
            }}
          >
            <TbGridDots className="navIcons cursor-pointer"></TbGridDots>

            <BsMessenger className="navIcons cursor-pointer"></BsMessenger>

            <IoMdNotifications className="navIcons cursor-pointer"></IoMdNotifications>
            <img src={jenish} alt="Profile Picture" id="profilePicture" className="cursor-pointer"/>
          </IconContext.Provider>
        </Col>
      </Row>
    </>
  );
}

export default TextControlsExample;
