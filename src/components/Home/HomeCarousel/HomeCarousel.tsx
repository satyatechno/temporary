"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import styles from "./homeCarousel.module.scss";
import React from "react";
import Image from "next/image";
import Buttons from "@/components/CommonComponent/CustomButton/Buttons";

// Define types for game data
type GameData = {
  _id: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  IconImage: string;
  IconImageAlt: string;
};

type HomeCarouselProps = {
  games?: GameData[];
};

const HomeCarousel: React.FC<HomeCarouselProps> = ({ games }) => {


  const customArrowStyles: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    zIndex: 2,
    transform: "translateY(-50%)",
    background: "#ffffffa2",
    borderRadius: "22px",
    fontSize: "1rem",
    color: "#000",
    border: "none",
    padding: "16px",
    cursor: "pointer",
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
        &#8592; {/* Left arrow symbol */}
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
        &#8594; {/* Right arrow symbol */}
      </button>
    );

  return (
    <main>
      <Carousel
        renderArrowPrev={renderCustomArrowPrev}
        renderArrowNext={renderCustomArrowNext}
        autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
        showArrows
      >
        {games?.map((data) => (
          <div key={data._id}>
            <div className={styles.image_container}>
              <Image
                src={data.backgroundImage}
                alt={data.backgroundImageAlt}
                fill
              />
            </div>
            <div className={styles.icon_image_container}>
              <Image src={data.IconImage} alt={data.IconImageAlt} fill />
            </div>
            <div className={styles.playButton}>
              <Buttons />
            </div>
          </div>
        ))}
      </Carousel>
    </main>
  );
};

export default HomeCarousel;
