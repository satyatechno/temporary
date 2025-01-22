"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { header_element } from "@/utils/Utils";
import { useEffect, useCallback } from "react";

import config from "../../../../config";
import Cookies from "js-cookie";
import { useAppContext } from "@/app/Context/AuthContext";
import { usePathname, useSearchParams } from "next/navigation";
import { deviceApi } from "@/services/GameServices";
import WalletHeader from "./WalletHeader";

export const dynamic = "force-dynamic";

const Header = () => {
  const { fetchUser,fetchActiveWallet} = useAppContext();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("accessToken");

  const noHeaderFooterPaths = ["/userwallet"];

  const absoulte_header = ["/"];

  const shouldShowHeaderFooter = !(
    noHeaderFooterPaths.includes(pathname) || pathname.startsWith("/playgame")
  );

  const shouldShowHeaderFooterAbsolute = !absoulte_header.includes(pathname);

  const fetchUserDetails = useCallback(async () => {
    try {
      Cookies.set("userToken", accessToken || "", {
        secure: true,
        sameSite: "Strict",
      });
      fetchUser();
      fetchActiveWallet();

      await deviceApi({
        fcm_token: Cookies.get("fcmToken") || "",
        deviceType: "web",
      });
      console.log("User details and device information updated successfully.");
    } catch (error) {
      console.error(
        "Error fetching user details or updating device info:",
        error
      );
    }
  }, [accessToken]);


  useEffect(() => {
    if (!accessToken) {
      console.log("No accessToken found in the query params.");
    } else {
      fetchUserDetails();
    }
  }, [accessToken, fetchUserDetails]);

  if (!shouldShowHeaderFooter) {
    return null;
  }

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
          <WalletHeader/>
      </div>

    </div>
  );
};

export default Header;
