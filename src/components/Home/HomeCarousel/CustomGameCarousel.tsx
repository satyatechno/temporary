"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CustomGameCarousel = ({ children }: any) => {
    
  const customArrowStyles: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    zIndex: 2,
    transform: "translateY(-50%)",
    background: "#c6c6c617",
    borderRadius: "33px",
    fontSize: "2.5rem",
    color: "#ffff",
    border: "none",
    padding: "6px 16px",
    cursor: "pointer",
    // backdropFilter:'blur(-2.9px)',

    boxShadow: "inset 0 0 5.833px 0 #518cff",
    fill: "linear-gradient(97deg, hsla(0, 0%, 100%, .12) -1.8%, hsla(0, 0%, 100%, .1) 103.93%)",
    strokeWidth: ".233px",
    stroke: "#0166ff",
    filter: "drop-shadow(rgba(110, 58, 255, 0.8) 0px 0px 28.067px",
  };

  const renderCustomArrowPrev = (
    onClickHandler: () => void,
    hasPrev: boolean,
    label: string
  ): React.ReactNode =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ ...customArrowStyles, left: "15px" }}
      >
        &lt;{/* Left arrow symbol */}
      </button>
    );

  const renderCustomArrowNext = (
    onClickHandler: () => void,
    hasNext: boolean,
    label: string
  ): React.ReactNode =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ ...customArrowStyles, right: "15px" }}
      >
        &gt; {/* Right arrow symbol */}
      </button>
    );

  return (
    <Carousel
      renderArrowPrev={renderCustomArrowPrev}
      renderArrowNext={renderCustomArrowNext}
      autoPlay
      infiniteLoop
      interval={5000}
      showStatus={false}
      showArrows
    >
      {children}
    </Carousel>
  );
};

export default CustomGameCarousel;
