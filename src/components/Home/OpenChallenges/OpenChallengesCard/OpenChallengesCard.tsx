import { useRouter } from "next/navigation";
import config from "../../../../../config";
import styles from "./openchallenges.module.scss";
import Image from "next/image";

const OpenChallengesCard = ({
  name,
  stage,
  betAmount,
  score,
  gameId,
  medium,
  gameIcon,
  loaderUrl,
  dataUrl,
  frameworkUrl,
  codeUrl,
  customBetLength,
}: any) => {
 
  const router = useRouter();
  const handleGamePlay = () => {
    localStorage.setItem("gameId", gameId);

    const gameData = {
      id: (parseInt(stage) - 1).toString(),
      type: stage,
      value: betAmount.toString(),
      name: name,
      gameBuild: "",
      gameClass: "",
      isCustomBet: "true",
      gameType: "OneVSOne",
      direct: "true",
      medium: medium,
      code: "",
      typeLoader: loaderUrl,
      typeData: dataUrl,
      typeFramework: frameworkUrl,
      typeWasm: codeUrl,
      gameId: gameId,
    };

       // Convert the gameData object to a query string
       const queryString = new URLSearchParams(gameData as any).toString();

       // Push the route with query parameters
       router.push(`/playgame/match?${queryString}`);
  };

  return (
    <div className={styles.allChallengesCard}>
      <div className={styles.allChallengesCard__container}>
        <div className={styles.allChallengesCard__left}>
          <div style={{ marginBottom: "5px" }}>
            <h2>{betAmount}</h2>
            <Image
              src={
                medium === "currency"
                  ? `${config.imageDomain}Assets/matic.webp`
                  : `${config.imageDomain}Assetsticket.webp`
              }
              alt="Play to earn"
              width={100} height={100}
            />
          </div>
          <p>Bet Amount</p>
          <div
            style={{ marginBottom: customBetLength <= 4 ? "-50px" : "-50px" }}
          >
            <a
              onClick={() => {
                handleGamePlay();
              }}
            >
              Battle Up{" "}
              <Image
                src={`${config.imageDomain}Assets/arrow-sm.webp`}
                style={{ marginLeft: "5px", height: "8px" }}
                alt="arrow"
                width={100} height={100}
              />
            </a>
            {customBetLength <= 4 ? (
              ""
            ) : (
              <Image
                className={styles.coinImage}
                src={`${config.imageDomain}/AssetscoinImage.webp`}
                alt=""
                width={100} height={100}
              />
            )}
          </div>
        </div>
        <div className={styles.allChallengesCard__right}>
          <h2>{score}</h2>
          <p>Target</p>
          <Image src={gameIcon} alt="gameIcon" width={100} height={100}/>
        </div>
      </div>
    </div>
  );
};

export default OpenChallengesCard;
