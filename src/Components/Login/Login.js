import React, { useEffect, useState } from "react";
import "./Login.css";
import khelo from "../../Assets/Images/khelo.png";
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import httpPost from  "../../Constants/Http"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     navigate("/login");
  //   }
  // }, []);

  // async function login() {
  //   // console.log("data", email, password);
  //   let item = { email, password };
  //   let result = await fetch(
  //     "https://client-rest-api.vercel.app/v1/user/login",
  //     {
  //       method: "post",
  //       headers: {
  //         "content-type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(item),
  //     }
  //   );
  //   result = await result.json();
  //   localStorage.setItem("user-info", JSON.stringify(result));
  //   navigate("/");
  // }
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
