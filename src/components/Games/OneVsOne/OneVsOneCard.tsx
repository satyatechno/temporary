"use client";
import Image from "next/image";
import styles from "./oneVsOne.module.scss";
import { poppins } from "@/app/layout";
import { useAppContext } from "@/app/Context/AuthContext";
import { useState } from "react";
import PaymentPopUp from "@/components/CommonComponent/PaymentPopUp/PaymentPopUp";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type TItem = {
  id: number;
  reward: number | string;
  entryPrice: number;
};

interface TOneVsOneCard {
  item: TItem;
  index: number;
  gameDetails: any;
  isMobileDevice: boolean;
  isDesktopDevice: boolean;
}

const OneVsOneCard = ({
  item,
  index,
  gameDetails,
  isMobileDevice,
  isDesktopDevice,
}: TOneVsOneCard) => {
  const { medium } = useAppContext();
  const router = useRouter();
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const token = Cookies.get('userToken');

  // console.log("userDatatoken",token)

  const handlePlayClick = () => {
    if (!token) {
      setShowPaymentPopup(true);
      return;
    }


    const queryParams = new URLSearchParams({
      game: gameDetails?.name || "",
      stage: (index + 1).toString(),
      value: item?.entryPrice.toString(),
      name: gameDetails?.name || "",
      gameType: "OneVSOne",
      landscape: gameDetails?.landscape ? "true" : "false",
      direct: "false",
      practice: "false",
      isCustomBet: "false",
      medium: medium || "",
      isMobileDevice: isMobileDevice.toString(),
      isDesktopDevice: isDesktopDevice.toString(),
    });
    router.push(`/playgame?${queryParams.toString()}`);
  };

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

      <span
        role="button"
        tabIndex={0}
        className={poppins.className}
        onClick={handlePlayClick}
        onKeyDown={(e) => e.key === "Enter" && handlePlayClick()}
        style={{ cursor: "pointer" }}
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

      {showPaymentPopup && <PaymentPopUp onClose={() => setShowPaymentPopup(false)} />}
    </div>
  );
};

export default OneVsOneCard;