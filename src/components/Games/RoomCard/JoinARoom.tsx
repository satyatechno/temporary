import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import styles from "./joinroom.module.scss";
import RoomModal from "@/components/CommonComponent/RoomModal/RoomModal";

const JoinARoom = ({ onClose }: { onClose: () => void }) => {
  return (
    <RoomModal isOpen={true}>
    <div>
      <div className={styles.heading_section}>
        <p className={styles.tickets_available_h3}>Ticket Available</p>
        <button className={styles.closeButton} onClick={onClose}>
          <span className={styles.cross}>×</span>
        </button>
      </div>

      <div className={styles.play_custom_card_container}>
        <p className={styles.select_a_board_h2}>Enter Code</p>
        <div className={styles.input_container}>
          <input placeholder="ENTER YOUR CODE" className={styles.input_box} />
        </div>
        <Button value="Join Room" className={styles.btn_style} />
      </div>

      <p className={styles.bottom_heading}>Join A Room</p>
    </div>
    </RoomModal>
  );
};
export default JoinARoom;
