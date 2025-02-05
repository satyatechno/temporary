// "use client";
import React from "react";
import styles from "./oneVsOne.module.scss";
import { inter } from "@/app/layout";
// import { useRouter } from "next/navigation";
// import { useGamesContext } from '@/app/Context/GamesContext';
// import { useAppContext } from "@/app/Context/AuthContext";
import Image from "next/image";
import OneVsOneCard from "./OneVsOneCard";
// type TItem = {
//   id: number;
//   reward: number | string;
//   entryPrice: number;
// };

import { headers } from 'next/headers';

const cardData = [
  {
    id: 1,
    reward: 1.8,
    entryPrice: 1,
  },
  {
    id: 2,
    reward: "09",
    entryPrice: 5,
  },
  {
    id: 3,
    reward: 18,
    entryPrice: 10,
  },
  {
    id: 4,
    reward: 90,
    entryPrice: 50,
  },
];

const OneVsOne = async({ gameDetails }: { gameDetails: any }) => {

  const headersList = headers();
  const userAgent = (await headersList).get('user-agent') || '';
  const isMobileDevice = /Mobile|Android|iPhone|iPad|iPod|Windows Phone/i.test(userAgent);
  const isTabletDevice = /iPad|Android|Tablet/i.test(userAgent) && !isMobileDevice;
  const isDesktopDevice = !isMobileDevice && !isTabletDevice;

  console.log('isDesktopDevice',isDesktopDevice,isMobileDevice,isTabletDevice)


  // const router = useRouter();
  // const handlePlay = (item: TItem) => {
  //   console.log(item.entryPrice, item.id, gameDetails?.name);
  //   router.push("/playgame?game=" + gameDetails?.name);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <div className={styles.battle_image_container}>
            <Image
              src={`https://assets.gamingarcade.io/Assets/diamond.webp`}
              alt="battle"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1 className={inter.className}>
            Play <div className={styles.gradient}>{"1 vs 1"}</div>
            <div className={styles.line} />
          </h1>
        </div>
        <h2 className={`${styles.stage} ${inter.className}`}>STAGES</h2>
      </div>

      <div className={styles.cardContainer}>
        {cardData.map((item, index) => (
          <OneVsOneCard
            key={index?.toString()}
            item={item}
            index={index}
            // onClick={handlePlay}
            gameDetails={gameDetails}
            // medium={medium}
            isDesktopDevice={isDesktopDevice}
            isMobileDevice={isMobileDevice}
          />
        ))}
      </div>

      <div className={styles.anime}>
        <div className={styles.gradientDiv} />
        <div className={styles.hero_image_container}>
          <Image
            src={`https://assets.gamingarcade.io/Assets/person.webp`}
            alt="person"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};
export default OneVsOne;
