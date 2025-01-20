'use client';

import { inter, poppins } from '@/app/layout';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import styles from './openChalanges.module.scss';
import { openChallengesApi } from '@/services/challenge';
import { useAppContext } from '@/app/Context/AuthContext';
interface TChallengeCard {
  item: any;
  index: number;
  gameDetails: any;
}
const ChallengeCard = ({ item, index, gameDetails }: TChallengeCard) => {
  // const router = useRouter();

  return (
    <div
      className={`${styles.cradContainer} ${styles['gradient' + (index % 4)]}`}
    >
      <div className={`${styles.leftBar} ${styles['leftBar' + (index % 4)]}`} />
      <div className={styles.rightBar} />
      <div className={styles.main}>
        <h2 className={`${styles.joinBet} ${poppins.className}`}>Join Bet</h2>
        <div className={styles.reward}>
          <h3 className={poppins.className}>{item?.betAmount}</h3>
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
          <h2 className={poppins.className}>{item?.player1?.score ?? 0}</h2>
          <h5 className={poppins.className}>POINTS</h5>
        </div>
      </div>
      <Link
        href={{
          pathname: '/playgame',
          query: {
            game: gameDetails?.name,
            stage: item?.stage,
            value: parseFloat(item?.betAmount),
            name: item?.game?.name,
            gameType: 'OneVSOne',
            landscape: item?.game?.landscape ? true : false,
            direct: true,
            practice: false,
            isCustomBet: true,
            gameId: item?.gameId,
            medium: item?.medium,
          },
        }}
      >
        <span
          // onClick={() => {
          //   router.push('/playgame');
          // }}
          className={poppins.className}
        >
          Play Now
          <h5 />
        </span>
      </Link>
    </div>
  );
};
const OpenChallenges = ({ gameDetails }: { gameDetails: any }) => {
  const [openChallenges, setOpenChallenges] = useState<Array<any>>([]);
  const { medium } = useAppContext();
  const fetchOpenChallenges = useCallback(async () => {
    try {
      const res = await openChallengesApi({
        gameName: gameDetails?.name,
        medium: medium,
      });
      setOpenChallenges(res?.data?.data?.game ?? []);
      console.log('open chalanges', res);
    } catch (error) {
      console.log('error', error);
    }
  }, [gameDetails?.name, medium]);
  useEffect(() => {
    if (gameDetails?.name) fetchOpenChallenges();
  }, [gameDetails, medium]);
  if (!openChallenges?.length) return null;
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
            {openChallenges?.map((item: any, index: any) => (
              <ChallengeCard
                key={index?.toString()}
                item={item}
                index={index}
                gameDetails={gameDetails}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default OpenChallenges;
