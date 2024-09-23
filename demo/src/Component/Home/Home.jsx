import React from "react";
import "./Home.css";
import fi_10473357 from "../../assets/fi_10473357.svg";
import fi_142457 from "../../assets/fi_142457.svg";
import star1 from "../../assets/Star 1.svg";
import upArrow from "../../assets/guidance-up-arrow.svg";
import VerticalSpheres from "../VerticalSpheres/VerticalSpheres";

function Home() {
  return (
    <div className="hero-section">
      <div className="content-wrapper">
        <div className="tagline">
          <span>Cloudcamp Presents</span>
        </div>
        <h1 className="main-title">
          Mastering{" "}
          <span className="[font-family:'Whyte-Bold',Helvetica] font-bold text-[#f0953e] ml-[15px]">
            AWS
          </span>
          <span className="text-white ml-[15px]"> &amp; </span>
          <span className="[font-family:'Whyte-Bold',Helvetica] font-bold text-[#00a5ff] ml-[15px] mr-[15px]">
            DevOps
          </span>
          <img src={fi_10473357} alt="Emoji Icon" />
        </h1>
        <h2 className="subtitle">with Hands-On Labs</h2>
        <p className="description">
          Unlock your potential with hands-on labs and expert-led courses in AWS
          and DevOps. Whether you're a beginner or a seasoned professional,
          CloudCamp empowers you with the skills to thrive in the world of cloud
          technology and automation. Join a global community of learners,
          accelerate your career, and become a cloud operations expert. Start
          your journey today and transform your future in tech!
        </p>
        <div className="actions">
          <div className="enrollButton">Enroll now</div>
          <div className="videoButton">
            <img src={fi_142457} alt="Play Icon" />
            <span>Watch lab demo</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll down</span>
        <div className="scroll-arrow">
          <img src={upArrow} alt="Up Arrow" />
        </div>
      </div>

      {/* VerticalSpheres should be positioned as a background */}
      <VerticalSpheres />
    </div>
  );
}

export default Home;
