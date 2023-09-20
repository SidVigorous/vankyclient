import React from "react";
import "./Games.css";
import { Link } from "react-router-dom";
import tv from "../../Assets/Images/tv.png";
import Matchname from "../../Assets/Images/matchname.png";
import cricket from "../../Assets/Images/cricket-icon.png";
import { FaGreaterThan } from "react-icons/fa";
const Games = () => {
  return (
    <div>
      <div className="games-main">
        <div className="cricket-game">Cricket</div>
        <div className="soccer-game">Soccer</div>
        <div className="tennis-game">Tennis</div>

        <div className="casino-game">
          <Link to="/Allcasino">Casino </Link>
        </div>
      </div>

      <div className="cricket-icon-main">
        <div className="cricket-icon">
          <img src={cricket} alt="" />
          <span>Cricket</span>
        </div>
        <div className="about-matches">
          <div className="match-name">
            <img src={Matchname} alt="" />
            <span>Surrey v Northamptonshire</span>
          </div>
          <div>
            <img src={tv} alt="" style={{ width: "30px" }} />
          </div>
          <div className="back-cell">
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>
              <FaGreaterThan />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
