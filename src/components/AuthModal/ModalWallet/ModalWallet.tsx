import React, { useState } from "react";
import styles from "./modalwallet.module.scss";
import RegisterModal from "../Register/Register";
import SignInModal from "../Login/Login";
import OTPVerificationModal from "../OtpVerification/OtpVerfication";
import ForgotPasswordModal from "../ForgetPassword/ForgetPassword";
import ResetPasswordModal from "../ResetPassword/ResetPasswordModal";

// Define a union type for modal types
type ModalType = "register" | "signIn" | "otpVerification" | "forgotPassword" | "resetPassword" | null;

// Define the props for ModalWallet
interface ModalWalletProps {
  onClose: () => void; // Function to handle modal close
}

const ModalWallet: React.FC<ModalWalletProps> = ({ onClose }) => {
  const [modalType, setModalType] = useState<ModalType>("signIn");

  const closeModal = () => {
    setModalType(null);
    onClose();
  };

  const openSignInModal = () => {
    setModalType("signIn");
  };

  const openRegisterModal = () => {
    setModalType("register");
  };

  const openForgotPasswordModal = () => {
    setModalType("forgotPassword");
  };

  // const openOtpVerifyModal = () => {
  //   setModalType("otpVerification");
  // };

  const openResetPasswordModal = () => {
    setModalType("resetPassword");
  };

  const renderModal = () => {
    switch (modalType) {
      case "register":
        return (
          <RegisterModal
            onClose={closeModal}
            openSignInModal={openSignInModal}
            // openOtpVerifyModal={openOtpVerifyModal}
          />
        );
      case "signIn":
        return (
          <SignInModal
            onClose={closeModal}
            openRegisterModal={openRegisterModal}
            openForgotPasswordModal={openForgotPasswordModal}
          />
        );
      case "otpVerification":
        return <OTPVerificationModal onClose={closeModal} />;
      case "forgotPassword":
        return (
          <ForgotPasswordModal
            onClose={closeModal}
            openResetPasswordModal={openResetPasswordModal}
          />
        );
      case "resetPassword":
        return <ResetPasswordModal onClose={closeModal} />;
      default:
        return null;
    }
  };

  return <div className={styles.modalWallet}>{renderModal()}</div>;
};

export default ModalWallet;
