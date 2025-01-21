'use client'
import { useState } from "react";
import styles from "./playWithFriends.module.scss";
import { poppins } from "@/app/layout";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import PlayCustomRoomCard from "../RoomCard/RoomCard";
import JoinARoom from "../RoomCard/JoinARoom";
import CreateABet from "../RoomCard/CreateABet";
import Image from "next/image";

interface CardProps {
    title?: string;
    buttonText?: string;
    img?: string;
    invert?: boolean;
    gameDetails?: any;
  }
  const PlayWithFriendsCard = ({
    title = "Create Room",
    buttonText = "Click",
    img = "https://assets.gamingarcade.io/Assets/kids.webp",
    invert = false,
    gameDetails,
  }: CardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");
  
    const handleModaltype = (buttonText: string) => {
      setModalType(buttonText);
      handleOpenModal();
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
        <div className={styles.card_image_container}>
          <Image src={img} alt="gaming arcade" fill />
          <Image className={styles.blurImg} src={img} alt="Blured" fill/>
        </div>
        {isModalOpen && modalType === "Lets Create" && (
          <PlayCustomRoomCard
            gameDetails={gameDetails}
            onClose={handleCloseModal}
          />
        )}
        {isModalOpen && modalType === "Join Now" && (
          <JoinARoom gameDetails={gameDetails} onClose={handleCloseModal} />
        )}
        {isModalOpen && modalType === "Play Now" && (
          <CreateABet gameDetails={gameDetails} onClose={handleCloseModal} />
        )}
      </div>
    );
  };

export default PlayWithFriendsCard;