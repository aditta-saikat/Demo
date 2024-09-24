// VerticalSpheres.js
import React from "react";
import property1Default from "../../assets/property-1-default.svg";

function VerticalSpheres() {
  return (
    <div
      className="absolute inset-0 w-[700px] h-[700px] animate-spin opacity-25"
      style={{ animationDuration: "7s", top: "30%", left: "70%" }} // Adjust position as needed
    >
      <img
        src={property1Default}
        alt="Default Sphere"
        className="w-full h-full"
      />
    </div>
  );
}

export default VerticalSpheres;
