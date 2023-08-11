import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { GiBlockHouse } from "react-icons/gi";
import { GiBackwardTime } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import internSathi from "../img/home/internsathiImg.png";
import internNepal from "../img/home/internnepal.jpg";
import sanima from "../img/home/sanima.jpg";
import ludo from "../img/home/ludo.png"
import internGroup from "../img/home/interngroup.jpg"
import pool from "../img/home/pool.png"
import jenish from "../img/home/jenish.jpg"
const Shortcuts = () => {
  return (
    <>
      <div className="d-flex flex-column gap-4">
        <div className="d-flex gap-2 align-items-center">
        <img class="shortcutsImg" src={jenish} alt="Profile Picture"/>
       
          <h6>Jenish Imsong Limbu</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <FaUserFriends size="25px" style={{color:" hsl(214, 89%, 52%)"
}}/>
          <h6>Friends</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <MdGroups size="25px" style={{background:"hsl(214, 89%, 52%)",borderRadius:"50%", color:"#fff", padding:"2px"}} />
          <h6>Groups</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <FaNewspaper size="25px" style={{color:"hsl(214, 89%, 52%)"}} />
          <h6>Feeds</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <GiBlockHouse size="25px"  style={{color:"hsl(214, 89%, 52%)"}}/>
          <h6>Marketplace</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <GiBackwardTime size="25px" style={{color:"hsl(214, 89%, 52%)"}} />
          <h6>Memories</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <IoIosArrowDropdown size="25px" />
          <h6>See More</h6>
        </div>
        <div className="border-shortcut"></div>
        <h6>Your Shortcuts</h6>
        <div className="d-flex gap-2 align-items-center">
         <img class="shortcutsImg" src={ludo} alt="Ludo Img"/>
          <h6>Ludo Club</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
<img class="shortcutsImg" src={internSathi} alt="Intern sathi"/>
          <h6>Internsathi</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
<img class="shortcutsImg" src={internNepal} alt="intern nepal"/>
          <h6>Intern Nepal</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
<img class="shortcutsImg" src={sanima} alt="Sanima Bank"/>
          <h6>Sanima Bank</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
<img class="shortcutsImg" src={internGroup} alt="Intern Groups"/>
          <h6>It Intern/Jobs Nepal</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
<img class="shortcutsImg" src={pool} alt="Pool Image"/>
          <h6>8 Ball Pool</h6>
        </div>
        <div className="">
          <small>Privacy</small>
          <small>.</small>
          <small>Terms</small>
          <small>.</small>
          <small>Advertising</small>
          <small>.</small>
          <small>Ad Choices</small>
          <small>.</small>
          <small>Cookies</small>
          <small>.</small> <br />
          <small>More</small>
          <small>.</small>
          <small>Meta &copy; 2023</small>
        </div>
      </div>
    </>
  );
};

export default Shortcuts;
