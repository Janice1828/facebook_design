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
  const iconStyle={
     height:"30px",width:"30px" ,background:"#bcc0bc",padding:"5px", borderRadius:"50%"
  }
  const colStyle={
    display:"flex", gap:"1em",alignItems:"center", cursor:"pointer"
  }
  return (
    <>
      <div className="marketSetting shadow px-3 marketsettin">
        <Row className="flex-column gap-3">
          <Col>
            <h4 style={{ fontWeight: "700 " }}>Marketplace</h4>
          </Col>
          <Col className="d-flex gap-2">
            <Form className="w-100">
              <Form.Control
                className="w-100"
                placeholder="Search Marketplace"
              style={{borderRadius:"30px"}}
              ></Form.Control>
            </Form>
          </Col>
          <Col style={colStyle}>
            <GiBlockHouse style={iconStyle}></GiBlockHouse>
            <h6>Browse All</h6>
          </Col>

          <Col style={colStyle}>
            <IoMdNotifications style={iconStyle}></IoMdNotifications>
            <h6> Notifications</h6>
          </Col>
          <Col style={colStyle}>
            <BsFillInboxFill style={iconStyle}></BsFillInboxFill>
            <h6> Inbox</h6>
          </Col>
          <Col style={colStyle}>
            <AiFillShopping style={iconStyle}></AiFillShopping>
            <h6> Buying</h6>
          </Col>
          <Col style={colStyle}>
            <BsFillTagsFill style={iconStyle}></BsFillTagsFill>
            <h6> Selling</h6>
          </Col>
          <Col className="d-flex gap-2 cursor-pointer">
            <h6 style={{background:"#bfe9f4",color:"#3838aa" ,width:"90%", padding:"10px 0px", textAlign:"center"}}> Create new listing</h6>
          </Col>
          <Col className="d-flex gap-2 border-top pt-2">
            <h6> Filters</h6>
          </Col>
          <Col className="d-flex gap-2 border-bottom pb-2">
            <h6 style={{color:"hsl(214, 89%, 52%)"}}> Kathmandu, Nepal. within 65 kilometeres</h6>
          </Col>
          <Col className="d-flex gap-2">
            <h6> Categories</h6>
          </Col>
          <Col style={colStyle}>
            <AiFillCar style={iconStyle}></AiFillCar>
            <h6> Vehicles</h6>
          </Col>
          <Col style={colStyle}>
            <BsFillHouseFill style={iconStyle}></BsFillHouseFill>
            <h6> Property Rentals</h6>
          </Col>
          <Col style={colStyle}>
            <BiSolidTShirt style={iconStyle}></BiSolidTShirt>
            <h6> Apparel</h6>
          </Col>
          <Col style={colStyle}>
            <BsFillTagsFill style={iconStyle}></BsFillTagsFill>
            <h6> Classifields</h6>
          </Col>
          <Col style={colStyle}>
            <FaMobileScreenButton
              style={iconStyle}
            ></FaMobileScreenButton>
            <h6> Electronics</h6>
          </Col>
          <Col style={colStyle}>
            <MdOutlineGroup style={iconStyle}></MdOutlineGroup>
            <h6> Entertainment</h6>
          </Col>
          <Col style={colStyle}>
            <AiFillHeart style={{ height:"30px",width:"30px",background:"#bcc0bc",padding:"5px", borderRadius:"50%" }}></AiFillHeart>
            <h6> Family</h6>
          </Col>
          <Col style={colStyle}>
            <BsTags style={iconStyle}></BsTags>
            <h6> Free Stuff</h6>
          </Col>
          <Col style={colStyle}>
            <LuShovel style={iconStyle}></LuShovel>
            <h6> Garden & Outdoor</h6>
          </Col>
          <Col style={colStyle}>
            <FaPen style={iconStyle}></FaPen>
            <h6> Hobbies</h6>
          </Col>
          <Col style={colStyle}>
            <GoHomeFill style={iconStyle}></GoHomeFill>
            <h6> Home Goods</h6>
          </Col>
          <Col style={colStyle}>
            <GiAutoRepair style={iconStyle}></GiAutoRepair>
            <h6> Home Improvement Supplies</h6>
          </Col>
          <Col style={colStyle}>
            <AiFillHome style={iconStyle}></AiFillHome>
            <h6> Home Sales</h6>
          </Col>
          <Col style={colStyle}>
            <FaGuitar style={iconStyle}></FaGuitar>
            <h6> Musical Instruments</h6>
          </Col>
          <Col style={colStyle}>
            <LuTags style={iconStyle}></LuTags>
            <h6> Office Supplies</h6>
          </Col>
          <Col style={colStyle}>
            <MdPets style={iconStyle}></MdPets>
            <h6> Pet Supplies</h6>
          </Col>
          <Col style={colStyle}>
            <FaPersonRunning style={iconStyle}></FaPersonRunning>
            <h6> Sporting Goods</h6>
          </Col>
          <Col style={colStyle}>
            <SiYoutubegaming style={iconStyle}></SiYoutubegaming>
            <h6> Toys & Games</h6>
          </Col>
          <Col style={colStyle}>
            <MdGroups3 style={iconStyle}></MdGroups3>
            <h6> Buy and sell groups</h6>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Marketsettings;
