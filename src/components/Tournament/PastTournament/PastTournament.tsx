"use client";
import Image from "next/image";
import styles from "./pasttournament.module.scss";
import config from "../../../../config";
import { useRouter } from "next/navigation";

const PastTournament = ({ tournamentList, pastTournament }: any) => {
  if (!tournamentList?.length || pastTournament) return;

  return (
    <div className={styles.main_container}>
      {tournamentList?.map((cardValue: any) => (
        <TournamentCard cardValue={cardValue} pastTournament={pastTournament} />
      ))}
    </div>
  );
};

export default PastTournament;

export const TournamentCard = ({ cardValue, pastTournament }: any) => {
  console.log("checking data", cardValue?.serial);

  const { push } = useRouter();
  const test = async () => {
  //   let data = await TournamentData(cardValue?.serial, cardValue?.game?.name);
  //   // console.log("datadata",data)
  //   if (data?.statusCode === "10000") {
      push(`/tournament/${cardValue?.game?.name}?tournament=${cardValue?.serial}`)
  //   }
  };
  
  return (
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
            {/* <p>
              Tournament <br /> Ended
            </p> */}
            <div className={styles.ranking_container} onClick={()=>test()} >
              <Image
                src={`${config.imageDomain}/Assets/gamePlay/imageRanking.png`}
                alt=""
                height={30}
                width={30}
              />
              {/* <Link href={`/leaderBoard/${cardValue?.game?.name}?tournament=${cardValue?.serial}`}> */}
                <p style={{ textDecoration: "none" }}>Ranking</p>
              {/* </Link> */}
            </div>
          </div>
          <div className={styles.tournamentCardPast__reward}>
            <Image
              src={`${config.imageDomain}/Assets/boxT.webp`}
              alt="Game Fi"
              height={0}
              width={0}
              sizes="100vw"
              // style={{
              //   height: "100px",
              //   width: "auto",
              //   marginLeft: "-60px",
              // }}
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
        {!pastTournament && (
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
                {cardValue?.numberOfFreeGames}/{cardValue?.maxEntries}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
