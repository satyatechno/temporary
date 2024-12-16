import Image from "next/image";
import styles from "./toprankers.module.scss";
import config from "../../../../config";

const TopRankers = ({ topRankersData }: any) => {
  return (
    <div className={styles.left_container}>
      <div className={styles.top_participant}>
        <div className={styles.top_positions_logo}>
          <Image
            src={`${config.imageDomain}/loading-images/topLd.webp`}
            alt="Bottom Logo"
            fill
          />
        </div>

        <div className={styles.ranking_stats}>
          <div>
            {" "}
            <div className={styles.user_image}>
              <Image
                src={`${config.imageDomain}/loading-images/user1.webp`}
                alt="user image"
                fill
              />
            </div>
            <p>
              {" "}
              {topRankersData?.[0]?.participate?.address
                ? `${topRankersData?.[0]?.participate?.address.substring(
                    0,
                    5
                  )}...`
                : "N/A"}
            </p>
            <p>{topRankersData?.[0]?.participate?.twitter}</p>
            <p className={styles.user_scored}>
              {topRankersData?.[0]?.participate?.score}
            </p>
            <div className={`${styles.userBar} ${styles[`userBar${1 + 1}`]}`}>
              <p className={styles.ranked_number}>{1 + 1}</p>
              <span className={styles.user_award_container}>
                <div className={styles.award_img_container}>
                  <Image
                    src={`${config.imageDomain}/loading-images/matic1.webp`}
                    alt="matic"
                    fill
                  />
                </div>
                <p>{topRankersData?.[0]?.winnings?.winnings}</p>
              </span>
            </div>
          </div>

          <div>
            {" "}
            <div className={styles.user_image}>
              <Image
                src={`${config.imageDomain}/loading-images/user1.webp`}
                alt="user image"
                fill
              />
            </div>
            <p>
              {" "}
              {topRankersData?.[1]?.participate?.address
                ? `${topRankersData?.[1]?.participate?.address.substring(
                    0,
                    5
                  )}...`
                : "N/A"}
            </p>
            <p>{topRankersData?.[1]?.participate?.twitter}</p>
            <p className={styles.user_scored}>
              {topRankersData?.[1]?.participate?.score}
            </p>
            <div className={`${styles.userBar} ${styles[`userBar${0 + 1}`]}`}>
              <p className={styles.ranked_number}>{0 + 1}</p>
              <span className={styles.user_award_container}>
                <div className={styles.award_img_container}>
                  <Image
                    src={`${config.imageDomain}/loading-images/matic1.webp`}
                    alt="matic"
                    fill
                  />
                </div>
                <p>{topRankersData?.[1]?.winnings?.winnings}</p>
              </span>
            </div>
          </div>

          <div>
            <div className={styles.user_image}>
              <Image
                src={`${config.imageDomain}/loading-images/user1.webp`}
                alt="user image"
                fill
              />
            </div>
            <p>
              {" "}
              {topRankersData?.[2]?.participate?.address
                ? `${topRankersData?.[2]?.participate?.address.substring(
                    0,
                    5
                  )}...`
                : "N/A"}
            </p>
            <p>{topRankersData?.[2]?.participate?.twitter}</p>
            <p className={styles.user_scored}>
              {topRankersData?.[2]?.participate?.score}
            </p>
            <div className={`${styles.userBar} ${styles[`userBar${2 + 1}`]}`}>
              <p className={styles.ranked_number}>{2 + 1}</p>
              <span className={styles.user_award_container}>
                <div className={styles.award_img_container}>
                  <Image
                    src={`${config.imageDomain}/loading-images/matic1.webp`}
                    alt="matic"
                    fill
                  />
                </div>
                <p>{topRankersData?.[2]?.winnings?.winnings}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopRankers;

// const topRankersData = [
//   {
//     address: "0x9e3...",
//     twitter: "---",
//     imgLink: "/loading-images/user1.webp",
//     score: "20180",
//     winnings: "32.20000",
//   },
//   {
//     address: "0x9e3...",
//     twitter: "---",
//     imgLink: "/loading-images/user1.webp",
//     score: "20180",
//     winnings: "32.20000",
//   },
//   {
//     address: "0x9e3...",
//     twitter: "---",
//     imgLink: "/loading-images/user1.webp",
//     score: "20180",
//     winnings: "32.20000",
//   },
// ];

// {
//   topRankersData?.map((playerRank: any, index: any) => (
//     <div className={styles.ranking_stats} key={index}>
//       <div className={styles.user_image}>
//         <Image
//           src={`${config.imageDomain}/loading-images/user1.webp`}
//           alt="user image"
//           fill
//         />
//       </div>
//       <p>
//         {" "}
//         {playerRank?.participate?.address
//           ? `${playerRank?.participate?.address.substring(0, 5)}...`
//           : "N/A"}
//       </p>
//       <p>{playerRank?.participate?.twitter}</p>
//       <p className={styles.user_scored}>{playerRank?.participate?.score}</p>
//       <div className={`${styles.userBar} ${styles[`userBar${index + 1}`]}`}>
//         <p className={styles.ranked_number}>{index + 1}</p>
//         <span className={styles.user_award_container}>
//           <div className={styles.award_img_container}>
//             <Image
//               src={`${config.imageDomain}/loading-images/matic1.webp`}
//               alt="matic"
//               fill
//             />
//           </div>
//           <p>{playerRank?.winnings?.winnings}</p>
//         </span>
//       </div>
//     </div>
//   ));
// }
