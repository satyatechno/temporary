'use client';

import Image from 'next/image';
import styles from './gamecard.module.scss';
import { useState } from 'react';
const Game_Loader = 'https://assets.gamingarcade.io/Assets/loader-img.webp';

interface GameCardProps {
  src: string;
  alt: string;
  gamePlay: string;
  name: string;
}
const GameCard = ({ src, alt, gamePlay, name }: GameCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className={styles.videoContainer}>
          <video src={gamePlay} autoPlay loop muted className={styles.video} />
          <span className={styles.name}>{name}</span>
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
