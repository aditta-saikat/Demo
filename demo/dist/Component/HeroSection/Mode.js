import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import Moon from "../../assets/moon.svg";
import Sun from "../../assets/sun.svg";
const Mode = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleMode = () => {
        setIsDarkMode(!isDarkMode); // Toggle between moon and sun mode
    };
    return (_jsx("div", Object.assign({ onClick: toggleMode, className: "fixed bottom-5 right-5 md:bottom-[10.5rem] md:right-[7.5rem] w-[60px] h-[60px] p-2.5 bg-[rgba(26,26,26,0.9)] rounded-tl-full rounded-bl-full border-l border-t border-b border-[rgba(26,26,26,0.9)] backdrop-blur-3xl justify-center items-center gap-2.5 inline-flex cursor-pointer" }, { children: _jsx("div", Object.assign({ className: "w-[30px] h-[30px] shadow justify-center items-center flex" }, { children: _jsx("div", Object.assign({ className: "w-9 h-9 relative" }, { children: _jsx("img", { src: isDarkMode ? Moon : Sun, alt: isDarkMode ? "Moon Icon" : "Sun Icon", className: "w-full h-full" }) })) })) })));
};
export default Mode;
//# sourceMappingURL=Mode.js.map