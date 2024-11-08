import React from 'react'
import { useNavigate } from 'react-router-dom';
const ActsandRules = () => {
  const navigate = useNavigate;
  const handleClick0 = () => {
    console.log("hello");
    navigate("/Video2");
  };
  return (
    <>
      <div className="acts-div  flex h-60 justify-between pl-[10%] pr-[10%]">
        <div className=" all-logo flex flex-col items-center">
          <div className="logo1"></div>
          <div className="logo-text text-[150%] text-black font-extrabold ">
            <button className="acts-text"  >
              FUNDAMENTAL RIGHTS
            </button>
          </div>
        </div>
        <div className="all-logo flex flex-col items-center">
          <div className="logo2"></div>
          <div className="logo-text text-[150%] text-black font-extrabold">
            <button className="acts-text" onClick={handleClick0} >
              DIRECTIVE PRINCIPLES
            </button>
          </div>
        </div>
        <div className="all-logo flex flex-col items-center">
          <div className="logo3"></div>
          <div className="logo-text text-[150%] text-black font-extrabold">
            <button className="acts-text"  >
              FUNDAMENTAL DUTIES
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActsandRules
