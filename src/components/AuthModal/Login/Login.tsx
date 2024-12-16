"use client";

import React, { useState } from "react";
import styles from "./login.module.scss";
import { FaApple } from "react-icons/fa6";

import axios from "axios";
import { deviceApi } from "@/services/GameServices";
import config from "../../../../config";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import Image from "next/image";
import Cookies from "js-cookie";

interface SignInModalProps {
  openRegisterModal: () => void;
  onClose: () => void;
  openForgotPasswordModal: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({
  openRegisterModal,
  onClose,
  openForgotPasswordModal,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  console.log("credential",email,password)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();

    // Form data to send via API
    const formData = {
      email,
      password,
      fcm_token: Cookies.get("fcmToken"),
    };

    try {
      setLoading(true);
      const response = await axios.post(
        `${config.baseURL}user/signIn`,
        formData
      );    
      Cookies.set("userToken", response?.data?.data?.token || "", {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("user", JSON.stringify(response?.data?.data?.user) || "", {
        secure: true,
        sameSite: "Strict",
      });

      await deviceApi({
        fcm_token: Cookies.get("fcmToken") || "",
        deviceType: "web",
      });

      if (response?.data?.statusCode === "10000") {
        setLoading(false);
        onClose();
      }
      setEmail("");
      setPassword("");
    } catch (error: any) {
      console.error("Error signing in:", error);
      setError(error?.response?.data?.message || "An error occurred");
      setLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    window.location.replace(
      `${config.baseURL}user/auth/google/device?device=web`
    );
  };

  const handleAppleAuth = () => {
    window.location.replace(
      `${config.baseURL}user/auth/apple/device?device=web`
    );
  };

  return (
    <div className={styles.signInModal}>
      <div className={styles.signInModal__content}>
        <div className={styles.signInModal__contentClose}>
          <p>SignIn </p>
          <span onClick={onClose}>&times;</span>
        </div>
        <hr />
        <div className={styles.signInModal__contentEmail}>
          <p>For a more personalised experience, sign up with your Email.</p>
          <div className={styles.signInModal__contentEmailForm}>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <span className={styles.error}>{error}</span>}
            <p onClick={openForgotPasswordModal}>Forgot Password?</p>
            <div className={styles.signInModal__contentEmailFormButton}>
              <Button
                value="Sign In"
                className={styles.signInModal__contentConnectBtn}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
        <div className={styles.signInModal__contentOption}>
          <div />
          <p>or</p>
          <div />
        </div>
        <div className={styles.signInModal__contentSocials}>
          <div>
            <Image
              src={`${config?.imageDomain}/Assets/googleIcon.webp`}
              alt="googel-icon"
              onClick={handleGoogleAuth}
              width={15}
              height={15}
            />
          </div>
          <div>
            <FaApple onClick={handleAppleAuth} style={{ color: "white" }} />
          </div>
        </div>
        <h3>
          New to GamingArcade? <span onClick={openRegisterModal}>Join Now</span>
        </h3>
      </div>
    </div>
  );
};

export default SignInModal;
