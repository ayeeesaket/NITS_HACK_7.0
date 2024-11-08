import React, { useState, useEffect } from "react";
import slide1 from "../assets/images/slide1.png"
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.png";

// Move slides array outside component to avoid recreating it
const slides = [
  { url: slide1 },
  { url: slide2 },
  { url: slide3 },
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
