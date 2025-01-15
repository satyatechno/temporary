
import styles from "./modal.module.scss";

const Modal = ({ isOpen, children }:any) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
