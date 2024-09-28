import React from 'react';
import ellipse3 from "../../assets/ellipse-3.svg";

const Ellipse3: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <img
                src={ellipse3}
                alt="Ellipse Design"
                className="w-full max-w-[1144px] h-auto max-h-[505px]"
            />
        </div>
    );
}

export default Ellipse3;
