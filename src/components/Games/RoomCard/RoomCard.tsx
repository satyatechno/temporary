import Button from '@/components/CommonComponent/AnimatedButton/AnimatedButton';
import RoomModal from '@/components/CommonComponent/RoomModal/RoomModal';
import styles from './roomcard.module.scss';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useGameModule from '@/hooks/challengeService';
import { useAppContext } from '@/app/Context/AuthContext';

const PlayCustomRoomCard = ({
  onClose,
  gameDetails,
}: {
  onClose: () => void;
  gameDetails: any;
}) => {
  const [selectedStage, setSelectedStage] = React.useState<any>('1');
  const [selectedAmount, setSelectedAmount] = React.useState<any>();
  const [Loaded, setLoaded] = useState(false);
  const [showCodeView, setShowCodeView] = useState(false);
  const [paramData, setParamData] = useState<any>();
  const { playChallenge, betData } = useGameModule();
  const { wallet, userData } = useAppContext();
  const handleCreateRoom = () => {
    if (selectedAmount > 0) {
    } else {
      alert('Please enter amount');
    }
  };
  const handleRoomCreate = () => {
    const data: any = {
      name: gameDetails?.name,
      stage: selectedStage,
      value: parseFloat(selectedAmount),
      gameType: 'PlayWithFriend',
      landscape: gameDetails.landscape ? true : false,
      isCustomBet: true,
      medium: 'ticket',
      practice: false,
      userId: wallet?.address,
      direct: false,
    };
    setParamData(data);
    setLoaded(true);
    playChallenge({
      betAmount: data?.value,
      type: data?.gameType,
      directJoin: data?.direct,
      game: data?.name,
      isCustomBet: data?.isCustomBet,
      gameId: data?.gameId,
      medium: data?.medium,
      stage: data?.stage,
      code: data?.code,
      pause: true,
    });
  };

  useEffect(() => {
    if (betData?.code) {
      setLoaded(false);
      setShowCodeView(true);
    }
  }, [betData]);
  const handleRoomPlay = () => {
    setShowCodeView(false);
    onClose();
  };
  return (
    <RoomModal isOpen={true}>
      <div className={styles.heading_section}>
        <p className={styles.tickets_available_h3}>Ticket Available</p>
        <button className={styles.closeButton} onClick={onClose}>
          <span className={styles.cross}>×</span>
        </button>
      </div>
      <div className={styles.select_a_board}>
        <p className={styles.select_a_board_h2}>Select A Board</p>
      </div>

      <div className={styles.stages}>
        {gameDetails?.stages?.map((stage: any, index: number) => (
          <div
            onClick={() => {
              setSelectedStage(stage?.stage);
            }}
            className={selectedStage === stage?.stage ? styles.stage : ''}
            key={index?.toString()}
          >
            <Image alt="stage" src={stage?.img} height={130} width={80} />
          </div>
        ))}
      </div>

      <div className={styles.play_custom_card_container}>
        <p className={styles.select_a_board_h2}>Enter Amount</p>
        <div className={styles.input_container}>
          <input
            placeholder="ENTER YOUR AMOUNT"
            type="number"
            onChange={(e) => setSelectedAmount(e.target.value)}
            className={styles.input_box}
          />
        </div>
        <Button
          onClick={() => handleCreateRoom()}
          value="Create Room"
          className={styles.btn_style}
        />
      </div>

      <p className={styles.bottom_heading}>Create A Room</p>
    </RoomModal>
  );
};

export default PlayCustomRoomCard;
