import Modal from "../AuthModal/Modal/Modal";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../CommonComponent/AnimatedButton/AnimatedButton";
import styles from "./transactionmodule.module.scss";
const TransactionModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal isOpen={true}>
      <div className={styles.modal__container}>
        <p className={styles.heading}>Polygon Network (Matix Mainet)</p>
        <div className={styles.upper_container}>
          <div className={styles.upper_container_content}>
            <div className={styles.circle}></div>
            <div >
              <p>Oxeg...djnsodf</p>
              <p>abhii@gamil.com</p>
            </div>
          </div>
          <FaLongArrowAltRight />
          <div className={styles.upper_container_content}>
            <div className={styles.circle2}></div>
            <p>Gaming Arcade</p>
          </div>
        </div>

        <div className={styles.lower_container}>
          {/* <div className={styles.transaction_container}> */}
          <div>
            <p>Amount</p>
            <p>00.0 M</p>
          </div>

          <div>
            <p>Gas(estimated)</p>
            <p>00.0 M</p>
          </div>

          <div>
            <p>Total(Amount + gas fees)</p>
            <p>00.0 M</p>
          </div>

          {/* </div> */}
        </div>
        <Button value="Confirm" onClick={() => onClose()} />
      </div>
    </Modal>
  );
};

export default TransactionModal;
