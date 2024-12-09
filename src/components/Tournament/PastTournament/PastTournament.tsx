import Image from "next/image";
import styles from "./pasttournament.module.scss";
import config from "../../../../config";

const PastTournament = ({ tournamentList }: any) => {
    
  if (!tournamentList?.length) return;

  return (
    <div className={styles.main_container}>
      {tournamentList?.map((cardValue: any) => (
        <div className={styles.gameCard_container} key={cardValue?._id}>
          <div className={styles.image_container}>
            <Image
              src={cardValue?.game?.backgroundImage}
              alt="game-logo"
              fill
              priority
            />
            <Image
              src={cardValue?.thumbnail}
              className={styles.thumbnail}
              width={100}
              height={43}
              alt="Play Button"
            />
          </div>
          <div className={styles.tournament_headers}>
            <div className={styles.tournamentCardPast__topContent}>
              <div className={styles.tournamentCardPast__tourEnded}>
                <p>
                  Tournament <br /> Ended
                </p>
              </div>
              <div className={styles.tournamentCardPast__reward}>
                <Image
                  src={`${config.imageDomain}/Assets/boxT.webp`}
                  alt="Game Fi"
                  height={0}
                  width={0}
                  sizes="100vw"
                  style={{
                    height: "100px",
                    width: "auto",
                    marginLeft: "-60px",
                  }}
                />
                <p>{cardValue?.reward?.toFixed(2)}</p>
                <Image
                  src={`${config.imageDomain}/loading-images/matic1.webp`}
                  alt="Gaming Arcade"
                  height={0}
                  width={0}
                  sizes="100vw"
                  style={{ height: "20px", width: "auto" }}
                />
              </div>
            </div>
            <div className={styles.tournament_details}>
              <span>
                <p>Entry Price</p>
                <p>{cardValue?.entryFee}m</p>
              </span>
              <span>
                <p>Players</p>
                <p>{cardValue?.players}</p>
              </span>
              <span>
                <p>TOURNAMENT</p>
                <p>#{cardValue?.serial}</p>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PastTournament;
