import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import KeyFeatures from "../KeyFeatures/KeyFeatures";

const Home: React.FC = () => {
  return (
      <div className="bg-black">
           <Navbar />
        <div className="mt-10">
            <HeroSection />
            
        </div>
            
      </div>
  );
};

export default Home;
