import { inter, poppins } from "@/app/layout";
import config from "../../../../config";
import GamesGrid from "./GamesGrid/GamesGrid";
import styles from "./playWithFriends.module.scss";

import PlayWithFriendsCard from "./PlayWithFriendsCard";
import Image from "next/image";

const PlayWithFriends = ({ gameDetails }: { gameDetails: any }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={poppins.className}>More Options</h2>
        <div className={styles.playTextContainer}>
          <h3 className={`${styles.play_with}  ${inter.className}`}>
            <p>Play</p>
            <p>With</p>
            <p>Friends</p>
            {/* <p className={`${styles.friendText1} ${poppins.className}`}>Friends</p> */}
          </h3>
          <div className={styles.playTextContainer_img}>
          <Image
            src={`https://assets.gamingarcade.io/Assets/cup.webp`}
            alt="cup"
            fill
          />
          </div>
        </div>
        <h3 className={`${styles.friendText} ${poppins.className}`}>
          Friends
          <div className={styles.line} />
        </h3>
      </div>
      <div className={styles.cardContainer}>
        <PlayWithFriendsCard
          title={"Create & Play Custom Room"}
          buttonText={"Lets Create"}
          img={`${config.imageDomain}Assets/kids.webp`}
          gameDetails={gameDetails}
        />
        <PlayWithFriendsCard
          title={"Join A Room"}
          buttonText={"Join Now"}
          img={`${config.imageDomain}Assets/gameroom.webp`}
          invert
          gameDetails={gameDetails}
        />
        <PlayWithFriendsCard
          title={"Place Your Own Bet"}
          buttonText={"Play Now"}
          img={`${config.imageDomain}Assets/trophy.webp`}
          gameDetails={gameDetails}
        />
      </div>
      <GamesGrid game={gameDetails?.name} />
    </div>
  );
};

export default PlayWithFriends;
