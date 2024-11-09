import React from "react";
import thirdVideo from "../assets/third.mp4";
import Navbar from "./Navbar";
const Video3 = () => {
  return (
    <>
      <Navbar/>
    <div className=" w-full bg-slate-900  flex justify-center items-center h-screen">
      <div className="w-[60%]">
        <video className="w-full" controls>
          <source src={thirdVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
      </>
  );
};

export default Video3;
