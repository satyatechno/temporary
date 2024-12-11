"use client";
import styles from "./managewallets.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import TicketWalletDetail from "./TicketWalletDetails/TicketWalletDetails";
import TicketWalletDeposite from "./TicketWalletDeposite/TicketWalletDeposite";
import MyOtherWallets from "./MyOtherWallets/MyOtherWallets";
import Link from "next/link";
import WalletSidebar from "./WalletSidebar/WalletSidebar";
import { useState } from "react";
import ImportAccountModal from "./ImportAccountModal/ImportAccountModal";
import WalletOTPVerificationModal from "./WalletOTPVerificationModal/WalletOTPVerificationModal";
import LogoutModal from "@/components/AuthModal/LogoutModal/LogoutModal";
import PrivateKeyModal from "./PrivateKeyModal/PrivateKeyModal";
import { useRouter } from "next/navigation";

const ManageUserWallets = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const router=useRouter()

  const closeModal = () => {
    setActiveModal(null);
  };
  const showModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  return (
    <div className={styles.manage_wallet_container}>
      <div className={styles.manageWallets__header}>
        <div className={styles.manageWallets__headerBtn}>
          <IoIosArrowBack style={{ color: "white" }} />
          {/* <Link href={"/"} > */}
            <p className={styles.manageWallets__backbtn} onClick={()=>router.back()} >Back</p>
          {/* </Link> */}
        </div>
      </div>

      <div className={styles.manageWallets__container}>
        <WalletSidebar showModal={showModal} setActiveModal={setActiveModal} />
        <div className={styles.manageWallets__containerRight_container}>
          <div className={styles.manageWallets__containerRight}>
            <TicketWalletDetail setActiveModal={setActiveModal} />
            <TicketWalletDeposite />
          </div>
          <MyOtherWallets setActiveModal={setActiveModal} />
        </div>
      </div>
      
      {activeModal === "linkWallet" && (
        <ImportAccountModal onClose={closeModal} />
      )}
      {activeModal === "logout" && <LogoutModal onClose={closeModal} />}
      {activeModal === "otpVerify" && (
        <WalletOTPVerificationModal onClose={closeModal} />
      )}
      {activeModal === "settings" && <PrivateKeyModal onClose={closeModal} />}
    </div>
  );
};
export default ManageUserWallets;
