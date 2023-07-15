import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { GiBlockHouse } from "react-icons/gi";
import { GiBackwardTime } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
const Shortcuts = () => {
  return (
    <>
      <div className="d-flex flex-column gap-4">
        <div className="d-flex gap-2 align-items-center">
          <BiSolidUser size="25px" />
          <h6>Jenish Imsong Limbu</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <FaUserFriends size="25px" />
          <h6>Friends</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <MdGroups size="25px" />
          <h6>Groups</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <FaNewspaper size="25px" />
          <h6>Feeds</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <GiBlockHouse size="25px" />
          <h6>Marketplace</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <GiBackwardTime size="25px" />
          <h6>Memories</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <IoIosArrowDropdown size="25px" />
          <h6>See More</h6>
        </div>
        <div className="border-shortcut"></div>
        <h6>Your Shortcuts</h6>
        <div className="d-flex gap-2 align-items-center">
          <BiSolidUser size="25px" />
          <h6>Ludo Club</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <BiSolidUser size="25px" />
          <h6>Internsathi</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <BiSolidUser size="25px" />
          <h6>Intern Nepal</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <BiSolidUser size="25px" />
          <h6>Sanima Bank</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <BiSolidUser size="25px" />
          <h6>It Intern/Jobs Nepal</h6>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <BiSolidUser size="25px" />
          <h6>Intern Apply</h6>
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
