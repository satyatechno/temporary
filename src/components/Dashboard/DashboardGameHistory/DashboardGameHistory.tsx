import Image from "next/image";
import styles from "./DashboardGameHistory.module.scss";
import config from "../../../../config";

interface Game {
  gameId: string;
  game: { gameName: string };
  type: string;
  betAmount: number;
  player1: {
    uuid: string;
    score: number;
    player_id: string;
    status: string;
    sync: boolean;
  };
  player2: {
    uuid: string;
    score: number;
    player_id: string;
    status: string;
    sync: boolean;
  };
  winner: { uuid: string };
  medium: string;
  tx: string;
  stage: string;
}

interface GameHistoryProps {
  games: Game[];
  user: { uuid: string };
  loadingGames: boolean;
  isAuthenticated: boolean;
  openModal: () => void;
}

const DashboardGameHistory: React.FC<GameHistoryProps> = ({
  games,
  user,
  loadingGames,
  isAuthenticated,
  openModal,
}) => {
  // Function to render game rows
  const renderGameRows = () => {
    if (loadingGames) {
      return (
        <tr>
          <td colSpan={7} className={styles.emptyRow}>
            <div className={styles.loadingContainer}>
              <Image src={`${config.imageDomain}/Assets/gameTbl.webp"`} alt="Loading" width={150} height={150} />
              <h4>Loading...</h4>
            </div>
          </td>
        </tr>
      );
    }

    if (games?.length === 0) {
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
              <h4>You are not playing any games. Start playing and start earning!</h4>
            </div>
          </td>
        </tr>
      );
    }

    return games.map((game, index) => {
      const isUserPlayer1 = game.player1.uuid === user.uuid;
      const opponent = isUserPlayer1 ? game.player2 : game.player1;
      const score = `${isUserPlayer1 ? game.player1.score : game.player2.score} / ${
        isUserPlayer1 ? game.player2.score : game.player1.score
      }`;
      const result = game.winner?.uuid
        ? game.winner.uuid === user.uuid
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
