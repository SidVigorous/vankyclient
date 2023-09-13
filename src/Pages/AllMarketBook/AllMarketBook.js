import React from "react";
import "./AllMarketBook.css";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
const AllMarketBook = () => {
  return (
    <div>
      <Navbar />
      <LeftSidebar/>
      <div style={{ marginLeft: "18rem" }}>
        <div className="my-mart-div">MY MARKET</div>
        <div className="no-reacod-div">No Record Found</div>
      </div>
    </div>
  );
};

export default AllMarketBook;
