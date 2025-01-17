
import styles from "./homeCarousel.module.scss";
import React from "react";
import Image from "next/image";
import { marqueeImages } from "@/utils/Utils";
import GameCarousel from "./GameCarousel";

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
  gamesData?: GameData[];
};

const HomeCarousel: React.FC<HomeCarouselProps> = async({gamesData}:any) => {

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
                style={{ height: "80px", width: "auto",objectFit:"contain" }}
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
      <GameCarousel gamesData={gamesData}/>
    </main>
  );
};

export default HomeCarousel;
