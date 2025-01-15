'use client';
import { useGamesContext } from '@/app/Context/GamesContext';
import { poppins } from '@/app/layout';
import Link from 'next/link';
import styles from './gamesGrid.module.scss';
import Image from 'next/image';
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
          .filter((i) => game !== i.name)
          .map((item, index) => {
            if (index < 6) {
              return (
                <Link key={index?.toString()} href={`/games/${item?.name}`} replace>
                  <div className={styles.game}>
                    <Image src={item.thumbnail} alt="gaming" fill />
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
