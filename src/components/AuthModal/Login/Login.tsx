import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import config from "../../../../config";
import Modal from "../Modal/Modal";
import styles from "./login.module.scss";
import { FaApple } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const Login = ({ setIsModalOpen }: any) => {
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

  const [isLoggedInBefore, setIsLoggedInBefore] = useState(false);
  const [userForgetPassword,serUserForgetPassword]=useState(false);

  const handleLoggedInUser = () => setIsLoggedInBefore(true);
  const handleNewUser = () => setIsLoggedInBefore(false);

  return (
    <main className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <div className={styles.upper_section}>
          <h2 className={styles.header_h2}>Sign Up</h2>
          <button
            className={styles.modal_close_btn}
            onClick={() => setIsModalOpen(false)}
          >
            x
          </button>
        </div>
        <hr />
        <p className={styles.modal_msg}>
          {` For a more personalized experience,${" "} ${
            !isLoggedInBefore ? "sign up" : "sing in"
          } with your email.`}
        </p>
        <div className={styles.input_sections_container}>
          <input type="email" placeholder="Email" className={styles.input} />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          {!isLoggedInBefore && (
            <input
              type="password"
              placeholder="Confirm Password"
              className={styles.input}
            />
          )}
          {isLoggedInBefore && (
            <p
              onClick={()=>{serUserForgetPassword(true); setIsModalOpen(false)}}
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
          )}
          {!isLoggedInBefore ? (
            <Button
              value="Sign Up"
              onClick={() => alert("Button Clicked!")}
              className={styles.registerModal__contentConnectBtn}
              disabled={false}
            />
          ) : (
            <Button
              value="Sign In"
              onClick={() => alert("Button Clicked!")}
              className={styles.registerModal__contentConnectBtn}
              disabled={false}
            />
          )}
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
        {!isLoggedInBefore ? (
          <p className={styles.account_line}>
            Already have an account?{" "}
            <span
              // onClick={openLoginModal}
              style={{
                color: "#4f7dff",
                cursor: "pointer",
                textAlign: "center",
                marginLeft: "10px",
              }}
              onClick={handleLoggedInUser}
            >
              {" "}
              Sign In
            </span>
          </p>
        ) : (
          <p className={styles.account_line}>
            New to Gaming Arcade?{" "}
            <span
              // onClick={openLoginModal}
              style={{
                color: "#4f7dff",
                cursor: "pointer",
                textAlign: "center",
                marginLeft: "10px",
              }}
              onClick={handleNewUser}
            >
              {" "}
              Join Now
            </span>
          </p>
        )}
      </div>
      {userForgetPassword && <ForgetPassword serUserForgetPassword={serUserForgetPassword}/>}

    </main>
  );
};

export default Login;

const ForgetPassword = ({serUserForgetPassword}:any) => {
  return (
    <main>
      <div>
        <div className={styles.upper_section}>
          <h2 className={styles.header_h2}>Forget Password?</h2>
          <button className={styles.modal_close_btn}  onClick={() => serUserForgetPassword(false)}>
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
      </div>
    </main>
  );
};
