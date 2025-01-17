"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { header_element } from "@/utils/Utils";
import { useState } from "react";
// import Register from "@/components/AuthModal/Register/Register";
// import Login from "@/components/AuthModal/Login/Login";
import ModalWallet from "@/components/AuthModal/ModalWallet/ModalWallet";
import Button from "../AnimatedButton/AnimatedButton";
import config from "../../../../config";
import Cookies from "js-cookie";
import { useAppContext } from "@/app/Context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import MaticCurrencyToggler from "../MaticCurrencyToggler/MaticCurrencyToggler";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasSignedInToken = Cookies.get("userToken");
  const { userData, wallet, activeButton, setActiveButton } = useAppContext();
  const router = useRouter();

  console.log(
    "activeButton-header",
    activeButton,
    wallet?.balance,
    userData?.tickets?.toFixed(2)
  );
  // const [activeButton, setActive] = useState("CURRENCY");

  const pathname = usePathname();
  const noHeaderFooterPaths = ["/userwallet"];

  const absoulte_header = ["/"];

  const shouldShowHeaderFooter = !(
    noHeaderFooterPaths.includes(pathname) || pathname.startsWith("/playgame")
  );

  const shouldShowHeaderFooterAbsolute = !absoulte_header.includes(pathname);

  if (!shouldShowHeaderFooter) {
    return null;
  }

  // if(!hasSignedInToken){return null};

  return (
    <div
      className={styles.main_container}
      style={{
        position: shouldShowHeaderFooterAbsolute ? "relative" : "absolute",
      }}
    >
      <div className={styles.image_container}>
        <Link href="/">
          <Image
            alt="gaming-arcde"
            src={`${config.imageDomain}/Assets/logo.webp`}
            fill
            style={{objectFit:"contain"}}
          />
        </Link>
      </div>
      <div className={styles.right_header_content}>
        <div className={styles.toggler_page_header}>
          {header_element?.map((value) => (
            <Link href={value?.link} key={value?.title}>
              <p className={styles.header_title} key={value?.title}>
                {value?.title}
              </p>
            </Link>
          ))}
        </div>
        <div className={styles.wallet_headers}>
          {/* togging of curreny logic */}
          <div className={styles.wallet_currency_type}>
            {!hasSignedInToken ? null : wallet?.balance <= 0 ? (
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
            ) : wallet?.balance > 0 ? (
              <MaticCurrencyToggler
                setActiveButton={setActiveButton}
                totalTickets={userData?.tickets?.toFixed(2)}
                walletBalance={wallet?.balance?.toFixed(2)}
                activeButton={activeButton}
              />
            ) : // <div
            //   className={styles.toggleBtnContainerWeb}
            //   style={{ marginRight: "30px" }}
            // >
            //   <div
            //     className={
            //       activeButton === "TICKETS"
            //         ? styles.activeBtnWeb
            //         : styles.notActiveWeb
            //     }
            //   >
            //     {activeButton === "TICKETS" && (
            //       <p>{userData?.tickets?.toFixed(2)}</p>
            //     )}
            //     <Image
            //       src={`${config?.imageDomain}Assetsticket.webp`}
            //       alt=""
            //       height={20}
            //       width={20}
            //       onClick={() => setActiveButton("TICKETS")}
            //     />
            //   </div>
            //   <div
            //     className={
            //       activeButton === "CURRENCY"
            //         ? styles.activeBtnWeb
            //         : styles.notActiveWeb
            //     }
            //   >
            //     {activeButton === "CURRENCY" && (
            //       <p>{wallet?.balance?.toFixed(2)}</p>
            //     )}
            //     <Image
            //       src={`${config.imageDomain}Assets/matic.webp`}
            //       alt=""
            //       onClick={() => setActiveButton("CURRENCY")}
            //       height={20}
            //       width={20}
            //     />
            //   </div>
            // </div>
            null}
          </div>

          <div className={styles.notification_image}>
            <Image
              src={`${config.imageDomain}AssetsnotificationBell.webp`}
              alt="notification-logo"
              fill
            />
          </div>

          {hasSignedInToken ? (
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
      </div>

      {isModalOpen && <ModalWallet onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Header;
