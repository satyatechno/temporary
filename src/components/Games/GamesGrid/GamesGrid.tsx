import { fetchGames } from '@/services/GameServices';
import { useEffect, useState } from 'react';
import styles from './gamesGrid.module.scss';
import GameCard from '../GameCard/GameCard';
const Game_Loader = 'https://assets.gamingarcade.io/Assets/loader-img.webp';
const GameGrid = () => {
  const [gameData, setGameData] = useState<Array<any>>([]);

  const getGameData = async () => {
    const data: any = await fetchGames();

    setGameData(data?.data);
  };

  useEffect(() => {
    getGameData();

    return () => {};
  }, []);
  return (
    <div className={styles.container}>
      {Array(Math.ceil(gameData.length / 6))
        .fill(' ')
        ?.map((game: any, index: number) => (
          <div
            className={styles.container}
            style={{ flexDirection: index % 2 ? 'row-reverse' : 'row' }}
            key={index?.toString()}
          >
            {gameData?.[index * 6 + 0] && (
              <div className={styles.imageContainer}>
                <GameCard
                  src={gameData?.[index * 6 + 0]?.thumbnail ?? Game_Loader}
                  alt={gameData?.[index * 6 + 0]?.thumbnailAlt}
                  gamePlay={gameData?.[index * 6 + 0]?.gamePlay}
                  name={gameData?.[index * 6 + 0]?.gameName}
                />
              </div>
            )}
            <div className={styles.column}>
              <div className={styles.row}>
                {gameData?.[index * 6 + 1] && (
                  <div className={styles.imageContainer1}>
                    <GameCard
                      src={gameData?.[index * 6 + 1]?.thumbnail ?? Game_Loader}
                      alt={gameData?.[index * 6 + 1]?.thumbnailAlt}
                      gamePlay={gameData?.[index * 6 + 1]?.gamePlay}
                      name={gameData?.[index * 6 + 1]?.gameName}
                    />
                  </div>
                )}
                {gameData?.[index * 6 + 2] && (
                  <div className={styles.imageContainer1}>
                    <GameCard
                      src={gameData?.[index * 6 + 2]?.thumbnail ?? Game_Loader}
                      alt={gameData?.[index * 6 + 2]?.thumbnailAlt}
                      gamePlay={gameData?.[index * 6 + 2]?.gamePlay}
                      name={gameData?.[index * 6 + 2]?.gameName}
                    />
                  </div>
                )}
              </div>
              <div className={styles.row}>
                {gameData?.[index * 6 + 3] && (
                  <div className={styles.imageContainer2}>
                    <GameCard
                      src={gameData?.[index * 6 + 3]?.thumbnail ?? Game_Loader}
                      alt={gameData?.[index * 6 + 3]?.thumbnailAlt}
                      gamePlay={gameData?.[index * 6 + 3]?.gamePlay}
                      name={gameData?.[index * 6 + 3]?.gameName}
                    />
                  </div>
                )}
                {gameData?.[index * 6 + 4] && (
                  <div className={styles.imageContainer2}>
                    <GameCard
                      src={gameData?.[index * 6 + 4]?.thumbnail ?? Game_Loader}
                      alt={gameData?.[index * 6 + 4]?.thumbnailAlt}
                      gamePlay={gameData?.[index * 6 + 4]?.gamePlay}
                      name={gameData?.[index * 6 + 4]?.gameName}
                    />
                  </div>
                )}
                {gameData?.[index * 6 + 5] && (
                  <div className={styles.imageContainer2}>
                    <GameCard
                      src={gameData?.[index * 6 + 5]?.thumbnail ?? Game_Loader}
                      alt={gameData?.[index * 6 + 5]?.thumbnailAlt}
                      gamePlay={gameData?.[index * 6 + 5]?.gamePlay}
                      name={gameData?.[index * 6 + 5]?.gameName}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GameGrid;
