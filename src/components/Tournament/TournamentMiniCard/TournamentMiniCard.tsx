import config from "../../../../config";
import styles from "./tournamentminicard.module.scss";

const TournamentMiniCard = ({
  tournamentList,
}: any) => {
  if (!tournamentList?.length) return;

  return (
    <>
      {tournamentList?.slice(0,3)?.map((tour: any) => (
        console.log("gameIcon",tour),
        <div className={styles.tourCardMini} key={tour?.key}>
          <div className={styles.tourCardMini__container}>
            <div className={styles.tourCardMini__left}>
              <div className={styles.tournamentCardPast__imageContainer}>
                <img src={tour?.background} alt="Game fi" />
                <div>
                  <img src={tour?.thumbnail} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.tourCardMini__right}>
              <h3>Tournament Reward</h3>
              <div className={styles.tourCardMini__reward}>
                <p>{tour?.reward}</p>
                <img
                  src={`${config.imageDomain}/loading-images/matic1.webp`}
                  alt="Play to earn"
                />
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
