import styles from "./roommodal.module.scss";
const RoomModal = ({ isOpen, children }: any) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>{children}</div>
    </div>
  );
};

export default RoomModal;
