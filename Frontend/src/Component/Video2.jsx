import React from "react";
import secondVideo from "../assets/second.mp4";
const Video2 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[60%]">
        <video className="w-full" controls>
          <source src={secondVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video2;
