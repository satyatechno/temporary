"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "../AnimatedButton/AnimatedButton";
import MaticCurrencyToggler from "../MaticCurrencyToggler/MaticCurrencyToggler";
import styles from "./Header.module.scss";
import Cookies from "js-cookie";
import { useAppContext } from "@/app/Context/AuthContext";
import Image from "next/image";
import config from "../../../../config";
import ModalWallet from "@/components/AuthModal/ModalWallet/ModalWallet";
import { useState } from "react";
import Notifications from "../NotificationCenter/NotificationCenter";

const WalletHeader = () => {
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("accessToken");
  const hasSignedInToken = Cookies.get("userToken");
  const { userData, wallet, medium, setMedium } = useAppContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotificationModalOpen,setIsNotificationModalOpen]=useState(false);


  const router = useRouter();

  return (
    <>
      <div className={styles.wallet_headers}>
        <div className={styles.wallet_currency_type}>
          {!hasSignedInToken || accessToken ? null : wallet?.balance <= 0 ? (
            <div
              className={styles.toggleBtnContainerWeb}
              style={{ marginRight: "30px", padding: "10px 15px" }}
            >
              <p>{userData?.tickets?.toFixed(2)}</p>
              <Image
                src={`${config?.imageDomain}Assetsticket.webp`}
                alt=""
                height={20}
                width={20}
              />
            </div>
          ) : wallet?.balance >= 0 ? (
            <MaticCurrencyToggler
              setActiveButton={setMedium}
              totalTickets={userData?.tickets?.toFixed(2)}
              walletBalance={wallet?.balance?.toFixed(2)}
              activeButton={medium}
            />
          ) : null}
        </div>

        <div
          className={styles.notification_image}
          onClick={() => {
            setIsNotificationModalOpen(true);
          }}
        >
          <Image
            src={`${config.imageDomain}AssetsnotificationBell.webp`}
            alt="notification-logo"
            fill
          />
        </div>

        {hasSignedInToken || accessToken ? (
          <Button
            value="Wallet"
            icon={`${config.imageDomain}loading-images/wallet2.webp`}
            imageClass={styles.walletImage}
            onClick={() => router.push("/userwallet")}
          />
        ) : (
          <p
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <Button
              value={"Sign In"}
              className={styles.otpVerificationModal__contentSaveBtn} // css class not in use
            />
          </p>
        )}
      </div>

      {isModalOpen && <ModalWallet onClose={() => setIsModalOpen(false)} />}
      {isNotificationModalOpen && <Notifications onClose={() => setIsNotificationModalOpen(false)} />}

    </>
  );
};

export default WalletHeader;
