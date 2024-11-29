import React from 'react';
import styles from './oneVsOne.module.scss';
import { inter, poppins } from '@/app/layout';
interface TOneVsOneCard {
  item: any;
  index: number;
}
const OneVsOneCard = ({ item, index }: TOneVsOneCard) => {
  return (
    <div className={`${styles.card} ${styles['gradient' + (index % 4)]}`}>
      <div className={`${styles.leftBar} ${styles['leftBar' + (index % 4)]}`} />
      <h3 className={poppins.className}>REWARD</h3>
      <div className={styles.icon} />
      <div className={styles.matic}>
        <h2>{1.8}</h2>
        <img
          src={
            false
              ? `https://assets.gamingarcade.io/Assets/matic.webp`
              : 'https://assets.gamingarcade.io/Assetsticket.webp'
          }
          alt="Matic"
        />
      </div>
      <a className={poppins.className}>
        Play 1 {false ? 'Matic' : 'Ticket'}{' '}
        <img
          style={{ marginLeft: 10 }}
          src={`https://assets.gamingarcade.io/Assets/arrow-sm.webp`}
          alt="arrow"
        />
      </a>
    </div>
  );
};
const OneVsOne = () => {
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
        {Array(4)
          .fill(' ')
          .map((item, index) => (
            <OneVsOneCard key={index?.toString()} item={item} index={index} />
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
