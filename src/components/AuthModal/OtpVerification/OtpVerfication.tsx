"use client";

import React, { useState } from "react";
import styles from "./otpverfication.module.scss";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";

interface OTPVerificationModalProps {
  onClose: () => void;
  handleSubmit: () => void;
}

const OTPVerificationModal: React.FC<OTPVerificationModalProps> = ({ onClose, handleSubmit }) => {
  const [otp, setOtp] = useState<string>("");

  return (
    <div className={styles.otpVerificationModal}>
      <div className={styles.otpVerificationModal__content}>
        <div className={styles.otpVerificationModal__contentClose}>
          <p>OTP Verification</p>
          <span onClick={onClose}>&times;</span>
        </div>
        <hr />
        <div className={styles.otpVerificationModal__contentEmail}>
          <p>Enter OTP sent to your mail address</p>
          <div className={styles.otpVerificationModal__contentEmailForm}>
            <input
              placeholder="OTP"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        </div>
        <h3>
          Didn’t receive the code? <span>RESEND</span>
        </h3>
        <div className={styles.otpVerificationModal__contentSave}>
          <Button
            value="Verify OTP"
            className={styles.otpVerificationModal__contentSaveBtn}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationModal;
