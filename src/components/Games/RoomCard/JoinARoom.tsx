import Button from '@/components/CommonComponent/AnimatedButton/AnimatedButton';
import styles from './joinroom.module.scss';
import RoomModal from '@/components/CommonComponent/RoomModal/RoomModal';
import Image from 'next/image';
import config from '../../../../config';
import { useAppContext } from '@/app/Context/AuthContext';
import { useState } from 'react';
import { checkRoomApi } from '@/services/challenge';

const JoinARoom = ({
  onClose,
}: {
  onClose: () => void;
  gameDetails: any;
}) => {
  const { wallet, userData } = useAppContext();
  const [joinCode, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [roomData, setRoomData] = useState();
  const [roomValid, setRoomValid] = useState('');
  const validation = () => {
    if (joinCode?.trim().length > 3) {
      checkRoom();
    } else {
      alert('Please enter room code');
    }
  };
  const checkRoom = async () => {
    setLoading(true);
    let response:any = await checkRoomApi({ code: joinCode });
    console.log('room join', JSON.stringify(response?.data));
    if (response?.data?.statusCode && response?.data?.statusCode === '10000') {
      setRoomData(response?.data?.data?.game);
      setLoading(false);
      setRoomValid('valid');
    } else {
      alert('Bet Error: ' + response.response.data.message);

      setRoomValid(response.response.data.message);
      setLoading(false);
    }
  };
  const handlePlay = () => {};
  return (
    <RoomModal isOpen={true}>
      <div>
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
          </div>{' '}
          <button className={styles.closeButton} onClick={onClose}>
            <span className={styles.cross}>×</span>
          </button>
        </div>

        <div className={styles.play_custom_card_container}>
          <p className={styles.select_a_board_h2}>Enter Code</p>
          <div className={styles.input_container}>
            <input
              placeholder="ENTER YOUR CODE"
              onChange={(e) => {
                setCode(e.target.value);
              }}
              className={styles.input_box}
            />
          </div>
          {roomValid == 'valid' ? (
            <Button
              value="Play Now"
              onClick={validation}
              className={styles.btn_style}
            />
          ) : (
            <Button
              value="Join Room"
              onClick={handlePlay}
              className={styles.btn_style}
            />
          )}
        </div>

        <p className={styles.bottom_heading}>Join A Room</p>
      </div>
    </RoomModal>
  );
};
export default JoinARoom;
