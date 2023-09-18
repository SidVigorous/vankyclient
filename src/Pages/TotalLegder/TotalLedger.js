import React from "react";
import "./TotalLegder.css";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";

const TotalLedger = () => {
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <div>
        <div className="lena-dena">
          <span>COMPANY LENA DENA</span>
          <button className="back-btn">Back</button>
        </div>
        <div className="date-search" >
          <input type="date" />
          <input type="date" />
          <select>
            <option>All</option>
            <option>Settlement</option>
          </select>
          <button className="lena-dena-search">Search</button>
        </div>
        <hr/>
      </div>
    </div>
  );
};

export default TotalLedger;
