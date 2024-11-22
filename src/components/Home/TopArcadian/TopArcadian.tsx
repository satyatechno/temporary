'use client'

import { useEffect, useState } from "react";
import styles from "./toparcadian.module.scss";
import axios from "axios";
import config from "../../../../config";
import Image from "next/image";


interface Player {
  address: string;
  twitter?: {
    screen_name?: string;
  };
  totalTournamentPlayed?: number;
  totalWinAmount?: number;
  totalWinGames?: number;
  totalLoseGames?: number;
}

const TopArcadian = () => {
  const [topPlayers, setTopPlayers] = useState<Player[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);

  // Fetch top users
  const getTopUsers = async (sortBy: string | null = "totalWinAmount") => {
    try {
      const response = await axios.get(`${config.baseURL}user?sort=${sortBy}`);
      setTopPlayers(response?.data?.data?.response || []);
    } catch (error) {
      console.error("Error fetching top users:", error);
    }
  };

  useEffect(() => {
    getTopUsers();
  }, []);

  // Handle sorting by column
  const handleSort = (columnName: keyof Player) => {
    const sortedUsers = [...topPlayers].sort((a, b) => {
      if ((a[columnName] || 0) < (b[columnName] || 0)) return -1;
      if ((a[columnName] || 0) > (b[columnName] || 0)) return 1;
      return 0;
    });

    if (sortBy === columnName) {
      sortedUsers.reverse();
    }
    setTopPlayers(sortedUsers);
    setSortBy(columnName);
  };

  return (
    <div className={styles.section10}>
      <Image
        src={`${config.imageDomain}/loading-images/topArcadiansImage.webp`}
        alt="Top Arcadians"
        height={100}
        width={300}
      />
      <div className={styles.section10__tableContainer}>
        <div className={styles.section10__table}>
          <div className={styles.section10__tableHeading}>
            <p>S.No.</p>
            <p>Player</p>
            <p>Twitter</p>
            <p onClick={() => getTopUsers("totalTournamentPlayed")}>
              Tournaments Played
            </p>
            <p onClick={() => getTopUsers("totalWinAmount")}>
              Winning Amount (Matic)
            </p>
            <p onClick={() => getTopUsers("totalWinGames")}>Total Wins</p>
            <p onClick={() => getTopUsers("totalLoseGames")}>Total Lose</p>
          </div>
          {topPlayers.map((player, index) => (
            <div className={styles.section10__tableContent} key={index}>
              <p>{index + 1}</p>
              <p>{player?.address?.slice(0, 6)}...</p>
              <p>{player?.twitter?.screen_name || "N/A"}</p>
              <p>{player?.totalTournamentPlayed || 0}</p>
              <p>
                <Image
                  src={`${config.imageDomain}/loading-images/matic1.webp`}
                  alt="Matic"
                  height={15}
                  width={15}
                />
                {player?.totalWinAmount?.toFixed(2) || 0}
              </p>
              <p>{player?.totalWinGames || 0}</p>
              <p>{player?.totalLoseGames || 0}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopArcadian;
