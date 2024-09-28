import React, { useState } from "react";
import frame4 from "../../assets/frame-4-2.svg";
import star1_2 from "../../assets/star-1-2.svg";
import Star_hover_1 from "../../assets/Star_hover_1.svg";
import UK from "../../assets/circle-flags-uk.svg";
import arrow_down from "../../assets/arrow-down.svg";
import BN from "../../assets/emojione-flag-for-bangladesh.svg";

const Navbar: React.FC = () => {
  
  // Correct state definition with types
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isLanguageExpanded, setIsLanguageExpanded] = useState<boolean>(false);

  // Event handlers with types
  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const toggleLanguageExpand = () => {
    setIsLanguageExpanded(!isLanguageExpanded);
  };

  return (
    <div className="flex items-center justify-between bg-[rgba(26,26,26,0.9)] backdrop-blur-md px-4 rounded-full max-w-[1320px] mx-auto sticky top-5 z-50 transition-all duration-300">
      <div className="flex items-center">
        <img src={frame4} alt="icon" className="w-15 h-15" />
      </div>

      {/* Navbar Links */}
      <div className="flex items-center gap-6">
        {["Overview", "Modules", "Guidelines"].map((item) => (
          <div
            key={item}
            className="flex items-center px-4 py-2 relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter(item.toLowerCase())}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-white transition-colors duration-300 hover:text-yellow-400 bg-gradient-to-r from-yellow-400 to-transparent bg-clip-text">
              {item}
            </span>
            <img
              src={hoveredItem === item.toLowerCase() ? Star_hover_1 : star1_2}
              alt="icon"
              className={`transition-transform duration-300 ${
                hoveredItem === item.toLowerCase() ? "rotate-90" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Language Switching Button */}

      <div className="flex items-center gap-4">
        <div>
          <div
            className="flex items-center px-2 py-0 rounded-full bg-[rgba(42,41,41,0.9)] cursor-pointer"
            onClick={toggleLanguageExpand}
          >
            <div className="flex items-center">
              <img src={UK} alt="UK Flag" className="w-4 h-4" />
              <span className="font-sans font-normal text-sm text-white ml-2">
                EN
              </span>
            </div>
            <img src={arrow_down} alt="Arrow Down" className="w-3 h-3" />
          </div>

          {isLanguageExpanded && (
            <div className="absolute top-full left-[61rem] w-18 bg-[#333874] rounded-md z-50 flex flex-col p-1">
              <div className="flex items-center p-1">
                <img src={UK} alt="UK Flag" className="w-4 h-4" />
                <span className="font-sans font-normal text-sm text-white ml-2">
                  EN
                </span>
              </div>
              <div className="flex items-center p-1">
                <img src={BN} alt="Bangladesh Flag" className="w-4 h-4" />
                <span className="font-sans font-normal text-sm text-white ml-2">
                  BN
                </span>
              </div>
            </div>
          )}
        </div>

        {/*Login Registration Button */}

        <div className="flex items-center px-6 py-2 border border-blue-500 bg-transparent text-white rounded-full cursor-pointer font-sans font-medium text-base transition-all duration-300 hover:bg-gradient-to-r from-[#feb56c] to-[#d325ff]">
          <span>Login</span>
        </div>
        <div className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-full cursor-pointer font-sans shadow-[0_8px_60px_rgba(0,165,255,0.5)] font-medium text-base transition-all duration-300 hover:bg-gradient-to-r from-[#feb56c] to-[#d325ff]">
          <span>Registration</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
