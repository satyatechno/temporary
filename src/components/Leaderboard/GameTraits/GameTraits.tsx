import Image from "next/image";
import styles from "./gametraits.module.scss";
import config from "../../../../config";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import { getTimeLeft } from "@/utils/helperFunction";

const GameTraits = ({ tournamentData, timeLeft, participates }: any) => {
  const loadingBarContainer = {
    height: "15px",
    width: "80%",
    backgroundColor: "#CD59D0",
    borderRadius: 40,
    marginTop: 10,
    marginLeft: 50,
  };

  const loadingBar:any = {
    height: "100%",
    width: `${participates?.length}%`,
    maxWidth: "100%",
    backgroundColor: "#59CF0E",
    borderRadius: 40,
    textAlign: "right",
  };

  const loadingBarText = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div className={styles.game_main_container}>
      <div className={styles.gameImage}>
        <Image src={tournamentData?.thumbnail} alt="stageLd" fill />
      </div>

      <div className={styles.tournament_box}>
        <p>{participates?.length} players</p>
        <div style={loadingBarContainer}>
          <div style={loadingBar}>
            <span style={loadingBarText}>
              <span className={styles.checkMark}>✓</span>
            </span>
          </div>
        </div>
        <div className={styles.game_traits}>
          <div>
            <span>
              <div className={styles.image_container}>
                <Image
                  src={`${config.imageDomain}/loading-images/ts-image.webp`}
                  alt="Tournament"
                  fill
                />
              </div>
              <p>{getTimeLeft(timeLeft)}</p>
            </span>
            <p>Time to End</p>
          </div>

          <div>
            <span>
              <div className={styles.image_container}>
                <Image
                  src={`${config.imageDomain}/loading-images/icon2.webp`}
                  alt="Tournament"
                  fill
                />
              </div>
              <p>{tournamentData?.serial}</p>
            </span>

            <p>Tournament No.</p>
          </div>

          <div>
            <span>
              <div className={styles.image_container}>
                <Image
                  src={`${config.imageDomain}/loading-images/matic1.webp`}
                  alt="Tournament"
                  fill
                />
              </div>

              <p>{tournamentData?.reward?.toFixed(4)}</p>
            </span>
            <p>Tournament Reward</p>
          </div>
        </div>
        <Button value="Entries Closed" />
      </div>
    </div>
  );
};

export default GameTraits;
