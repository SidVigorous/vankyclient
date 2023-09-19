import React from "react";
import "./Login.css";
import khelo from "../../Assets/Images/khelo.png";
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa";
const Login = () => {
  return (
    <div className="login-main">
      <div className="login-div">
        <img src={khelo} alt="" className="khelo-logo" />
        <div className="input-div">
          <BiSolidUser style={{ color: "#7875B5", marginRight: "10px" }} />
          <input
            type="email"
            placeholder="Enter User ID..... "
            className="email-input"
          />
        </div>
        <div className="input-div">
          <RiLockPasswordFill
            style={{ color: "#7875B5", marginRight: "10px" }}
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="off"
            className="password-input"
          />
        </div>
        <button className="login-btn">
          LOG IN NOW
          <FaGreaterThan style={{ color: "#7875B5", marginLeft: "6rem" }} />
        </button>
        <span className="login-note">
          Note - This Website is not for Indian Territory.
        </span>
      </div>
    </div>
  );
};

export default Login;
