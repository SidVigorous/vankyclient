import React, { useState } from "react";
import "./Navbar.css";
// import bellicon from "../../Assets/Images/bell-icon.png";
import roayl from "../../Assets/Images/royal.png";
import walleticon from "../../Assets/Images/wallet-icons.png";
import bethistory from "../../Assets/Images/bethistory.png";
import { AiFillAndroid, AiFillInfoCircle } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { CgGames } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navbar-main">
        <div className="navbar-left">
          <button className="hamburger-menu" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
          <Link to="/">
            <img src={roayl} alt="logo" className="vanky-logo"/>
          </Link>

          <div>
            <marquee attribute_name="welcome" className="nav-marquee">
              WELCOME TO THE VANKY.COM
            </marquee>
            <span className="nav-bell-icon">
              {/* <img className="bell-icon" src={bellicon} alt="" /> */}
            </span>
          </div>
        </div>
        <div className="navbar-right">
          <div>
            <img src={walleticon} alt="coin" />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <span style={{ color: "white" }}>Main: 25000.00</span>
              <span style={{ color: "white" }}>Exposure : 0.00</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "2rem",
            }}
          >
            <img src={bethistory} alt="user" />
            <span style={{ color: "white" }}>hfuih</span>
          </div>
        </div>
      </div>

      {/* <div className="second-nav"> */}

      <div
        className={open ? "nav-menu-mobile" : "nav-menu"}
        onClick={() => setOpen(false)}
      >
        <ul>
          <li>
            <FaHome style={{ fontSize: "20px" }} />
            Dashoard
          </li>
          <li>
            <BsPlayFill style={{ fontSize: "20px" }} />
            In-play
          </li>

          <li>
            <Link to="/runningmarketanalysis" className="link-css">
              <VscGraph style={{ fontSize: "20px" }} />
              <span>All Market Book</span>
            </Link>
          </li>

          <li>
            <CgProfile style={{ fontSize: "20px" }} />
            <Link to="/Profile" className="link-css">
              Profile
            </Link>
          </li>
          <li>
            <RiLockPasswordFill style={{ fontSize: "20px" }} />
            <Link className="link-css" to="/Userchangepassword">
              Password
            </Link>
          </li>
          <li>
            <AiFillInfoCircle style={{ fontSize: "20px" }} />
            Rules
          </li>
          <li>
            <BiBook style={{ fontSize: "20px" }} />
            My Commision
          </li>
          <li>
            <BiBook style={{ fontSize: "20px" }} />
            Report
          </li>
          <li>
            <CgGames style={{ fontSize: "20px" }} />
            Live Games
          </li>
          <li>
            <BiBook style={{ fontSize: "20px" }} />
            Edit Stake
          </li>
          <li>
            <VscGraph style={{ fontSize: "20px" }} />
            IPL Winner
          </li>
        </ul>
      </div>
      {/* <div>
          <AiFillAndroid className="android-logo" />
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Navbar;