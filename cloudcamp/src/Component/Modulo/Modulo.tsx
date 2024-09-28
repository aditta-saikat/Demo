import React from 'react';
import CheckboxIcon1 from '../../assets/bxs-checkbox-2.svg';
import CheckboxIcon2 from '../../assets/bxs-checkbox-3.svg';
import CheckboxIcon3 from '../../assets/bxs-checkbox.svg';
import CheckboxIcon4 from '../../assets/bxs-checkbox-4.svg';
import vector15 from '../../assets/vector-15.svg';
import vector16 from '../../assets/vector-16.svg';
import vector2 from '../../assets/vector-2.svg';
import Header from './Header';

const ModuleBox: React.FC<{ number: string; title: string; isLeft: boolean; icon: string; isFirstBox?: boolean }> = ({
  number,
  title,
  isLeft,
  icon,
  isFirstBox = false,
}) => (
  <div
    className={`relative flex items-center justify-between w-[660px] h-[150px] mb-0 ${
      isLeft ? 'mr-auto' : 'ml-auto'
    }`}
    style={{
      marginLeft: isLeft ? '0' : 'calc(90% + 0px)',
      marginRight: isLeft ? 'calc(90% + 0px)' : '0',
      textAlign: isLeft ? 'right' : 'left',
    }}
  >
    {isLeft ? (
      <>
        {/* Modulo number and title for left-aligned box */}
        <div className="flex flex-col items-end flex-grow">
          <div className="text-white text-l font-semibold w-[100px] text-center mb-2 border border-gray-500 bg-[rgba(26,26,26,0.9)] rounded-lg p-2">
            {number}
          </div>
          <div className="border border-gray-500 bg-[rgba(26,26,26,0.9)] rounded-lg p-2 text-white text-lg w-full text-right mt-1">{title}</div>
        </div>

        {/* Checkbox and either dotted line or vector15 */}
        <div className={`flex flex-col items-center ${!isFirstBox ? 'p-4' : 'p-[-1px]'}`}>
          <img src={icon} alt="Checkbox" className="w-8 h-8 mb-2" />
          {isFirstBox ? (
            <img src={vector15} alt="Vector 15" className="w-[80px] h-14" />
          ) : (
            <div className="border-dashed border-l-2 border-blue-300 h-28" />
          )}
        </div>
      </>
    ) : (
      <>
        {/* Checkbox and either dotted line or vector16 for right-aligned box */}
        <div className={`flex flex-col items-center ${!isFirstBox ? 'p-4' : ''}`}>
          <img src={icon} alt="Checkbox" className="w-8 h-8 mb-2" />
          {isFirstBox ? (
            <img src={vector16} alt="Vector 16" className="w-[68px] h-28" />
          ) : (
            <div className="border-dashed border-l-2 border-blue-300 h-28" />
          )}
        </div>

        {/* Modulo number and title */}
        <div className="flex flex-col items-start flex-grow">
          <div className="text-white text-l font-semibold w-[100px] text-center mb-2 border border-gray-500 bg-[rgba(26,26,26,0.9)] rounded-lg p-2">
            {number}
          </div>
          <div className="border border-gray-500 bg-[rgba(26,26,26,0.9)] rounded-lg p-2 text-white text-lg w-full text-left mt-1">{title}</div>
        </div>
      </>
    )}
  </div>
);

const Modulo: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center p-5 text-white min-h-screen overflow-hidden"
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        background: 'linear-gradient(to right, black, black)',
        position: 'relative',
      }}
    >
      {/* Content starts here */}
      <div className="relative z-10 w-full">
        <Header />

        {/* Container for the timeline */}
        <div className="relative flex flex-col items-center  bg-[rgba(26,26,26,0.9)] bg-opacity-10 rounded-2xl py-14 px-0 max-w-[1320px] mx-auto">
          {/* Central vertical line (vector16) */}
          <img src={vector15} alt="Vertical Line" className="absolute w-[10px] h-full left-1/2 transform -translate-x-1/2" />

          {/* Timeline */}
          <div className="relative mt-20 mb-20">
            {/* Modules */}
            <div className="relative flex flex-col items-center">
              {/* Module 1 - special case, using vector15 */}
              <ModuleBox number="Modulo1" title="Get your Basics Right" icon={vector2} isLeft={false} isFirstBox={true} />

              {/* Module 2 */}
              <ModuleBox number="Modulo2" title="Streamline Continuous Integration and Deployment" icon={CheckboxIcon2} isLeft={true} />

              {/* Module 3 */}
              <ModuleBox number="Modulo3" title="Task definition, Image tags in production and Load Balancer" icon={CheckboxIcon3} isLeft={false} />

              {/* Module 4 */}
              <ModuleBox number="Modulo4" title="Deploying Service on to ECS" icon={CheckboxIcon4} isLeft={true} />

              {/* Module 5 */}
              <ModuleBox number="Modulo5" title="Learn AWS EKS" icon={CheckboxIcon1} isLeft={false} />
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-12 flex justify-center">
            <button className="px-6 py-2 bg-[#4377fe] rounded-full text-lg text-white transition-all hover:bg-blue-600">
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulo;
