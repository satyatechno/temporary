'use client';
import { useEffect, useState } from 'react';
import styles from './mostplayed.module.scss';
import { fetchGames } from '@/services/GameServices';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import GamesCard from '../GameCard/GameCard';
import { useGamesContext } from '@/app/Context/GamesContext';
// import GamesCard from "../Cards/GamesCards/GamesCards";

// Define types for game data
interface Game {
  name: string;
  gameName: string;
  thumbnail: string;
  totalPlayed: number;
}

const MostPlayed = () => {
  const { games } = useGamesContext();
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const router = useRouter();

  const playGameHandler = (gameName: string) => {
    router.push(`/games/${gameName}`);
  };

  const handleMouseOver = (id: number) => {
    setIsHovering(id);
  };

  const handleMouseOut = () => {
    setIsHovering(null);
  };

  return (
    <div className={styles.section5}>
      <div className={styles.section5__heading}>
        <h1>Most Played Web3 Games</h1>
        <p>We’ve picked up a few games that will match your interest</p>
      </div>
      <div className={styles.section5__cards}>
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
        <div className={styles.section5__cardsRight}>
          {games?.slice(2, 8)?.map((game: any, index: any) => (
            <div
              className={styles.section5__cardRightContainer}
              style={{ cursor: 'pointer' }}
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
              onClick={() => playGameHandler(game.name)}
            >
              <Image
                src={game.thumbnail}
                alt="Play to earn"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  height: '180px',
                  width: '100%',
                  borderRadius: '30px',
                  objectFit: 'cover',
                }}
              />
              <div>
                {isHovering === index && (
                  <button
                    className={styles.playNowButton}
                    onClick={() => playGameHandler(game.name)}
                  >
                    Play Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPlayed;
