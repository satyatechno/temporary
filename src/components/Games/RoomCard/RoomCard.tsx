import Button from '@/components/CommonComponent/AnimatedButton/AnimatedButton';
import RoomModal from '@/components/CommonComponent/RoomModal/RoomModal';
import styles from './roomcard.module.scss';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useGameModule from '@/hooks/challengeService';
import { useAppContext } from '@/app/Context/AuthContext';
import config from '../../../../config';

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
  const [showCodeView, setShowCodeView] = useState(true);
  const [invitelLink, setInviteLink] = useState('');
  const [paramData, setParamData] = useState<any>();
  const [copyLink, setCopyLink] = useState<any>(false);
  const { playChallenge, betData }: any = useGameModule();
  const { wallet, userData } = useAppContext();

  const copyTextHandler = () => {
    setInviteLink(betData?.code);
    navigator?.clipboard?.writeText(betData?.code);
    setCopyLink(true);
  };
  const handleCreateRoom = () => {
    if (selectedAmount >= 1) {
      handleRoomCreate();
    } else {
      alert('Please enter valid amount');
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
  console.log(paramData)//need to add value in future

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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={
              false
                ? `${config.imageDomain}Assets/matic.webp`
                : 'https://assets.gamingarcade.io/Assetsticket.webp'
            }
            alt="matic"
            height={20}
            width={20}
          />
          <p className={styles.tickets_available_h3}>
            {false
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
      {showCodeView ? (
        <>
          <div className={styles.code}>
            <h1>Room code: {betData?.code ?? '00000'}</h1>
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <Image
                height={300}
                width={200}
                src={`${config.imageDomain}game-avatar/${0 + 1}.webp`}
                alt="game-avatar"
              />
              <Image
                height={40}
                width={40}
                src={`${config.imageDomain}Assets/stage-vs.webp`}
                alt="game-avatar"
              />
              <Image
                height={170}
                width={150}
                src={`${config.imageDomain}Assets/stage-add-person.webp`}
                alt="game-avatar"
                onClick={() => {
                  copyTextHandler();
                }}
              />
            </div>
            {copyLink ? (
              <span
                className={`${styles.tooltip}`}
                style={{ backgroundColor: '#92dd47' }}
              >
                Copied to clipboard! {invitelLink}
              </span>
            ) : (
              <span className={styles.tooltip}>
                Click here to invite your <br />
                facebook friends/ buddies to play
              </span>
            )}
          </div>

          <div
            style={{
              display: copyLink ? 'flex' : 'none',
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={() => handleRoomPlay()}
              value="Play Now"
              className={styles.btn_style}
            />
          </div>

          <p className={styles.bottom_heading}>Create A Room</p>
        </>
      ) : (
        <>
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
              value={Loaded ? 'Loading...' : 'Create Room'}
              className={styles.btn_style}
            />
          </div>

          <p className={styles.bottom_heading}>Create A Room</p>
        </>
      )}
    </RoomModal>
  );
};

export default PlayCustomRoomCard;
