'use client';
import { useGamesContext } from '@/app/Context/GamesContext';
import { poppins } from '@/app/layout';
import Link from 'next/link';
import styles from './gamesGrid.module.scss';
const GamesGrid = ({ game }: { game: string }) => {
  const { games } = useGamesContext();

  return (
    <div className={styles.gamesContainer}>
      <div className={styles.moreGameHeading}>
        <h4 className={poppins.className}>More </h4>
        <h4 className={`${styles.moreText} ${poppins.className}`}>Games</h4>
      </div>
      <div className={styles.games}>
        {games
          .filter((i, e) => game !== i.name)
          .map((item: any, index) => {
            if (index < 6) {
              return (
                <Link key={index?.toString()} href={`/games/${item?.name}`}>
                  <div className={styles.game}>
                    <img src={item.thumbnail} alt="gaming" />
                  </div>
                </Link>
              );
            }
          })}
      </div>
    </div>
  );
};

export default GamesGrid;
