import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import RoomModal from "@/components/CommonComponent/RoomModal/RoomModal";
import styles from "./roomcard.module.scss";

const PlayCustomRoomCard = ({ onClose }: { onClose: () => void }) => {
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

      <div></div>

      <div className={styles.play_custom_card_container}>
        <p className={styles.select_a_board_h2}>Enter Amount</p>
        <div className={styles.input_container}>
          <input placeholder="ENTER YOUR AMOUNT" className={styles.input_box} />
        </div>
        <Button value="Create Room" className={styles.btn_style} />
      </div>

      <p className={styles.bottom_heading}>Create A Room</p>
    </RoomModal>
  );
};

export default PlayCustomRoomCard;
