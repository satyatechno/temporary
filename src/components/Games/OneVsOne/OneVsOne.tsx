'use client';
import React, { useEffect, useState } from 'react';
import styles from './oneVsOne.module.scss';
import { inter, poppins } from '@/app/layout';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useGamesContext } from '@/app/Context/GamesContext';
type TItem = {
  id: number;
  reward: number | string;
  entryPrice: number;
};
interface TOneVsOneCard {
  item: TItem;
  index: number;
  onClick: (item: TItem) => void;
  gameDetails: any;
}
const cardData = [
  {
    id: 1,
    reward: 1.8,
    entryPrice: 1,
  },
  {
    id: 2,
    reward: '09',
    entryPrice: 5,
  },
  {
    id: 3,
    reward: 18,
    entryPrice: 10,
  },
  {
    id: 4,
    reward: 90,
    entryPrice: 50,
  },
];
const OneVsOneCard = ({ item, index, onClick, gameDetails }: TOneVsOneCard) => {
  return (
    <div className={`${styles.card} ${styles['gradient' + (index % 4)]}`}>
      <div className={`${styles.leftBar} ${styles['leftBar' + (index % 4)]}`} />
      <h3 className={poppins.className}>REWARD</h3>
      <div className={styles.icon} />
      <div className={styles.matic}>
        <h2>{item.reward}</h2>
        <img
          src={
            false
              ? `https://assets.gamingarcade.io/Assets/matic.webp`
              : 'https://assets.gamingarcade.io/Assetsticket.webp'
          }
          alt="Matic"
        />
      </div>
      <Link
        href={{
          pathname: '/playgame',
          query: { ...gameDetails },
        }}
      >
        <span onClick={() => onClick(item)} className={poppins.className}>
          Play {item.entryPrice} {false ? 'Matic' : 'Ticket'}{' '}
          <img
            style={{ marginLeft: 10 }}
            src={`https://assets.gamingarcade.io/Assets/arrow-sm.webp`}
            alt="arrow"
          />
        </span>
      </Link>
    </div>
  );
};
const OneVsOne = ({ game }: { game: string }) => {
  const [gameDetails, setGameDetails] = useState<any>(null);
  const { fetchGameDetails } = useGamesContext();

  useEffect(() => {
    setGameDetails(fetchGameDetails(game));
  }, []);
  const router = useRouter();
  const handlePlay = (item: TItem) => {
    console.log(item.entryPrice, item.id, gameDetails?.name);
    router.push('/playgame');
  };
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <img
            src={`https://assets.gamingarcade.io/Assets/diamond.webp`}
            alt="battle"
          />
          <h1 className={inter.className}>
            Play <div className={styles.gradient}>{'1 vs 1'}</div>
            <div className={styles.line} />
          </h1>
        </div>
        <h2 className={`${styles.stage} ${inter.className}`}>STAGES</h2>
      </div>

      <div className={styles.cardContainer}>
        {cardData.map((item, index) => (
          <OneVsOneCard
            key={index?.toString()}
            item={item}
            index={index}
            onClick={handlePlay}
            gameDetails={gameDetails}
          />
        ))}
      </div>

      <div className={styles.anime}>
        <div className={styles.gradientDiv} />
        <img
          src={`https://assets.gamingarcade.io/Assets/person.webp`}
          alt="person"
        />
      </div>
    </div>
  );
};
export default OneVsOne;
