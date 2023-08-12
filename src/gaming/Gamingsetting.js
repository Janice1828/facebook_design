import React from "react";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { SiYoutubegaming } from "react-icons/si";
import { BsFillBookmarkFill } from "react-icons/bs";
import { GiRayGun } from "react-icons/gi";
import { LiaFlagCheckeredSolid } from "react-icons/lia";
import { SiApplearcade } from "react-icons/si";
import { GiBroadsword } from "react-icons/gi";
import { BsFillClipboardFill } from "react-icons/bs";
import { LuConstruction } from "react-icons/lu";
import { CgCardSpades } from "react-icons/cg";
import { MdCasino } from "react-icons/md";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaFantasyFlightGames } from "react-icons/fa";
import { AiOutlineMergeCells } from "react-icons/ai";
import { BsFillPuzzleFill } from "react-icons/bs";
import { AiFillPayCircle } from "react-icons/ai";
import { MdQuiz } from "react-icons/md";
import { GiFinishLine } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { SiPlaystation } from "react-icons/si";
import { BiRun } from "react-icons/bi";
import { SiMubi } from "react-icons/si";
import { MdSportsBaseball } from "react-icons/md";
import { GiPuzzle } from "react-icons/gi";
const Gamingsetting = () => {
  return (
    <div className="marketsettin w-25">
      <Row className="d-flex flex-column gap-2">
        <Col>
          <h6>Gaming</h6>
        </Col>
      
        <Col className="d-flex gap-2 gameCol">
          <SiYoutubegaming className="gamesIcon"></SiYoutubegaming>

          <h6>Play Games</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <IoIosNotifications className="gamesIcon"></IoIosNotifications>
          <h6>Notifications</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <h6>Gaming Activity</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <BsFillBookmarkFill className="gamesIcon"></BsFillBookmarkFill>

          <h6>Save Games</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <h6>Categories</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <SiYoutubegaming className="gamesIcon"></SiYoutubegaming>
          <h6>All Games</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <GiRayGun className="gamesIcon"></GiRayGun>
          <h6>Action</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <LiaFlagCheckeredSolid className="gamesIcon"></LiaFlagCheckeredSolid>
          <h6>Adventure</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <SiApplearcade className="gamesIcon"></SiApplearcade>
          <h6>Arcade</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <GiBroadsword className="gamesIcon"></GiBroadsword>
          <h6>Battle</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <BsFillClipboardFill className="gamesIcon"></BsFillClipboardFill>
          <h6>Board</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <LuConstruction className="gamesIcon"></LuConstruction>
          <h6>Builder</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <CgCardSpades className="gamesIcon"></CgCardSpades>
          <h6>Card</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <MdCasino className="gamesIcon"></MdCasino>
          <h6>Casino</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <AiOutlineAntDesign className="gamesIcon"></AiOutlineAntDesign>
          <h6>Design</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <FaFantasyFlightGames className="gamesIcon"></FaFantasyFlightGames>
          <h6>Match</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <AiOutlineMergeCells className="gamesIcon"></AiOutlineMergeCells>
          <h6>Merge</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <BsFillPuzzleFill className="gamesIcon"></BsFillPuzzleFill>
          <h6>Puzzle</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <AiFillPayCircle className="gamesIcon"></AiFillPayCircle>
          <h6>Quick Play</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <MdQuiz className="gamesIcon"></MdQuiz>
          <h6>Quiz and Trivia</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <GiFinishLine className="gamesIcon"></GiFinishLine>
          <h6>Racing</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <SiPlaystation className="gamesIcon"></SiPlaystation>
          <h6>Role-playing</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <BiRun className="gamesIcon"></BiRun>
          <h6>Runner</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <SiMubi className="gamesIcon"></SiMubi>
          <h6>Simulation</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <MdSportsBaseball className="gamesIcon"></MdSportsBaseball>
          <h6>Sports</h6>
        </Col>
        <Col className="d-flex gap-2 gameCol">
          <GiPuzzle className="gamesIcon"></GiPuzzle>
          <h6>Word</h6>
        </Col>
      </Row>
    </div>
  );
};

export default Gamingsetting;
