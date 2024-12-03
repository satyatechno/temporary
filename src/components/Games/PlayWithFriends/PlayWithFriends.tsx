import React from 'react';
import styles from './playWithFriends.module.scss';
import Link from 'next/link';
import { inter, poppins } from '@/app/layout';
import Button from '@/components/CommonComponent/AnimatedButton/AnimatedButton';
import config from '../../../../config';
interface CardProps {
  title?: string;
  buttonText?: string;
  img?: string;
  invert?: boolean;
}
const Card = ({
  title = 'Create Room',
  buttonText = 'Click',
  img = 'https://assets.gamingarcade.io/Assets/kids.webp',
  invert = false,
}: CardProps) => {
  return (
    <div className={`${styles.card} ${invert && styles.cardBg}`}>
      <h2 className={poppins.className}>{title}</h2>

      <Button
        value={buttonText}
        className={styles.button}
        iconNew="https://assets.gamingarcade.io/Assets/arrow-sm.webp"
      />
      <div className={styles.imageContainer}>
        <img src={img} alt="gaming arcade" />
        <img className={styles.blurImg} src={img} alt="Blured" />
      </div>
    </div>
  );
};
const PlayWithFriends = ({
  games,
  gameDetails,
}: {
  games: Array<any>;
  gameDetails: any;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={poppins.className}>More Options</h2>
        <div className={styles.playTextContainer}>
          <h3 className={inter.className}>
            Play
            <br />
            With
          </h3>
          <img
            src={`https://assets.gamingarcade.io/Assets/cup.webp`}
            alt="cup"
          />
        </div>
        <h3 className={`${styles.friendText} ${poppins.className}`}>
          Friends
          <div className={styles.line} />
        </h3>
      </div>
      <div className={styles.cardContainer}>
        <Card
          title={'Create & Play Custom Room'}
          buttonText={'Lets Create'}
          img={`${config.imageDomain}Assets/kids.webp`}
        />
        <Card
          title={'Join A Room'}
          buttonText={'Join Now'}
          img={`${config.imageDomain}Assets/gameroom.webp`}
          invert
        />
        <Card
          title={'Place Your Own Bet'}
          buttonText={'Play Now'}
          img={`${config.imageDomain}Assets/trophy.webp`}
        />
      </div>
      <div className={styles.gamesContainer}>
        <div className={styles.moreGameHeading}>
          <h4 className={poppins.className}>More </h4>
          <h4 className={`${styles.moreText} ${poppins.className}`}>Games</h4>
        </div>
        <div className={styles.games}>
          {games
            .filter((i, e) => gameDetails?.name !== i.name)
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
    </div>
  );
};

export default PlayWithFriends;
