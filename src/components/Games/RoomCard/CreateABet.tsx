import Button from '@/components/CommonComponent/AnimatedButton/AnimatedButton';
import RoomModal from '@/components/CommonComponent/RoomModal/RoomModal';
import styles from './roomcard.module.scss';
import Image from 'next/image';
import config from '../../../../config';
import { useAppContext } from '@/app/Context/AuthContext';
import React from 'react';
import { useRouter } from 'next/navigation';

const CreateABet = ({
  onClose,
  gameDetails,
}: {
  onClose: () => void;
  gameDetails: any;
}) => {
  const { wallet, userData, medium } = useAppContext();
  const [selectedStage, setSelectedStage] = React.useState<any>('1');
  const [selectedAmount, setSelectedAmount] = React.useState<any>();
  const router = useRouter();
  const validation = () => {
    if (!selectedAmount?.trim()) {
      alert('Please enter a valid amount');
    } else if (!selectedStage) {
      alert('Please select a stage');
    } else {
      if (selectedAmount >= 1) handleBetCreate();
    }
  };
  const handleBetCreate = () => {
    //commenting unnecessary code

    const data = {
      stage: selectedStage,
      name: gameDetails?.name,
      game: gameDetails?.name,
      value: parseFloat(selectedAmount),
      gameType: 'OneVSOne',
      landscape: gameDetails.landscape ? true : false,
      isCustomBet: true,
      userId: wallet?.address,
      practice: false,
      direct: false,
      medium: medium,
      buildUrl: gameDetails?.buildUrl,
    };
    //@ts-ignore
    const queryString = new URLSearchParams(data).toString();
    // Use the serialized string in the push method
    router.push(`/playgame?${queryString}`);
    onClose();
  };
  return (
    <RoomModal isOpen={true}>
      <div className={styles.heading_section}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={
              medium == 'currency'
                ? `${config.imageDomain}Assets/matic.webp`
                : 'https://assets.gamingarcade.io/Assetsticket.webp'
            }
            alt="matic"
            height={20}
            width={20}
          />
          <p className={styles.tickets_available_h3}>
            {medium == 'currency'
              ? wallet?.balance?.toFixed(2)
              : userData?.tickets?.toFixed(2)}
          </p>
          &nbsp;&nbsp;
          <p className={styles.tickets_available_h3}> Ticket Available</p>
        </div>
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
            className={styles.input_box}
            onChange={(e) => setSelectedAmount(e.target.value)}
          />
        </div>
        <Button
          onClick={validation}
          value="Create Bet"
          className={styles.btn_style}
        />
      </div>

      <p className={styles.bottom_heading}>Create A Bet</p>
    </RoomModal>
  );
};

export default CreateABet;
