import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './i18n';
import Home from "./Component/Home/Home";

const App: React.FC = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />    
          </Routes>
    </Router>
  );
};

export default App;
