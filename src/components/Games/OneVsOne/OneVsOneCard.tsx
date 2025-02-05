'use client'
import Image from "next/image";
import styles from "./oneVsOne.module.scss";
import Link from "next/link";
import { poppins } from "@/app/layout";
import { useAppContext } from "@/app/Context/AuthContext";

type TItem = {
  id: number;
  reward: number | string;
  entryPrice: number;
};

interface TOneVsOneCard {
  item: TItem;
  index: number;
//   onClick: (item: TItem) => void;
  gameDetails: any;
  isMobileDevice:boolean;
  isDesktopDevice:boolean;
//   medium: any;
}

const OneVsOneCard = ({ item, index, gameDetails ,isMobileDevice,isDesktopDevice}: TOneVsOneCard) => {
  const { medium } = useAppContext();
  return (
    <div className={`${styles.card} ${styles["gradient" + (index % 4)]}`}>
      <div className={`${styles.leftBar} ${styles["leftBar" + (index % 4)]}`} />
      <h3 className={poppins.className}>REWARD</h3>
      <div className={styles.icon} />
      <div className={styles.matic}>
        <h2>{item.reward}</h2>
        <Image
          src={
            medium === "ticket"
              ? "https://assets.gamingarcade.io/Assetsticket.webp"
              : `https://assets.gamingarcade.io/Assets/matic.webp`
          }
          alt="Matic"
          width={60}
          height={60}
        />
      </div>
      <Link
        href={{
          pathname: "/playgame",
          query: {
            game: gameDetails?.name,
            stage: index + 1,
            value: item?.entryPrice,
            name: gameDetails?.name,
            gameType: "OneVSOne",
            landscape: gameDetails?.landscape ? true : false,
            direct: false,
            practice: false,
            isCustomBet: false,
            medium: medium,
            isMobileDevice:isMobileDevice,
            isDesktopDevice:isDesktopDevice

          },
        }}
      >
        <span
          // onClick={() => onClick(item) }
          className={poppins.className}
        >
          Play {item.entryPrice} {medium === "ticket" ? "Ticket" : "Matic"}
          <Image
            style={{ marginLeft: 10 }}
            src={`https://assets.gamingarcade.io/Assets/arrow-sm.webp`}
            alt="arrow"
            width={24}
            height={9}
            quality={85}
          />
        </span>
      </Link>
    </div>
  );
};

export default OneVsOneCard;
