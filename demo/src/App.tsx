import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Hero_section from "./Component/HeroSection/HeroSection";
import './i18n';
const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-white">
        <Navbar />
        <div className="mt-10">
          <Routes>
            <Route path="/" element={<Hero_section />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
