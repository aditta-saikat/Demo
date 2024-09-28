import React from 'react';
import ellipse from "../../assets/ellipse-2.svg";

const Ellipse: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <img
                src={ellipse}
                alt="Ellipse Design"
                className="w-full max-w-[1144px] h-auto max-h-[505px]"
            />
        </div>
    );
}

export default Ellipse;
