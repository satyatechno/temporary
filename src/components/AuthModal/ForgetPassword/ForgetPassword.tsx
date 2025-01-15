import React, { useEffect, useState } from "react";
import styles from "./forgetpassword.module.scss";
import axios from "axios";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import config from "../../../../config";

interface ForgotPasswordModalProps {
  openResetPasswordModal: () => void;
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  openResetPasswordModal,
  onClose,
}) => {
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [isOtpReceived, setIsOtpReceived] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(30);
  const [isResetEnabled, setIsResetEnabled] = useState<boolean>(false);

  useEffect(() => {
    let count: NodeJS.Timeout | undefined;
    if (isOtpReceived && timer > 0) {
      count = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(count);
            setIsResetEnabled(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(count);
  }, [timer, isOtpReceived]);

  const handleSendOtp = async (event: React.MouseEvent<HTMLParagraphElement>) => {
    event.preventDefault();

    const formData = {
      email: email,
      type: "forgotPassword",
    };

    try {
      setIsOtpSent(true);
      const response = await axios.post(
        `${config.baseURL}user/sendOtp?isNew=${false}`,
        formData
      );
      console.log("OTP sent successfully:", response?.data);
    } catch (error) {
      console.error("Error sending OTP:", error);
    } finally {
      setIsOtpSent(false);
      setIsOtpReceived(true);
    }
  };

  const handleVerifyOtp = async () => {
    // event.preventDefault();
    const formData = {
      email: email,
      otp: otp,
      type: "forgotPassword",
    };

    try {
      const response = await axios.post(
        `${config.baseURL}user/verifyOtp`,
        formData
      );
      if (response?.data?.statusCode === "10000") {
        openResetPasswordModal();
      }
      console.log("OTP verified successfully:", response?.data);
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className={styles.forgotPasswordModal}>
    <div className={styles.forgotPasswordModal__content}>
        <div className={styles.forgotPasswordModal__contentClose}>
            <p>Forgot Password</p>
            <span onClick={onClose}>&times;</span>
        </div>
        <hr />
        <div className={styles.forgotPasswordModal__contentEmail}>
            <p>Forgot your password? Reset it here!</p>
            <div className={styles.forgotPasswordModal__contentEmailForm}>
                <input placeholder="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
                <div>
                    <input placeholder="OTP" value={otp}  type="text" onChange={(e) => setOtp(e.target.value)} />
                    <p onClick={handleSendOtp}>Send OTP</p>
                </div>
            </div>
        </div>
        <h3>Didn’t receive the code? <span onClick={handleSendOtp}>RESEND</span></h3>
        <div className={styles.forgotPasswordModal__contentVerify}>
            <Button value="Verify OTP" className={styles.forgotPasswordModal__contentVerifyBtn} onClick={handleVerifyOtp} />
        </div>
    </div>
</div>
  );
};

export default ForgotPasswordModal;
