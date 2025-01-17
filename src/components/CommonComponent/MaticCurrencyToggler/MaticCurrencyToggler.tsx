'use client';
import styles from './maticurrencytoggler.module.scss';
import Image from 'next/image';
import config from '../../../../config';
// import { useAppContext } from "@/app/Context/AuthContext";

const MaticCurrencyToggler = ({
  setActiveButton,
  totalTickets,
  walletBalance,
  activeButton,
}: any) => {
  const handleTabClick = (direction: 'ticket' | 'currency') => {
    if (activeButton !== direction) {
      setActiveButton(direction);
    }
  };

  return (
    <main className={styles.main_container}>
      <div className={styles.wrapper}>
        <div
          className={`${styles.taebSwitch} ${
            activeButton === 'ticket' ? styles.left : styles.right
          }`}
        >
          <div
            className={`${styles.taeb} ${
              activeButton === 'ticket' ? styles.active : ''
            }`}
            onClick={() => {
              handleTabClick('ticket');
              // fetchPastTour(1);
            }}
          >
            {totalTickets}
            <Image
              src={`${config?.imageDomain}Assetsticket.webp`}
              alt=""
              height={15}
              width={15}
              // onClick={() => setActive("ticket")}
            />
          </div>

          <div
            className={`${styles.taeb} ${
              activeButton === 'currency' ? styles.active : ''
            }`}
            onClick={() => {
              handleTabClick('currency');
              // fetchTour();
            }}
          >
            {walletBalance}
            <Image
              src={`${config.imageDomain}Assets/matic.webp`}
              alt=""
              // onClick={() => set Active("currency")}
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
