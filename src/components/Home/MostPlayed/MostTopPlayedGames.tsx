
import Link from "next/link";
// import { useGamesContext } from "@/app/Context/GamesContext";
import GamesCard from "../GameCard/GameCard";
import styles from "./mostplayed.module.scss";
// import { useRouter } from "next/navigation";

const MostTopPlayedGames = ({ games }: any) => {
  return (
    <div className={styles.section5__cardsLeft}>
      {games?.[0] && (
        <Link href={`/games/${games[0].name}`}>
          <GamesCard
            gameName={games[0].gameName}
            gameImg={games[0].thumbnail}
            playedCount={games[0].totalPlayed}
          />
        </Link>
      )}
      {games?.[1] && (
        <Link href={`/games/${games[1].name}`}>
          <GamesCard
            gameName={games[1].gameName}
            gameImg={games[1].thumbnail}
            playedCount={games[1].totalPlayed}
          />
        </Link>
      )}
    </div>
  );
};

export default MostTopPlayedGames;