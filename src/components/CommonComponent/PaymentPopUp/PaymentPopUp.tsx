import Modal from "@/components/AuthModal/Modal/Modal";
import config from "../../../../config";
import Image from "next/image";
import styles from "./paymentpooup.module.scss";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function PaymentPopUp({ onClose }: { onClose: () => void }) {
  return (
    <>
      <Modal isOpen={true} className={customStyles}>
        <div onClick={onClose} className={styles.cross_btn}>
          <Image
            src={`${config.imageDomain}Assets/corss-modal.webp`}
            alt="corss-icon"
            height={50}
            width={50}
          />
        </div>
        <div className={styles.warning_logo}>
          <Image
            src={`${config.imageDomain}Assets/warn.webp`}
            alt="warning-logo"
            height={120}
            width={120}
          />
        </div>
        <p className={styles.warning_descriptions}>
          Please Sign In to Play and win game against worldwide players
        </p>
      </Modal>
    </>
  );
}

export default PaymentPopUp;
