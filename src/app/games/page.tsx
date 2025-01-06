import GameGrid from "@/components/Games/GamesGrid/GamesGrid";
import JoinCommunity from "@/components/Games/JoinCommunity/JoinCommunity";
import OurGames from "@/components/Games/OurGames/OurGames";
import styles from "./game.module.scss";

const ExploreGames = async () => {
  return (
    <main>
      <GameGrid />
      <div className={styles.desktop_screens}>
        <JoinCommunity />
        <OurGames />
      </div>
    </main>
  );
};

export default ExploreGames;
