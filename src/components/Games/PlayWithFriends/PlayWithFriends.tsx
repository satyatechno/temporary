import { inter, poppins } from '@/app/layout';
import Button from '@/components/CommonComponent/AnimatedButton/AnimatedButton';
import config from '../../../../config';
import GamesGrid from './GamesGrid/GamesGrid';
import styles from './playWithFriends.module.scss';
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
const PlayWithFriends = ({ game }: { game: string }) => {
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
      <GamesGrid game={game} />
    </div>
  );
};

export default PlayWithFriends;
