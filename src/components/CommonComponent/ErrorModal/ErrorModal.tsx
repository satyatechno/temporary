import styles from "./errormodal.module.scss"; 

const ErrorModal = ({ message, onClose }: { message: string; onClose: () => void }) => {

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <button onClick={onClose} className={styles.closeBtn}>Close</button>
      </div>
    </div>
  );
};

export default ErrorModal;
