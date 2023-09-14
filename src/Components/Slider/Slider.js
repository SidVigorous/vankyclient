import React from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";
import ronaldo from "../../Assets/Images/ronaldo.jpg";
import congrats from "../../Assets/Images/congrats.jpg";
import casino from "../../Assets/Images/casino.jpg";
import livescore from "../../Assets/Images/livescore.png";
import blackcard from "../../Assets/Images/blackcard.png";
import { Link } from "react-router-dom";
// import cricketball from "../../Assets/Images/cricket-icon.png";
// import mactchname from "../../Assets/Images/matchname.png";
// import tv from "../../Assets/Images/tv.png";
const Slider = () => {
  return (
    <div className="slider-main-div">
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img src={ronaldo} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={congrats} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={casino} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={livescore} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={blackcard} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* <div className="games-div">
        <div className="crik-game">Cricket</div>
        <div className="snook-game"> Snooker</div>
        <div className="casino-game">Tennis</div>
        <Link to="/Allcasino">
          <div className="tenis-game">Casino</div>
        </Link>
      </div> */}
      <div className="games-div">
        <div>Cricket</div>
        <div>Snooker</div>
        <div>Tennis</div>
        <div>Casino</div>
      </div>
    </div>
  );
};

export default Slider;
