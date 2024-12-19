"use client";
import { inter, poppins } from "@/app/layout";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import config from "../../../../config";
import GamesGrid from "./GamesGrid/GamesGrid";
import styles from "./playWithFriends.module.scss";
import { useState } from "react";
import PlayCustomRoomCard from "../RoomCard/RoomCard";
import JoinARoom from "../RoomCard/JoinARoom";
import CreateABet from "../RoomCard/CreateABet";
interface CardProps {
  title?: string;
  buttonText?: string;
  img?: string;
  invert?: boolean;
}
const Card = ({
  title = "Create Room",
  buttonText = "Click",
  img = "https://assets.gamingarcade.io/Assets/kids.webp",
  invert = false,
}: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleModaltype = (buttonText: string) => {
    setModalType(buttonText);
    handleOpenModal()
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`${styles.card} ${invert && styles.cardBg}`}>
      <h2 className={poppins.className}>{title}</h2>

      <Button
        value={buttonText}
        className={styles.button}
        iconNew="https://assets.gamingarcade.io/Assets/arrow-sm.webp"
        onClick={() => handleModaltype(buttonText)}
      />
      <div className={styles.imageContainer}>
        <img src={img} alt="gaming arcade" />
        <img className={styles.blurImg} src={img} alt="Blured" />
      </div>
      {isModalOpen && modalType === "Lets Create" && (
        <CreateABet onClose={handleCloseModal} />
      )}
      {isModalOpen && modalType === "Join Now" && (
      <JoinARoom onClose={handleCloseModal} />
      )}
      {isModalOpen && modalType === "Play Now" && (
        <PlayCustomRoomCard onClose={handleCloseModal} />
      )}
    </div>
  );
};
const PlayWithFriends = ({ gameDetails }: { gameDetails: any }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={poppins.className}>More Options</h2>
        <div className={styles.playTextContainer}>
          <h3 className={inter.className}>
            Play
            <br />
            With
          </h3>
          <img
            src={`https://assets.gamingarcade.io/Assets/cup.webp`}
            alt="cup"
          />
        </div>
        <h3 className={`${styles.friendText} ${poppins.className}`}>
          Friends
          <div className={styles.line} />
        </h3>
      </div>
      <div className={styles.cardContainer}>
        <Card
          title={"Create & Play Custom Room"}
          buttonText={"Lets Create"}
          img={`${config.imageDomain}Assets/kids.webp`}
        />
        <Card
          title={"Join A Room"}
          buttonText={"Join Now"}
          img={`${config.imageDomain}Assets/gameroom.webp`}
          invert
        />
        <Card
          title={"Place Your Own Bet"}
          buttonText={"Play Now"}
          img={`${config.imageDomain}Assets/trophy.webp`}
        />
      </div>
      <GamesGrid game={gameDetails?.name} />
    </div>
  );
};

export default PlayWithFriends;
