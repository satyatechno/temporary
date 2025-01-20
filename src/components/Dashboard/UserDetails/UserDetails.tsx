import Image from "next/image";
import styles from "./userdetails.module.scss";
import config from "../../../../config";
import CopyWalletAddress from "../CopyWalletAddress/CopyWalletAddress";
import dynamic from "next/dynamic";
import CardsData from "./CardsData";

const EditUserName = dynamic(() => import("../EditUserName/EditUserName"));

const UserDetails= () => {

  return (
    <div className={styles.user_detials_container}>
      <div className={styles.form_layout}>
        <h3 className={styles.heading}>hello</h3>
        <p className={styles.user_headers_1}>User Name:</p>
        <EditUserName />
        <p className={styles.user_headers_2}>Wallet Address:</p>
        <CopyWalletAddress />
      </div>

      <div className={styles.hero_image_container}>
        <Image
          className={styles.responsive_image}
          src={`${config.imageDomain}Assets/avatarNew.png`}
          alt="avatar"
          sizes="(max-width: 768px) 100vw, 50vw"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <CardsData />
    </div>
  );
};

export default UserDetails;

{
  // score_total,
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
