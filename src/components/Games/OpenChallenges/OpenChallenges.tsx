import React from 'react';
import styles from './openChalanges.module.scss';
import { inter, poppins } from '@/app/layout';
interface TChallengeCard {
  item: any;
  index: number;
}
const ChallengeCard = ({ item, index }: TChallengeCard) => {
  return (
    <div
      className={`${styles.cradContainer} ${styles['gradient' + (index % 4)]}`}
    >
      <div className={`${styles.leftBar} ${styles['leftBar' + (index % 4)]}`} />
      <div className={styles.rightBar} />
      <div className={styles.main}>
        <h2 className={`${styles.joinBet} ${poppins.className}`}>Join Bet</h2>
        <div className={styles.reward}>
          <h3 className={poppins.className}>{1}</h3>
          <img
            className={styles.matic}
            src={
              false
                ? `https://assets.gamingarcade.io/Assets/matic.webp`
                : 'https://assets.gamingarcade.io/Assetsticket.webp'
            }
            alt="matic"
          />
        </div>

        <div className={styles.score}>
          <div className={styles.targetContainer}>
            <p className={poppins.className}>Target Score</p>
          </div>
          <h2 className={poppins.className}>{2000}</h2>
          <h5 className={poppins.className}>POINTS</h5>
        </div>
      </div>
      <a className={poppins.className}>
        Play Now
        <h5 />
      </a>
    </div>
  );
};
const OpenChallenges = () => {
  return (
    <section className={styles.challenges}>
      <div className={styles.row}>
        <div style={{ marginRight: 30 }}>
          {true ? (
            <h4 className={inter.className}>
              Open <div className={styles.customSpan}>Challenges</div>
            </h4>
          ) : null}
        </div>
        {true ? (
          <div style={{ display: 'flex' }}>
            {Array(4)
              .fill(' ')
              .map((item, index) => (
                <ChallengeCard
                  key={index?.toString()}
                  item={item}
                  index={index}
                />
              ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default OpenChallenges;
