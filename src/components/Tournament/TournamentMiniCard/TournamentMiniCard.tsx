import Image from "next/image";
import config from "../../../../config";
import styles from "./tournamentminicard.module.scss";

const TournamentMiniCard = ({
  tournamentList,
}: any) => {
  if (!tournamentList?.length) return;

  return (
    <>
      {tournamentList?.slice(0,3)?.map((tour: any) => (
        <div className={styles.tourCardMini} key={tour?._id}>
          <div className={styles.tourCardMini__container}>
            <div className={styles.tourCardMini__left}>
              <div className={styles.tournamentCardPast__imageContainer}>
                <Image src={tour?.background} alt="Game fi" fill />
                <div className={styles.tournament_thumbnail}>
                  <Image src={tour?.thumbnail} alt="thumbnail" fill />
                </div>
              </div>
            </div>
            <div className={styles.tourCardMini__right}>
              <h3>Tournament Reward</h3>
              <div className={styles.tourCardMini__reward}>
                <p>{tour?.reward}</p>
                <div className={styles.play_to_earn_img_container}>
                <Image
                  src={`${config.imageDomain}/loading-images/matic1.webp`}
                  alt="Play to earn"
                  fill
                />
                </div>
              </div>
              <p>{tour?.gameName} Game</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TournamentMiniCard;
