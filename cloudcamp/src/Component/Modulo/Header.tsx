import React from 'react';
import HeaderIcon from '../../assets/fi-3408476.svg';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-5 max-w-[1320px] mx-auto">
      <img src={HeaderIcon} alt="icon" className="w-24 h-24" />
      <h1 className="font-sora font-normal text-white text-[60px] leading-[75.6px] m-0">The Modules</h1>
    </div>
  );
}

export default Header;
