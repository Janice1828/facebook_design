import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { GiBlockHouse } from "react-icons/gi";
import { Form } from "react-bootstrap";
import { IoMdNotifications } from "react-icons/io";
import { BsFillInboxFill } from "react-icons/bs";
import { BsHouseCheck } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { BsFillTagsFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";
import { BiSolidTShirt } from "react-icons/bi";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineGroup } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { LuShovel } from "react-icons/lu";
import { FaPen } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { GiAutoRepair } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaGuitar } from "react-icons/fa";
import { LuTags } from "react-icons/lu";
import { MdPets } from "react-icons/md";
import { FaPersonRunning } from "react-icons/fa6";
import { SiYoutubegaming } from "react-icons/si";
import { MdGroups3 } from "react-icons/md";

const Marketsettings = () => {
  return (
    <>
      <div className="marketSetting shadow px-3 marketsettin">
        <Row className="flex-column gap-2">
          <Col>
            <h4 style={{ fontWeight: "700 " }}>Marketplace</h4>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <Form className="w-100">
              <Form.Control
                className="w-100"
                placeholder="Search Marketplace"
              ></Form.Control>
            </Form>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <GiBlockHouse style={{ fontSize: "20px" }}></GiBlockHouse>
            <h6>Browse All</h6>
          </Col>

          <Col className="marketSettingCol d-flex gap-2">
            <IoMdNotifications style={{ fontSize: "20px" }}></IoMdNotifications>
            <h6> Notifications</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <BsFillInboxFill style={{ fontSize: "20px" }}></BsFillInboxFill>
            <h6> Inbox</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <AiFillShopping style={{ fontSize: "20px" }}></AiFillShopping>
            <h6> Buying</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <BsFillTagsFill style={{ fontSize: "20px" }}></BsFillTagsFill>
            <h6> Selling</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <h6> Create new listing</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <h6> Filters</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <h6> Kathmandu, Nepal. within 65 kilometeres</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <h6> Categories</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <AiFillCar style={{ fontSize: "20px" }}></AiFillCar>
            <h6> Vehicles</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <BsFillHouseFill style={{ fontSize: "20px" }}></BsFillHouseFill>
            <h6> Property Rentals</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <BiSolidTShirt style={{ fontSize: "20px" }}></BiSolidTShirt>
            <h6> Apparel</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <BsFillTagsFill style={{ fontSize: "20px" }}></BsFillTagsFill>
            <h6> Classifields</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <FaMobileScreenButton
              style={{ fontSize: "20px" }}
            ></FaMobileScreenButton>
            <h6> Electronics</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <MdOutlineGroup style={{ fontSize: "20px" }}></MdOutlineGroup>
            <h6> Entertainment</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <AiFillHeart style={{ fontSize: "20px" }}></AiFillHeart>
            <h6> Family</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <BsTags style={{ fontSize: "20px" }}></BsTags>
            <h6> Free Stuff</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <LuShovel style={{ fontSize: "20px" }}></LuShovel>
            <h6> Garden & Outdoor</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <FaPen style={{ fontSize: "20px" }}></FaPen>
            <h6> Hobbies</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <GoHomeFill style={{ fontSize: "20px" }}></GoHomeFill>
            <h6> Home Goods</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <GiAutoRepair style={{ fontSize: "20px" }}></GiAutoRepair>
            <h6> Home Improvement Supplies</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <AiFillHome style={{ fontSize: "20px" }}></AiFillHome>
            <h6> Home Sales</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <FaGuitar style={{ fontSize: "20px" }}></FaGuitar>
            <h6> Musical Instruments</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <LuTags style={{ fontSize: "20px" }}></LuTags>
            <h6> Office Supplies</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <MdPets style={{ fontSize: "20px" }}></MdPets>
            <h6> Pet Supplies</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <FaPersonRunning style={{ fontSize: "20px" }}></FaPersonRunning>
            <h6> Sporting Goods</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <SiYoutubegaming style={{ fontSize: "20px" }}></SiYoutubegaming>
            <h6> Toys & Games</h6>
          </Col>
          <Col className="marketSettingCol d-flex gap-2">
            <MdGroups3 style={{ fontSize: "20px" }}></MdGroups3>
            <h6> Buy and sell groups</h6>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Marketsettings;
