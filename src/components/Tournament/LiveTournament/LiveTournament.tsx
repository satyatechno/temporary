import Image from "next/image";
import styles from "./livetournament.module.scss";
import config from "../../../../config";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";

const LiveTournament = ({ tournamentList }: any) => {
  return (
    <>
      {tournamentList?.slice(0, 1).map((value: any) => (
        <div className={styles.live_tournament_container} key={value?._id}>
          <div className={styles.left_container}>
            <div>
              <Image src={value?.thumbnail} width={290} height={150} alt="" />
            </div>

            <div>
              <div className={styles.tournament_end_in}>
                <h4>Tournament Ends In:</h4>
              </div>
              {!value.pastTournament ? (
                <p
                className={styles.entry_close}
                >
                  Entry closes 150 mins prior
                </p>
              ) : null}
            </div>
          </div>

          <div className={styles.right_container}>
            <div className={styles.tournamentReward}>
              <div className={styles.reward_image_container}>
                <Image
                  src={`${config.imageDomain}Assets/boxT.webp`}
                  alt=""
                  fill
                />
              </div>
              <div className={styles.reward_container}>
                <p className={styles.reward_container_p}>Tournament Reward</p>
                <div>
                  <h2 className={styles.reward_container_h2}>
                    {value?.reward.toFixed(2)}
                  </h2>
                  <Image
                    src={`${config.imageDomain}/loading-images/matic1.webp`}
                    alt="Game fi"
                    height={0}
                    width={0}
                    sizes="100vw"
                    quality={85}
                    style={{ height: "50px", width: "auto" }}
                  />
                </div>
              </div>
            </div>

            <div className={styles.entry_price_and_player}>
              <div>
                <p className={styles.entry_price_p1}>00.1</p>
                <p className={styles.entry_price_p2}>Entry Price</p>
              </div>
              <div className={styles.meta_star_container}>
                <Image
                  src={`${config.imageDomain}/Assets/starT.webp`}
                  alt="Gaming Arcade"
                  fill
                />
              </div>
              <div>
                <p className={styles.entry_price_p1}>0</p>
                <p className={styles.entry_price_p2}>players</p>
              </div>
            </div>

            <div className={styles.ranking_btn}>
              <Image
                src="https://assets.gamingarcade.io/Assets/gamePlay/imageRanking.png"
                alt="Play to earn"
                height={0}
                width={0}
                sizes="100vw"
                style={{ height: "30px", width: "auto" }}
              />
              <p className={styles.ranking_heading}>Ranking</p>
            </div>

            <div className={styles.playBtn}>
              <Button value="Free Play By" />
              <Button value="Free Play By" />
            </div>

            <div className={styles.post_on_twitter}>
              <div className={styles.twitter_left_section}>
                <input
                  type="checkbox"
                  // checked={twitterChecked}
                  // onChange={(e) => setTwitterChecked(e.target.checked)}
                />
                <p className={styles.twitter_msg}>
                  Post on twitter and let my friends know
                </p>
              </div>

              <div className={styles.free_entries}>
                <p className={styles.twitter_msg}>
                  Free Entries:
                  {/* {cardValue?.numberOfFreeGames}/{cardValue?.maxEntries} */}
                </p>
              </div>
            </div>

          </div>
        </div>
      ))}
    </>
  );
};

export default LiveTournament;

{
  // <div className={styles.card_main}>
  //   <div className={styles.content_container}>
  //     <div>
  //       <div>
  //         <Image src={value?.thumbnail} alt="" height={100} width={100} />
  //       </div>
  //       <div>
  //         <div className={styles.ends}>
  //           <h4>Tournament Ends In:</h4>
  //           <div className={styles.timeline2}>
  //           {112}
  //         </div>
  //           {!value.pastTournament ? (
  //             <p
  //               style={{
  //                 marginTop: "40px",
  //                 textAlign: "center",
  //                 color: "white",
  //                 fontSize: "14px",
  //               }}
  //             >
  //               Entry closes 150 mins prior
  //             </p>
  //           ) : null}
  //         </div>
  //       </div>
  //     </div>
  //     <div></div>
  //   </div>
  // </div>
}
