import React from 'react';
import fi_4997543 from "../../assets/fi-4997543.svg";
import fi_4616734 from "../../assets/fi-4616734.svg";
import fi_14752947 from "../../assets/fi-14752947.svg";
import fi_8790284 from "../../assets/fi-8790284.svg";
import fi_17353215 from "../../assets/fi-17353215.svg";
import Ellipse from './Ellipse';

const KeyFeatures: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center border border border-black bg-[rgba(26,26,26,0.9)] bg-opacity-10 rounded-2xl py-14 px-0 max-w-[1320px] mx-auto">
      <div className="flex flex-col items-center gap-8 mb-14">
        <img src={fi_4997543} alt="icon" className="w-[100px] h-[100px]" />
        <h1 className="font-sora font-normal text-[60px] leading-[75.6px] text-white">What you will get</h1>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-[50px] justify-center">
          <div className="flex items-center gap-6 py-3 px-10 bg-white bg-opacity-5 backdrop-blur-xl border border-[#ff8b44] rounded-2xl w-[492px] h-[115px]">
            <img src={fi_4616734} alt="icon" className="w-[60px] h-[60px]" />
            <span className="font-whyte font-normal text-[36px] leading-5 text-white">Hands on learning</span>
          </div>
          <div className="flex items-center gap-6 py-3 px-10 bg-white bg-opacity-5 backdrop-blur-xl border border-[#ff8b44] rounded-2xl w-[492px] h-[115px]">
            <img src={fi_14752947} alt="icon" className="w-[60px] h-[60px]" />
            <span className="font-whyte font-normal text-[36px] leading-5 text-white">In-Demand Skill Set</span>
          </div>
        </div>
        <div className="flex gap-[50px] justify-center">
          <div className="flex items-center gap-6 py-3 px-10 bg-white bg-opacity-5 backdrop-blur-xl border border-[#ff8b44] rounded-2xl w-[492px] h-[115px]">
            <img src={fi_8790284} alt="icon" className="w-[60px] h-[60px]" />
            <span className="font-whyte font-normal text-[36px] leading-5 text-white">Expert-Led Content</span>
          </div>
          <div className="flex items-center gap-6 py-3 px-6 bg-white bg-opacity-5 backdrop-blur-xl border border-[#ff8b44] rounded-2xl w-[492px] h-[115px]">
            <img src={fi_17353215} alt="icon" className="w-[60px] h-[60px]" />
            <span className="font-whyte font-normal text-[36px] leading-5 text-white">Efficient Career Path</span>
          </div>
        </div>
      </div>

      {/* Ellipse Positioned in the Background */}
      <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <Ellipse />
      </div>

    </div>
  );
};

export default KeyFeatures;
