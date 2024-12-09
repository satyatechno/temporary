"use client";

import React, { useState } from "react";
import styles from "./otpverfication.module.scss";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import axios from "axios";
import config from "../../../../config";

interface OTPVerificationModalProps {
  onClose: () => void;
}

const OTPVerificationModal: React.FC<OTPVerificationModalProps> = ({
  onClose,
}) => {
  const [otp, setOtp] = useState<string>("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    console.log("click");

    // event.preventDefault();
    const formData = {
      email: email,
      otp: otp,
    };
    try {
      const response = await axios.post(
        `${config.baseURL}user/verifyOtp`,
        formData
      );
      setEmail("");
      setOtp("");
      if (response?.data?.statusCode === "10000") {
        console.log("close modal");
        onClose();
      }
      console.log("Signup successful:", response?.data);
    } catch (error) {
      console.error("Error signing up:", error);
    }

  };

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
          <button onClick={handleSubmit}>Verify OTP</button>
        </div>
      </div>
    </div>
  );
};


export default OTPVerificationModal;
{/* <Button
            value="Verify OTP"
            className={styles.otpVerificationModal__contentSaveBtn}
            onClick={handleSubmit}
          /> */}