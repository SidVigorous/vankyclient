import React from "react";
import "./Profile.css";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Table from "react-bootstrap/Table";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftSidebar />
        <div className="profile-main">
          <div className="rate-info">RATE INFORMATION</div>
          <div className="rate-main">
            <div className="rate-differ">RATE DIFFRENCE</div>
            <div>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div>
              <button className="upt-btn">Update</button>
            </div>
          </div>
          <div className="per-info">PERSONAL INFORMATION</div>

          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
               
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
               
              </tr>
            </tbody>
          </Table>
        </div>
      </div>{" "}
    </div>
  );
};

export default Profile;
