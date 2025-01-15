'use client'
import { useState } from "react";
import styles from "./maticurrencytoggler.module.scss";
import Image from "next/image";
import config from "../../../../config";
// import { useAppContext } from "@/app/Context/AuthContext";

const MaticCurrencyToggler = ({setActiveButton,totalTickets,walletBalance,activeButton}:any) => {
  // const [activeTab, setActiveTab] = useState<"CURRENCY" | "TICKETS">(
  //   "CURRENCY"
  // );

  // const { activeButton, setActiveButton }:any = useAppContext();

  // console.log("activeButton",activeButton)
  
  const handleTabClick = (direction: "TICKETS" | "CURRENCY") => {
    if (activeButton !== direction) {
      setActiveButton(direction);
    }
  };

  return (
    <main className={styles.main_container}>
      <div className={styles.wrapper}>
        <div
          className={`${styles.taebSwitch} ${
            activeButton === "TICKETS" ? styles.left : styles.right
          }`}
        >
          <div
            className={`${styles.taeb} ${
              activeButton === "TICKETS" ? styles.active : ""
            }`}
            onClick={() => {
              handleTabClick("TICKETS");
              // fetchPastTour(1);
            }}
          >
            {totalTickets}
            <Image
              src={`${config?.imageDomain}Assetsticket.webp`}
              alt=""
              height={15}
              width={15}
              // onClick={() => setActive("TICKETS")}
            />
          </div>

          <div
            className={`${styles.taeb} ${
              activeButton === "CURRENCY" ? styles.active : ""
            }`}
            onClick={() => {
              handleTabClick("CURRENCY");
              // fetchTour();
            }}
          >
            {walletBalance}
            <Image
              src={`${config.imageDomain}Assets/matic.webp`}
              alt=""
              // onClick={() => set Active("CURRENCY")}
              height={15}
              width={15}
            />
          </div>
          
        </div>
      </div>

      {/* {activeButton === "right" ? (
        <div className={styles.past_tournament_container}>ticket</div>
      ) : (
        <div className={styles.live_tournament_container}>matic</div>
      )} */}
    </main>
  );
};

export default MaticCurrencyToggler;
