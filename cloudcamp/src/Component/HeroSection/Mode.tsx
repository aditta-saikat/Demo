import React, { useState } from 'react';
import Moon from "../../assets/moon.svg";
import Sun  from "../../assets/sun.svg";

const Mode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle between moon and sun mode
  };

  return (
    <div
      onClick={toggleMode} // Add onClick event to toggle the icon
      className="fixed bottom-5 right-5 md:bottom-[10.5rem] md:right-[7.5rem] w-[60px] h-[60px] p-2.5 bg-[rgba(26,26,26,0.9)] rounded-tl-full rounded-bl-full border-l border-t border-b border-[rgba(26,26,26,0.9)] backdrop-blur-3xl justify-center items-center gap-2.5 inline-flex cursor-pointer" 
    >
      <div className="w-[30px] h-[30px] shadow justify-center items-center flex">
        <div className="w-9 h-9 relative">
          <img
            src={isDarkMode ? Moon : Sun} // Toggle between moon and sun
            alt={isDarkMode ? "Moon Icon" : "Sun Icon"}
            className="w-full h-full"
          />
        </div>
      </div>

    </div>
  );
};

export default Mode;
