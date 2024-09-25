import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Hero_section from "./Component/HeroSection/HeroSection";
import './i18n';
const App = () => {
    return (_jsx(Router, { children: _jsxs("div", Object.assign({ className: "bg-white" }, { children: [_jsx(Navbar, {}), _jsx("div", Object.assign({ className: "mt-10" }, { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(Hero_section, {}) }) }) }))] })) }));
};
export default App;
//# sourceMappingURL=App.js.map