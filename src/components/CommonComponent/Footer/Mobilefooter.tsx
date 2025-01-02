'use client';
import React from "react";
import Link from "next/link";
import {usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./mobile_footer.module.scss";

const MobileFooter = () => {
  const pathName = usePathname();

  // Define a mapping of routes to animation points
  const routeToPointMap = {
    "/tournament": styles.tournamentPoint,
    "/history": styles.historyPoint,
    "/games": styles.playPoint,
    "/nft": styles.nftPoint,
    "/": styles.homePoint,
    "/dashboard": styles.profilePoint,
  };

  const animationClass = routeToPointMap[pathName] || "";


  // Define footer navigation items
  const navItems = [
    { href: "/", label: "Home", src: "https://assets.gamingarcade.io/AssetshomeIconNew.webp", alt: "Home" },
    { href: "/games", label: "Play", src: "https://assets.gamingarcade.io/Assets/Play.svg", alt: "Play" },
    { href: "/tournament", label: "Tournament", src: "https://assets.gamingarcade.io/Assets/Tournament.svg", alt: "Tournament" },
    { href: "/history", label: "History", src: "https://assets.gamingarcade.io/Assets/History.svg", alt: "History" },
    { href: "/dashboard", label: "Profile", src: "https://assets.gamingarcade.io/Assets/Profile.svg", alt: "Profile" },
  ];

  return (
    <div className={styles.mt6}>
      <div className={styles.footerFixed}>
        <footer className={`${styles.mobileFooter} ${animationClass}`}>
          <div className="container">
            <div className={styles.bottomArea}>
              <ul className={styles.mbFooterNav}>
                {navItems.map((item) => (
                  <li
                    key={item.href}
                    className={pathName === item.href ? styles.currentPage : ""}
                  >
                    <Link href={item.href}>
                      <div className={styles.img}>
                        <Image src={item.src} alt={item.alt} width={25} height={25} />
                      </div>
                      <p>{item.label}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MobileFooter;
