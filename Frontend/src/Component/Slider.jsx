import React, { useState, useEffect } from "react";

import slide6 from "../assets/images/slide6.jpg";
 
import slide4 from "../assets/images/slide4.jpg";
import slide5 from "../assets/images/slide5.jpg"; // Move slides array outside component to avoid recreating it
const slides = [
  { url: slide5 },

  { url: slide6 },
  
  { url: slide4 },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="banner-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="slider"
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            className="slide"
            key={index}
            style={{
              backgroundImage: `url(${slide.url})`,
              minWidth: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
