import React from 'react';
import Image from 'next/image';
import config from '../../../../config';
import styles from "./Gamecard.module.scss";

function GamesCard({ gameImg, playedCount, gameName, onClick }:any) {
  return (
    <div className={styles.gamesCard} onClick={onClick}>
        <div className={styles.gamesCard__imageContainer}>
            <Image 
                src={gameImg}
                alt="Play to earn"
                height={0}
                width={0}
                sizes="100vw"
                style={{ height: "250px", width: "100%", borderRadius: "20px", objectFit: "cover" }}
            />
            {/* <img src={gameImg} alt="Play to earn" /> */}
            <div>
                {/* <Button value="Play Now">Play Now</Button> */}
            </div>
        </div>
        <h3>{gameName}</h3>
        <div className={styles.gamesCard__playCount}>
            <div className={styles.players} >
                <div className="playe-profile">
                    <img src={`${config.imageDomain}/loading-images/user1.webp`}alt="Game Fi" />
                </div>
                <div className="playe-profile">
                    <img src={`${config.imageDomain}/loading-images/user2.webp`} alt="Game Fi" />
                </div>
                <div className="playe-profile">
                    <img src={`${config.imageDomain}/loading-images/user3.webp`} alt="Gaming Arcade" />
                </div>
            </div>
            <p>{playedCount} Played</p>
        </div>
    </div>
  )
}

export default GamesCard;