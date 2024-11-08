import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar pt-2 flex justify-around h-[17vh] w-[100vw] bg-white text-black font-bold">
        <div className="navbar-left flex-col text-2xl">
          <div className="head-hindi">नागरिक और संविधान</div>
          <div className="head-english">Nagrik Aur Sanvidhan</div>
        </div>
              <div className="navbar-mid flex gap-10 align-center jus
        tify-center">
          <div className="home">Home</div>
          <div className="learn">Learn</div>
          <div className="actsandrules">Acts and Rules</div>
          <div className="About">About</div>
        </div>
        <div className="navbar-right flex gap-10">
          <div className="create">Create Acount</div>
          <div className="login">Login</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
