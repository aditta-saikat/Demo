import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import HeroSection from "./Component/HeroSection/HeroSection";
import KeyFeatures from "./Component/KeyFeatures/KeyFeatures";
import "./i18n";
var App = function () {
  return _jsx(Router, {
    children: _jsxs("div", {
      className: "bg-black",
      children: [
        _jsx(Navbar, {}),
        _jsx("div", {
          className: "mt-10",
          children: _jsx(Routes, {
            children: _jsx(Route, {
              path: "/",
              element: _jsx(HeroSection, KeyFeatures, {}),
            }),
          }),
        }),
      ],
    }),
  });
};
export default App;
