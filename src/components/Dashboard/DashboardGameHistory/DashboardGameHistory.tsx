"use client"

import Image from "next/image";
import styles from "./DashboardGameHistory.module.scss";
import config from "../../../../config";
import { useCallback, useEffect, useState } from "react";
import { challengeHistoryApi } from "@/services/challenge";
import { useAppContext } from "@/app/Context/AuthContext";

// interface tournameGameHistory {
//   gameId: string;
//   game: { gameName: string };
//   type: string;
//   betAmount: number;
//   player1: {
//     uuid: string;
//     score: number;
//     player_id: string;
//     status: string;
//     sync: boolean;
//   };
//   player2: {
//     uuid: string;
//     score: number;
//     player_id: string;
//     status: string;
//     sync: boolean;
//   };
//   winner: { uuid: string };
//   medium: string;
//   tx: string;
//   stage: string;
// }

interface GameHistoryProps {
  // tournameGameHistory: tournameGameHistory[];
  loadingGames: boolean;
  // games: any[]; 
  // isAuthenticated:boolean;
}

const DashboardGameHistory: React.FC<GameHistoryProps> =  ({
  loadingGames,
}) => {
  // const token = Cookies.get("userToken");

  const [tournameGameHistory, setTournamentGameHistory] = useState<any>();

  
  const {userData, activeButton }=useAppContext();
  

  // Function to render game rows


  const fetchDashboardTournamentHistoryData = useCallback(async () => {
    try {
      const res = await challengeHistoryApi({
        medium: activeButton.toLowerCase(),
      });
      setTournamentGameHistory(res?.data?.data?.game ?? []);
    } catch (error) {
      console.error("Error fetching tournament history data:", error);
    }
  }, [activeButton]);

  useEffect(() => {
    fetchDashboardTournamentHistoryData();
  }, [fetchDashboardTournamentHistoryData]);




  // useEffect(() => {
  //   // if (gameDetails?.name)
  //      fetchDashboardTournamentHistoryData();
  // }, [activeButton]);
  // if (!openChallenges?.length) return null;

  const renderGameRows = () => {
    if (loadingGames) {
      return (
        <tr>
          <td colSpan={7} className={styles.emptyRow}>
            <div className={styles.loadingContainer}>
              <Image
                src={`${config.imageDomain}/Assets/gameTbl.webp"`}
                alt="Loading"
                width={150}
                height={150}
              />
              <h4>Loading...</h4>
            </div>
          </td>
        </tr>
      );
    }

    if (tournameGameHistory?.length === 0) {
      return (
        <tr>
          <td colSpan={7} className={styles.emptyRow}>
            <div className={styles.emptyContainer}>
              <Image
                src={`${config.imageDomain}/Assets/gameTbl.webp`}
                alt="No Games Found"
                width={150}
                height={150}
              />
              <h4>
                You are not playing any games. Start playing and start earning!
              </h4>
            </div>
          </td>
        </tr>
      );
    }

    return tournameGameHistory?.map((game:any, index:any) => {
      const isUserPlayer1 = game.player1.uuid === userData?.uuid;
      const opponent = isUserPlayer1 ? game.player2 : game.player1;
      const score = `${
        isUserPlayer1 ? game.player1.score : game.player2.score
      } / ${isUserPlayer1 ? game.player2.score : game.player1.score}`;
      const result = game.winner?.uuid
        ? game.winner.uuid === userData?.uuid
          ? "Won"
          : "Lost"
        : "Pending...";

      return (
        <tr key={index}>
          <td>{game.gameId}</td>
          <td>{game.game.gameName}</td>
          <td>{game.type}</td>
          <td>{game.betAmount}</td>
          <td>{score}</td>
          <td>{opponent.player_id || "None"}</td>
          <td>{result}</td>
        </tr>
      );
    });
  };

  return (
    <section className={styles.dashSec4} id="gameHistory">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Game History</h2>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Game ID</th>
                <th>Game</th>
                <th>Game Type</th>
                <th>Bet Amount</th>
                <th>Score (You / Opp)</th>
                <th>Opponent Address</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>{renderGameRows()}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DashboardGameHistory;
