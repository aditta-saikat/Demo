import React, { useState } from "react";
import "./Navbar.css";
import frame4 from "../../assets/frame-4-2.svg";
import star1_2 from "../../assets/star-1-2.svg";
import star1_3 from "../../assets/star-1-3.svg";
import star1_4 from "../../assets/star-1-4.svg";
import Star_hover_1 from "../../assets/Star_hover_1.svg";

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="navbar">
      <div className="frame10">
        <img src={frame4} alt="icon" />
      </div>
      <div className="frame7">
        <div
          className="menuItem"
          onMouseEnter={() => handleMouseEnter("overview")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="menuText">Overview</span>
          <img
            src={hoveredItem === "overview" ? Star_hover_1 : star1_2}
            alt="icon"
          />
        </div>
        <div
          className="menuItem"
          onMouseEnter={() => handleMouseEnter("modules")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="menuText">Modules</span>
          <img
            src={hoveredItem === "modules" ? Star_hover_1 : star1_3}
            alt="icon"
          />
        </div>
        <div
          className="menuItem"
          onMouseEnter={() => handleMouseEnter("guidelines")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="menuText">Guidelines</span>
          <img
            src={hoveredItem === "guidelines" ? Star_hover_1 : star1_4}
            alt="icon"
          />
        </div>
      </div>
      <div className="frame9">
        <div className="loginButton">
          <span>Login</span>
        </div>
        <div className="registrationButton">
          <span>Registration</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
