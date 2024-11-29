import Image from "next/image";
import styles from "./userdetails.module.scss";
import config from "../../../../config";
// import { cardsData } from "@/utils/Utils";
import CopyWalletAddress from "../CopyWalletAddress/CopyWalletAddress";
import dynamic from "next/dynamic";
// import EditUserName from "../EditUserName/EditUserName";

const EditUserName = dynamic(() => import("../EditUserName/EditUserName"));

interface CardData {
  id: string;
  text: string;
  bg: string;
  imgLink: string;
  gridName: string;
  container_name: string;
  gameCount: string | number;
}

interface dashboardProps {
  userDetails: {
    totalGamePlayedTicket: number;
    totalTournamentPlayed: number;
    totalWinAmount: number;
    totalWinGames: number;
    totalLoseGames: number;
  };
}


const UserDetails: React.FC<dashboardProps> = ({userDetails}) => {
  console.log("userDetails",userDetails)
  const cardsData: CardData[] = [
    {
      id: "1",
      text: "Total Games Played",
      bg: "bg1",
      imgLink: `${config.imageDomain}/Assets/gameController.webp`,
      gridName: "total_games_played",
      container_name: "card__container",
      gameCount:userDetails.totalGamePlayedTicket 
    },
  
    {
      id: "2",
      text: "Total Matic Won",
      bg: "bg2",
      imgLink: `${config.imageDomain}/Assets/maticChainIcon.webp`,
      gridName: "total_matic_won",
      container_name: "card__container",
      gameCount:userDetails?.totalWinAmount,
  
    },
  
    {
      id: "3",
      text: "Total Tournament Played",
      bg: "bg3",
      imgLink:`${config.imageDomain}/Assets/tourPlayedSword.png`,
      gridName: "total_tournament_played",
      container_name: "card__container1",
      gameCount:userDetails?.totalTournamentPlayed,
  
    },
  
    {
      id: "4",
      text: "Total Wins",
      bg: "bg4",
      imgLink: `${config.imageDomain}/Assets/awardTrophy.webp`,
      gridName: "total_wins",
      container_name: "card__container",
      gameCount:userDetails?.totalWinGames
  
    },
  
    {
      id: "5",
      text: "Total losses",
      bg: "bg5",
      imgLink: `${config.imageDomain}/Assets/penShield.webp`,
      gridName: "total_losses",
      container_name: "card__container",
      gameCount:userDetails?.totalLoseGames
  
    },
  ];
  return (
    <div className={styles.user_detials_container}>
      <div className={styles.form_layout}>
        <h3 className={styles.heading}>hello</h3>
        <p className={styles.user_headers}>User Name:</p>
        <EditUserName userDetails={userDetails}/>
        <p className={styles.user_headers}>Wallet Address:</p>
        <CopyWalletAddress userDetails={userDetails}/>
      </div>

      <div className={styles.hero_image_container}>
        <Image
          height={20}
          width={20}
          className={styles.copyText}
          src={`${config.imageDomain}Assets/avatarNew.png`}
          alt="Copy"
          layout="responsive"
          // onClick={() => handleCopyClick("wallet?.address")}
        />
      </div>
      <div className={styles.wrapper}>
        {cardsData?.map((cardValue) => (
          <div
            key={cardValue?.id}
            className={`${styles[cardValue?.gridName]} ${
              styles[cardValue?.bg]
            }`}
          >
            <div className={styles[cardValue?.container_name]}>
              <span>
                <p className={styles.content_score}>{cardValue?.gameCount}</p>
                <p className={styles.content_score}>{cardValue?.text}</p>
              </span>
              <span className={styles.image_container}>
                <Image src={cardValue?.imgLink} alt="card-img" fill />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;


{// score_total,
// tickets,
// 49.9999
// totalGamePlayed,
// totalGamePlayedTicket,
// 1
// totalLoseGames,
// totalLoseGamesTicket,
// totalLossAmount,
// totalLossAmountTicket,
// totalReward,
// totalTournamentLoss,
// totalTournamentLossTicket,
// totalTournamentPlayed,
// totalTournamentWin,
// totalTournamentWinTicket,
// totalWinAmount,
// totalWinAmountTicket,
// totalWinGames,
// totalWinGamesTicket,
}



{
  /* <div
          className={`${styles.sunWrap} ${styles.wallet}`}
          style={{ marginBottom: "35px" }}
        >
          <span className={styles.sunChild}>
            <span>priyeshsoni_297</span>
            {<IoCopy onClick={() => handleCopyClick("priyeshsoni_297")} style={{cursor:"pointer", color:"#fbc400"}}/>}
          </span>
        </div> */
}

{
  /* <div className={styles.copiedRow}>
          {isCopied ? (
            <p className="text-warning">Wallet Address Copied!</p>
          ) : (
            ""
          )}
        </div> */
}
