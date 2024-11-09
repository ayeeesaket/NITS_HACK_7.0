import React from "react";
import { useNavigate } from "react-router-dom";
const ActsandRules = () => {
  const navigate = useNavigate();
  const handleClick0 = () => {
    console.log("hello");
    navigate("/Video1");
  };
  const handleClick1 = () => {
    console.log("hello");
    navigate("/Video2");
  };
  const handleClick3 = () => {
    console.log("hello");
    navigate("/Video3");
  };
  return (
    <>
      <div className="acts-div  flex h-60 justify-between pl-[10%] pr-[10%]">
        <div
          className=" all-logo flex flex-col items-center"
          onClick={handleClick0}
        >
          <div className="logo1"></div>
          <div className="logo-text text-[150%] text-black font-extrabold ">
            <button className="acts-text">FUNDAMENTAL RIGHTS</button>
          </div>
        </div>
        <div
          className="all-logo flex flex-col items-center"
          onClick={handleClick1}
        >
          <div className="logo2"></div>
          <div className="logo-text text-[150%] text-black font-extrabold">
            <button className="acts-text">DIRECTIVE PRINCIPLES</button>
          </div>
        </div>
        <div
          className="all-logo flex flex-col items-center"
          onClick={handleClick3}
        >
          <div className="logo3"></div>
          <div className="logo-text text-[150%] text-black font-extrabold">
            <button className="acts-text">FUNDAMENTAL DUTIES</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActsandRules;
