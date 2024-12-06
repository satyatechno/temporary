'use client';

import Image from 'next/image';
import styles from './gamecard.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const Game_Loader = 'https://assets.gamingarcade.io/Assets/loader-img.webp';

interface GameCardProps {
  src: string;
  alt: string;
  gamePlay: string;
  name: string;
  gameName: string;
}
export const LoadingCard = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <Image
        className={styles.image}
        src={Game_Loader}
        alt={'Gaming Arcade'}
        fill
      />

      {isHovered && <span className={styles.name}>{'Loading...'}</span>}
    </div>
  );
};
const GameCard = ({ src, alt, gamePlay, name, gameName }: GameCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={() => router.push(`/games/${name}`)}
    >
      {isHovered ? (
        <div className={styles.videoContainer}>
          <video src={gamePlay} autoPlay loop muted className={styles.video} />
          <span className={styles.name}>{gameName}</span>
        </div>
      ) : (
        <Image
          className={styles.image}
          src={src ?? Game_Loader}
          alt={alt ?? 'Gaming Arcade'}
          fill
        />
      )}
    </div>
  );
};

export default GameCard;
