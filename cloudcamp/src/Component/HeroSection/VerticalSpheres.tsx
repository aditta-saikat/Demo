import React from "react";
import property1Default from "../../assets/property-1-default.svg";

const VerticalSpheres: React.FC = () => {
  return (
    <div
      className="absolute inset-0 w-[700px] h-[700px] animate-spin opacity-25"
      style={{ animationDuration: "7s", top: "30%", left: "70%" }} 
    >
      <img
        src={property1Default}
        alt="Default Sphere"
        className="w-full h-full"
      />
    </div>
  );
};

export default VerticalSpheres;
