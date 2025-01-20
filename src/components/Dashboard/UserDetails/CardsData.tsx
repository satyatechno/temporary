'use client'
import Image from "next/image";
import config from "../../../../config";
import styles from "./userdetails.module.scss";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface UserDetails {
  totalGamePlayedTicket: number;
  totalWinAmount: number;
  totalTournamentPlayed: number;
  totalWinGames: number;
  totalLoseGames: number;
}

interface CardData {
  id: string;
  text: string;
  bg: string;
  imgLink: string;
  gridName: string;
  container_name: string;
  gameCount: string | number | undefined;
}

const CardsData = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const token = Cookies.get("userToken");

  async function fetchUserDetails(token: string | undefined) {
    const baseUrl = config.baseURL;
    try {
      const response = await fetch(`${baseUrl}user/get/details`, {
        cache: "force-cache", // Use `no-store` to avoid caching if needed
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }
      const data = await response.json();
      setUserDetails(data?.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  useEffect(() => {
    fetchUserDetails(token);
  }, [token]); // Add dependencies to avoid infinite re-renders

  const cardsData: CardData[] = [
    {
      id: "1",
      text: "Total Games Played",
      bg: "bg1",
      imgLink: `${config.imageDomain}/Assets/gameController.webp`,
      gridName: "total_games_played",
      container_name: "card__container",
      gameCount: userDetails?.totalGamePlayedTicket,
    },
    {
      id: "2",
      text: "Total Matic Won",
      bg: "bg2",
      imgLink: `${config.imageDomain}/Assets/maticChainIcon.webp`,
      gridName: "total_matic_won",
      container_name: "card__container",
      gameCount: userDetails?.totalWinAmount,
    },
    {
      id: "3",
      text: "Total Tournament Played",
      bg: "bg3",
      imgLink: `${config.imageDomain}/Assets/tourPlayedSword.png`,
      gridName: "total_tournament_played",
      container_name: "card__container1",
      gameCount: userDetails?.totalTournamentPlayed,
    },
    {
      id: "4",
      text: "Total Wins",
      bg: "bg4",
      imgLink: `${config.imageDomain}/Assets/awardTrophy.webp`,
      gridName: "total_wins",
      container_name: "card__container",
      gameCount: userDetails?.totalWinGames,
    },
    {
      id: "5",
      text: "Total losses",
      bg: "bg5",
      imgLink: `${config.imageDomain}/Assets/penShield.webp`,
      gridName: "total_losses",
      container_name: "card__container",
      gameCount: userDetails?.totalLoseGames,
    },
  ];

  return (
    <div className={styles.wrapper}>
      {cardsData.map((cardValue) => (
        <div
          key={cardValue.id}
          className={`${styles[cardValue.gridName]} ${styles[cardValue.bg]}`}
        >
          <div className={styles[cardValue.container_name]}>
            <span>
              <p className={styles.content_score}>{cardValue.gameCount ?? 0}</p>
              <p className={styles.content_score}>{cardValue.text}</p>
            </span>
            <span className={styles.image_container}>
              <Image src={cardValue.imgLink} alt="card-img" fill />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsData;
