"use client";

import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./register.module.scss";
import { FaApple } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import config from "../../../../config";
import axios from "axios";
type ModalType = "register" | "login" | "forgotPassword" | null;

const Register: React.FC = ({ setIsModalOpen }: any) => {
  const [currentModal, setCurrentModal] = useState<ModalType>("register");  

  // user-register state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
});


  //forget-passwords states 
  const [otp, setOtp] = useState('');

  const validate = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      password: '',
      confirmPassword: '',
    };

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
};


// const handleSubmit = async (event:any) => {
//     event.preventDefault();
//     if (validate) {

//         const formData = {
//             email: email,
//             type: "SignUp",
//             // password: password,
//         };

//         try {
//             // Make API call using Axios (replace with your actual API endpoint)
//             const response = await axios.post(`${config.baseURL}user/sendOtp?isNew=${true}`, formData);
//             localStorage.setItem("registerToken", response?.data?.token)
//             if (response?.data?.token != "") {
//                 setOpenOtpModal(true);
//             }
           
//             console.log('Signup successful:', response.data);
//         } catch (error) {
//             console.error('Error signing up:', error);
//         }
//     }
// };


  const openLoginModal = () => setCurrentModal("login");
  const openRegisterModal = () => setCurrentModal("register");
  const openForgotPasswordModal = () => setCurrentModal("forgotPassword");
  const closeModal = () => setIsModalOpen(false);

  const handleGoogleAuth = () => {
    window.location.replace(
      `${config.baseURL}user/auth/google/device?device=web`
    );
  };

  const handleAppleAuth = async () => {
    window.location.replace(
      `${config.baseURL}user/auth/apple/device?device=web`
    );
  };

  return (
    <div>
      {/* Register Modal */}
      <Modal isOpen={currentModal === "register"} onClose={closeModal}>
        <div className={styles.upper_section}>
          <h2 className={styles.header_h2}>Sign Up</h2>
          <button className={styles.modal_close_btn} onClick={closeModal}>
            x
          </button>
        </div>
        <hr />
        <p className={styles.modal_msg}>
          For a more personalized experience, sign up with your email.
        </p>
        <div className={styles.input_sections_container}>
          <input type="email" placeholder="Email" className={styles.input} style={{ border: errors.email ? "0.5px solid red" : "0.5px solid white" }}  />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            style={{ border: errors.password ? "0.5px solid red" : "0.5px solid white" }}
          />
           {errors.password && <span className={styles.error}>{errors.password}</span>}
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.input}
            style={{ border: errors.confirmPassword ? "0.5px solid red" : "0.5px solid white" }}

          />
          {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
          <Button
            value="Sign Up"
            // onClick={() => handleSubmit}
            
            className={styles.registerModal__contentConnectBtn}
            disabled={false}
          />
        </div>

        <div className={styles.registerModal__contentOption}>
          <div />
          <p>or</p>
          <div />
        </div>
        <div className={styles.registerModal__contentSocials}>
          <div>
            <img
              src="https://assets.gamingarcade.io/Assets/googleIcon.webp"
              alt=""
              onClick={handleGoogleAuth}
            />
          </div>
          <div>
            <FaApple onClick={handleAppleAuth} style={{ color: "white" }} />
          </div>
          <div>
            <FaXTwitter />
          </div>
        </div>
        <p className={styles.account_line}>
          Already have an account?{" "}
          <span
            onClick={openLoginModal}
            style={{
              color: "#4f7dff",
              cursor: "pointer",
              textAlign: "center",
              marginLeft: "10px",
            }}
          >
            {" "}
            Sign In
          </span>
        </p>
      </Modal>

      {/* Login Modal */}
      <Modal isOpen={currentModal === "login"} onClose={closeModal}>
        <div className={styles.upper_section}>
          <h2 className={styles.header_h2}>Sign In</h2>
          <button className={styles.modal_close_btn} onClick={closeModal}>
            x
          </button>
        </div>
        <hr />
        <p className={styles.modal_msg}>
          For a more personalized experience, sign in with your email.
        </p>
        <div className={styles.input_sections_container}>
          <input type="email" placeholder="Email" className={styles.input}  style={{ border: errors.email ? "0.5px solid red" : "0.5px solid white" }} />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            style={{ border: errors.password ? "0.5px solid red" : "0.5px solid white" }}
          />
           {errors.password && <span className={styles.error}>{errors.password}</span>}
          <p
            onClick={openForgotPasswordModal}
            style={{
              color: "#ffff",
              cursor: "pointer",
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            Forgot Password?{" "}
          </p>
          <Button
            value="Sign In"
            onClick={() => alert("Button Clicked!")}
            className={styles.registerModal__contentConnectBtn}
            disabled={false}
          />
        </div>
        <div className={styles.registerModal__contentOption}>
          <div />
          <p>or</p>
          <div />
        </div>
        <div className={styles.registerModal__contentSocials}>
          <div>
            <img
              src="https://assets.gamingarcade.io/Assets/googleIcon.webp"
              alt=""
              onClick={handleGoogleAuth}
            />
          </div>
          <div>
            <FaApple onClick={handleAppleAuth} style={{ color: "white" }} />
          </div>
          <div>
            <FaXTwitter />
          </div>
        </div>
        <p className={styles.account_line}>
          New to Gaming Arcade?{" "}
          <span
            onClick={openRegisterModal}
            style={{
              color: "#4f7dff",
              cursor: "pointer",
              textAlign: "center",
              marginLeft: "10px",
            }}
          >
            {" "}
            Join Now
          </span>
        </p>
      </Modal>

      {/* Forgot Password Modal */}
      <Modal isOpen={currentModal === "forgotPassword"} onClose={closeModal}>
        <div className={styles.upper_section}>
          <h2 className={styles.header_h2}>Forget Password?</h2>
          <button className={styles.modal_close_btn} onClick={closeModal}>
            x
          </button>
        </div>
        <hr />
        <p
          style={{
            color: "#ffff",
            cursor: "pointer",
            display: "flex",
            width: "100%",
          }}
        >
          Forgot your password? Reset it here!
        </p>
        <div className={styles.input_sections_container}>
          <input type="email" placeholder="Email" className={styles.input} />
          <div style={{ display: "flex", width: "100%", gap: "1rem" }}>
            <input
              type="text"
              placeholder="OTP"
              className={styles.input}
              style={{ width: "94%" }}
            />
            <p style={{ whiteSpace: "nowrap", color: "#cdcdcd" }}>Send OTP</p>
          </div>
        </div>
        <p className={styles.account_line}>
          Didn’t receive the code? Resend Again in <strong> 30s</strong>
        </p>
        <Button
          value="Verify OTP"
          onClick={() => alert("Button Clicked!")}
          className={styles.registerModal__contentConnectBtn}
          disabled={false}
        />
      </Modal>
    </div>
  );
};

export default Register;
