import React from "react";
import "./Games.css";
import { Link } from "react-router-dom";
// import tv from "../../Assets/Images/tv.png";
// import Matchname from "../../Assets/Images/matchname.png";
// import cricket from "../../Assets/Images/cricket-icon.png";
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
    </div>
  );
};

export default Games;
