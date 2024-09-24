// Hero_section.js
import React from "react";
import fi_10473357 from "../../assets/fi_10473357.svg";
import fi_142457 from "../../assets/fi_142457.svg";
import upArrow from "../../assets/guidance-up-arrow.svg";
import VerticalSpheres from "./VerticalSpheres";
import vectorImage from "../../assets/vector.svg";

function Hero_section() {
  return (
    <div
      className="relative max-w-[1400px] mx-auto flex justify-between items-center p-10 bg-black text-white flex-wrap overflow-hidden"
      style={{ backgroundImage: `url(${vectorImage})` }}
    >
      <div className="flex flex-col max-w-[850px] z-10">
        <div className="p-2 bg-gradient-to-r bg-gradient-to-br from-[#270440] to-transparent opacity-80 font-sans font-normal text-base mb-2">
          <span>Cloudcamp Presents</span>
        </div>
        <h1 className="font-sora font-semibold text-[60px] leading-[1.2] flex items-center mt-6">
          Mastering <span className="font-bold text-[#f0953e] ml-4">AWS</span>
          <span className="text-white ml-4"> &amp; </span>
          <span className="font-bold text-[#00a5ff] ml-4 mr-4">DevOps</span>
          <img src={fi_10473357} alt="Emoji Icon" className="ml-2" />
        </h1>
        <h2 className="font-whyte font-normal text-[40px] mt-5 mb-0">
          with Hands-On Labs
        </h2>
        <p className="font-whyte font-light text-lg leading-8 text-[#dfc4f3] mt-5 max-w-[600px]">
          Unlock your potential with hands-on labs and expert-led courses in AWS
          and DevOps. Whether you're a beginner or a seasoned professional,
          CloudCamp empowers you with the skills to thrive in the world of cloud
          technology and automation. Join a global community of learners,
          accelerate your career, and become a cloud operations expert. Start
          your journey today and transform your future in tech!
        </p>
        <div className="flex items-center mt-10 gap-5">
          <div className="bg-[#4377fe] text-white px-6 py-3 rounded-full font-public-sans font-medium text-lg cursor-pointer transition-all duration-300 ease-in-out shadow-[0_8px_60px_rgba(0,165,255,0.5)] hover:bg-gradient-to-r from-[#feb56c] to-[#d325ff] hover:scale-105">
            Enroll now
          </div>
          <div className="flex items-center cursor-pointer transition-transform duration-300 ease-in-out">
            <img src={fi_142457} alt="Play Icon" className="mr-2" />
            <span className="font-whyte font-normal text-[24px]">
              Watch lab demo
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-white font-whyte font-normal text-[24px] z-10">
        <span className="transform rotate-90">Scroll down</span>
        <div className="flex items-center mt-28 relative">
          <img
            src={upArrow}
            alt="Up Arrow"
            className="w-[80px] h-[80px] animate-spin"
            style={{ animationDuration: "7s" }}
          />
        </div>
      </div>

      {/* VerticalSpheres should be positioned as a background */}
      <VerticalSpheres />
    </div>
  );
}

export default Hero_section;
