import styles from "./dynamicmodal.module.scss"; // For styling
import Button from "../AnimatedButton/AnimatedButton";

interface ModalProps {
  title: string;
  onClose: () => void;
  onSubmit: (data: Record<string, any>) => void;
}

const DynamicModal: React.FC<ModalProps> = ({
  title,
  onClose,
  onSubmit,
  setUserName,
  newUserName,
}: any) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.upperContentSection}>
          <h3 className={styles.userName}>{title}</h3>
          <p
            className={styles.userName}
            style={{ cursor: "pointer" }}
            onClick={onClose}
          >
            x
          </p>
        </div>
        <input
          className={styles.inputBox}
          id="username"
          type="text"
          value={newUserName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button value="Save" onClick={() => onSubmit(newUserName)} />
      </div>
    </div>
  );
};

export default DynamicModal;
