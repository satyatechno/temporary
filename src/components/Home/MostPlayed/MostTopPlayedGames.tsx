
'use client'
import { useGamesContext } from "@/app/Context/GamesContext";
import GamesCard from "../GameCard/GameCard";
import styles from "./mostplayed.module.scss";
import { useRouter } from "next/navigation";

const MostTopPlayedGames=()=>{
  const { games } = useGamesContext();
  const router = useRouter();

  const playGameHandler = (gameName: string) => {
    router.push(`/games/${gameName}`);
  };

    return(
        <div className={styles.section5__cardsLeft}>
        {games?.[0] && (
          <GamesCard
            gameName={games[0].gameName}
            gameImg={games[0].thumbnail}
            playedCount={games[0].totalPlayed}
            onClick={() => playGameHandler(games[0].name)}
          />
        )}
        {games?.[1] && (
          <GamesCard
            gameName={games[1].gameName}
            gameImg={games[1].thumbnail}
            playedCount={games[1].totalPlayed}
            onClick={() => playGameHandler(games[1].name)}
          />
        )}
      </div>
    )
}

export default MostTopPlayedGames;