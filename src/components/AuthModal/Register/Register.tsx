"use client";

import React, { useState } from "react";
import styles from "./register.module.scss";
import { FaApple, FaEye } from "react-icons/fa6";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import config from "../../../../config";
import axios from "axios";
import { deviceApi } from "@/services/GameServices";
import Image from "next/image";
import Cookies from 'js-cookie'; 
interface RegisterModalProps {
  openSignInModal: () => void;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  openSignInModal,
  onClose,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [openOtpModal, setOpenOtpModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [wrongOtp, setWrongOtp] = useState<string>("");


  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =useState<boolean>(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validate = (): boolean => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
      isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (validate()) {
      const formData = {
        email,
        type: "SignUp",
      };

      try {
        setLoading(true);
        const response = await axios.post(
          `${config.baseURL}user/sendOtp?isNew=true`,
          formData
        );
        if (response?.data?.statusCode === "10000") {
          setOpenOtpModal(true);
        }
      } catch (error: any) {
        setLoading(false);

        if (error.response?.data?.statusCode === '10001') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "User Already Exists",
          }));
        } else {
          console.error("Error signing up:", error);
        }
      } finally {
        setLoading(false);
      }
    }
  };
  // saving data in local-storage
  // const verifyOtp = async (event: React.FormEvent) => {
  //   event.preventDefault();

  //   const formData = {
  //     email,
  //     otp,
  //     type: "SignUp",
  //   };

  //   try {
  //     setLoading(true);
  //     const response = await axios.post(
  //       `${config.baseURL}user/verifyOtp`,
  //       formData
  //     );

  //     if (response?.data?.statusCode === "10000") {
  //       const formDataRegister = {
  //         email,
  //         password,
  //       };
  //       const res = await axios.post(
  //         `${config.baseURL}user/signUp`,
  //         formDataRegister
  //       );
  //       localStorage.setItem("email", res?.data?.data?.user?.email);
  //       localStorage.setItem("user", JSON.stringify(res?.data?.data?.user));
  //       localStorage.setItem("userToken", res?.data?.data?.token);
  //       await deviceApi({
  //         fcm_token: localStorage.getItem("fcmToken"),
  //         deviceType: "web",
  //       });
  //       onClose();
  //     }
  //   } catch (error: any) {
  //     console.error("Error verifying OTP:", error);

  //     if (error.response?.data?.statusCode === 10001) {
  //       setWrongOtp("Incorrect OTP. Please try again.");
  //       setTimeout(() => setWrongOtp(""), 3000);
  //     } else {
  //       alert("An error occurred. Please try again.");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  // saving data in cookies

const verifyOtp = async (event: React.FormEvent) => {
  event.preventDefault();

  const formData = {
    email,
    otp,
    type: "SignUp",
  };

  try {
    setLoading(true);
    const response = await axios.post(
      `${config.baseURL}user/verifyOtp`,
      formData
    );

    if (response?.data?.statusCode === "10000") {
      const formDataRegister = {
        email,
        password,
      };
      const res = await axios.post(
        `${config.baseURL}user/signUp`,
        formDataRegister
      );

      // Cookies.set('email', res?.data?.data?.user?.email, { expires: 7, secure: true, sameSite: 'Strict' });
      // Cookies.set('user', JSON.stringify(res?.data?.data?.user), { expires: 7, secure: true, sameSite: 'Strict' });
      Cookies.set('userToken', res?.data?.data?.token, { expires: 7, secure: true, sameSite: 'Strict' });

      // Device API call using the token from cookies
      await deviceApi({
        fcm_token: Cookies.get('fcmToken'), 
        deviceType: 'web',
      });

      onClose(); 
    }
  } catch (error: any) {
    console.error("Error verifying OTP:", error);

    if (error.response?.data?.statusCode === 10001) {
      setWrongOtp("Incorrect OTP. Please try again.");
      setTimeout(() => setWrongOtp(""), 3000);
    } else {
      alert("An error occurred. Please try again.");
    }
  } finally {
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
    <>
      {openOtpModal ? (
        <div className={styles.otpVerificationModal}>
          <div className={styles.otpVerificationModal__content}>
            <div className={styles.otpVerificationModal__contentClose}>
              <p>OTP Verification</p>
              <span onClick={onClose}>&times;</span>
            </div>
            <hr />
            <div className={styles.otpVerificationModal__contentEmail}>
              <p>Enter OTP sent to your email address</p>
              <div className={styles.otpVerificationModal__contentEmailForm}>
                <input
                  placeholder="email@zeltatech.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  placeholder="OTP"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <span className={styles.error}>{wrongOtp}</span>
              </div>
            </div>
            <h3>
              Didn’t receive the code? <span>RESEND</span>
            </h3>
            <div className={styles.otpVerificationModal__contentSave}>
              <Button
                value={loading ? "Loading..." : "Verify OTP"}
                className={styles.otpVerificationModal__contentSaveBtn}
                onClick={verifyOtp}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.registerModal}>
          <div className={styles.registerModal__content}>
            <div className={styles.registerModal__contentClose}>
              <p>SignUp</p>
              <span onClick={onClose}>&times;</span>
            </div>
            <hr />
            <div className={styles.registerModal__contentEmail}>
              <p>
                For a more personalised experience, sign up with your Email.
              </p>
              <div className={styles.registerModal__contentEmailForm}>
                <input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    border: errors.email
                      ? "0.5px solid red"
                      : "0.5px solid white",
                  }}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
                  <div
                  className={styles.passwordContainer}
                  style={{
                    border: errors.password
                      ? "0.5px solid red"
                      : "0.5px solid white",
                  }}
                >
                  <input
                    placeholder="Password"
                    className={styles.inputeye}
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FaEye
                    className={styles.eyeIcon}
                    onClick={handlePasswordVisibility}
                  />
                </div>
                {errors.password && (
                  <span className={styles.error}>{errors.password}</span>
                )}
               <div
                  className={styles.passwordContainer}
                  style={{
                    border: errors.confirmPassword
                      ? "0.5px solid red"
                      : "0.5px solid white",
                  }}
                >
                  <input
                    placeholder="Confirm Password"
                    className={styles.inputeye}
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <FaEye
                    className={styles.confirmEyeIcon}
                    onClick={handleConfirmPasswordVisibility}
                  />
                </div>
                {errors.confirmPassword && (
                  <span className={styles.error}>{errors.confirmPassword}</span>
                )}
                <div className={styles.registerModal__contentEmailFormButton}>
                  <Button
                    value="Sign Up"
                    className={styles.registerModal__contentConnectBtn}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
            <div className={styles.registerModal__contentOption}>
              <div />
              <p>or</p>
              <div />
            </div>
            <div className={styles.registerModal__contentSocials}>
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
              Already have an account?{" "}
              <span onClick={openSignInModal}>Sign In</span>
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterModal;
