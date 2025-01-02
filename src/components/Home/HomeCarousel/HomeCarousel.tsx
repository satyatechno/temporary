"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import styles from "./homeCarousel.module.scss";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGamesContext } from "@/app/Context/GamesContext";
import { marqueeImages } from "@/utils/Utils";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";

// Define types for game data
type GameData = {
  _id: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  IconImage: string;
  IconImageAlt: string;
  name: string;
};

type HomeCarouselProps = {
  games?: GameData[];
};

const HomeCarousel: React.FC<HomeCarouselProps> = () => {
  const { games } = useGamesContext();
  const router = useRouter();
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

  const repeatCount = 40; // Number of repetitions
  const text = "Play.Earn.Repeat";
  const symbol = "✦";

  return (
    <main className={styles.main_container}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {marqueeImages.concat(marqueeImages).map((image, index) => (
            <div className={styles.marqueeImageWrapper} key={index}>
              <Image
                src={image.src}
                alt="marquee-images"
                height={0}
                width={0}
                sizes="100vw"
                style={{ height: "80px", width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marqueeContainer2}>
        <div className={styles.marqueeTrack2}>
          {Array.from({ length: repeatCount }).map((_, index) => (
            <React.Fragment key={index}>
              <p className={styles.marqueeText}>{text}</p>
              <p className={styles.marqueeSymbol}>{symbol}</p>
            </React.Fragment>
          ))}
        </div>
      </div>

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
                alt={data.backgroundImageAlt || "games-image"}
                fill
              />
            </div>
            <div className={styles.icon_image_container}>
              <Image
                src={data.IconImage}
                alt={data.IconImageAlt || "game-icons"}
                fill
              />
            </div>
            <div className={styles.playButton}>
              <Button
                value="Play Now"
                onClick={() => {
                  router.push(`games/${data?.name}`);
                }}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </main>
  );
};

export default HomeCarousel;
