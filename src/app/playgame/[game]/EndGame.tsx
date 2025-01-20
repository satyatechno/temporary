'use client';
import React, { useEffect } from 'react';
import styles from './endGame.module.scss';
import Image from 'next/image';
import { poppins } from '@/app/layout';
import Button from '@/components/CommonComponent/AnimatedButton/AnimatedButton';
import Footer from '@/components/Endgame/Footer/Footer';
import BackgroundIcons from '@/components/Endgame/BackgroundIcons/BackgroundIcons';
import { useRouter, useSearchParams } from 'next/navigation';
import config from '../../../../config';

const EndGame = ({ status }: any) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get('score');
  const betAmount = searchParams.get('betAmount');

  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      <BackgroundIcons
        img={'https://assets.gamingarcade.io/game-bg-icon/2048.webp'}
      />
      <div className={styles.gradientContainer}>
        <div className={styles.bigWin}>
          {status == 'win' ? (
            <Image
              src={`${config.imageDomain}Assets/win1.webp`}
              alt="big win"
              fill
            />
          ) : status == 'lose' ? (
            <Image
              src={`${config.imageDomain}Assets/loose.webp`}
              alt="big win"
              fill
            />
          ) : (
            <Image
              src={'https://assets.gamingarcade.io/Assets/win1.webp'}
              alt="big win"
              fill
            />
          )}
        </div>
        <div className={styles.score}>
          <h3 className={poppins.className}>YOUR SCORE</h3>
          <h2 className={poppins.className}>{score}</h2>
        </div>
        <div className={styles.reward}>
          <h3 className={poppins.className}>You Won</h3>
          <Image
            alt="treasure"
            src={'https://assets.gamingarcade.io/Assets/treasure.webp'}
            height={70}
            width={70}
          />
          <h3 className={poppins.className}>{betAmount}</h3>
          <Image
            alt="treasure"
            src={'https://assets.gamingarcade.io/Assetsticket.webp'}
            height={40}
            width={50}
          />
        </div>
        <Image
          alt="polygon"
          src={'https://assets.gamingarcade.io/Assets/Poly-2.webp'}
          height={90}
          width={90}
          className={styles.icon}
        />
        <Image
          alt="polygon"
          src={'https://assets.gamingarcade.io/Assets/Poly-2.webp'}
          height={125}
          width={125}
          className={styles.icon1}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          value="History"
          onClick={() => {
            router.replace('/dashboard');
          }}
          icon={'https://assets.gamingarcade.io/Assets/homeIcon.webp'}
          imageClass={styles.homeIcon}
          textClass={poppins.className}
        />
        <Button
          value="Play Again"
          onClick={() => {
            router.replace('/games');
          }}
          icon={'https://assets.gamingarcade.io/Assets/retryIcon.webp'}
          imageClass={styles.homeIcon}
          textClass={poppins.className}
        />
      </div>
      <Footer />
    </div>
  );
};

export default EndGame;
