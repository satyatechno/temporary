import styles from "./mostplayed.module.scss";
import MostPlayedGame from "./MostPlayedGames";
import MostTopPlayedGames from "./MostTopPlayedGames";

const MostPlayed = () => {
  return (
    <div className={styles.section5}>
      <div className={styles.section5__heading}>
        <h1>Most Played Web3 Games</h1>
        <p>We’ve picked up a few games that will match your interest</p>
      </div>
      <div className={styles.section5__cards}>
        <MostTopPlayedGames/>
        <MostPlayedGame/>
      </div>
    </div>
  );
};

export default MostPlayed;
