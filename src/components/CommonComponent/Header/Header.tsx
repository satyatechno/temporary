"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { header_element } from "@/utils/Utils";
import { useState, useEffect } from "react";
// import Register from "@/components/AuthModal/Register/Register";
// import Login from "@/components/AuthModal/Login/Login";
import ModalWallet from "@/components/AuthModal/ModalWallet/ModalWallet";
import Button from "../AnimatedButton/AnimatedButton";
import config from "../../../../config";
import Cookies from "js-cookie";
import { useAppContext } from "@/app/Context/AuthContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MaticCurrencyToggler from "../MaticCurrencyToggler/MaticCurrencyToggler";
import { deviceApi, getUserApi } from "@/services/GameServices";

export const dynamic = 'force-dynamic';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasSignedInToken = Cookies.get("userToken");
  const { userData, wallet, medium, setMedium } = useAppContext();
  const router = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("userToken");

  const noHeaderFooterPaths = ["/userwallet"];

  const absoulte_header = ["/"];

  const shouldShowHeaderFooter = !(
    noHeaderFooterPaths.includes(pathname) || pathname.startsWith("/playgame")
  );

  const shouldShowHeaderFooterAbsolute = !absoulte_header.includes(pathname);


  
  const fetchUserDetails = async () => {
    try {
      const res = await getUserApi();

      if (!res || !res.data?.data?.user) {
        console.error("Failed to fetch user details.");
        return;
      }
      Cookies.set("userToken", accessToken || "", {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("user", JSON.stringify(res.data.data.user), {
        secure: true,
        sameSite: "Strict",
      });
      await deviceApi({
        fcm_token: Cookies.get("fcmToken") || "",
        deviceType: "web",
      });
      console.log("User details and device information updated successfully.");
    } catch (error) {
      console.error("Error fetching user details or updating device info:", error);
    }
  };
  
  
  useEffect(() => {
    if (accessToken) {
      fetchUserDetails();
    } else {
      console.log('No accessToken found in the query params.');
    }
  }, []);


  if (!shouldShowHeaderFooter) {
    return null;
  }

  console.log("token---->", medium, accessToken);
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
            style={{ objectFit: "contain" }}
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
            {!hasSignedInToken || !accessToken ? null : wallet?.balance <= 0 ? (
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
                setActiveButton={setMedium}
                totalTickets={userData?.tickets?.toFixed(2)}
                walletBalance={wallet?.balance?.toFixed(2)}
                activeButton={medium}
              />
            ) : null}
          </div>

          <div className={styles.notification_image}>
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
      </div>

      {isModalOpen && <ModalWallet onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Header;
