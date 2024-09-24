import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../src/Component/Navbar/Navbar";
import Hero_section from "./Component/Hero_section/Hero_section";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content-below-navbar">
          <Routes>
            <Route path="/" element={<Hero_section />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
