"use client";
import Image from "next/image";
import styles from "./mostplayed.module.scss";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import { useState } from "react";
import { useGamesContext } from "@/app/Context/GamesContext";
import { useRouter } from "next/navigation";

const MostPlayedGame = () => {
  const { games } = useGamesContext();

  const [isHovering, setIsHovering] = useState<number | null>(null);

  const router = useRouter();

  const handleMouseOver = (id: number) => {
    setIsHovering(id);
  };

  const handleMouseOut = () => {
    setIsHovering(null);
  };

  const playGameHandler = (gameName: string) => {
    router.push(`/games/${gameName}`);
  };
  return (
    <div className={styles.section5__cardsRight}>
      {games?.slice(2, 8)?.map((game, index) => (
        <div
          className={styles.section5__cardRightContainer}
          style={{ cursor: "pointer" }}
          key={index}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
          onClick={() => playGameHandler(game.name)}
        >
          <Image
            src={game.thumbnail}
            alt="Play to earn"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              height: "180px",
              width: "100%",
              borderRadius: "30px",
              objectFit: "cover",
            }}
          />
          <div>
            {isHovering === index && (
              <Button
                className={styles.playNowButton}
                onClick={() => playGameHandler(game.name)}
                value="Play Now"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPlayedGame;
