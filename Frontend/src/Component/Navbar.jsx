import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleClick0 = () => {
    console.log("hello");
    navigate("/Register");
  };
  const handleClick1 = () => {
    console.log("hello");
    navigate("/");
  };
  const handleClick2 = () => {
    console.log("hello");
    navigate("/Quiz");
  };
  const handleClick3 = () => {
    console.log("hello");
    navigate("/Book");
  };
  const handleClick4 = () => {
    console.log("hello");
    navigate("/Browse");
  };
  return (
    <>
      <div className="navbar pt-3 flex justify-around h-[17vh] w-[100vw] bg-white text-black font-bold align-middle">
        <div className="flex items-center gap-3">
          <div className="logo"></div>

          {/* Divider line between logo and heading */}
          <div className="divider h-10 w-[2px] bg-gray-400"></div>

          <div className="navbar-left flex-col text-lg">
            <div className="head-hindi">नागरिक और संविधान</div>
            <div className="head-english">Nagrik Aur Sanvidhan</div>
          </div>
        </div>
        <div className="navbar-mid flex gap-10 justify-center pt-8">
          <div className="home nav-but" onClick={handleClick4}>
            Home
          </div>
          <div className="learn nav-but" onClick={handleClick2}>
            Quiz
          </div>
          <div className="actsandrules nav-but" onClick={handleClick3}>
            Acts and Rules
          </div>
          <div className="about nav-but ">About</div>
        </div>
        <div className="navbar-right flex gap-10 pt-8">
          <div className="create nav-but" onClick={handleClick0}>
            Create Account
          </div>
          <div className="login nav-but " onClick={handleClick1}>
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
