"use client";

import React, { useState } from "react";
import styles from "./privatekeymodal.module.scss";
import { useAppContext } from "@/app/Context/AuthContext";
import Button from "../../AnimatedButton/AnimatedButton";
import { MdVisibilityOff } from "react-icons/md";
import CopyAddress from "../../CopyAddress/CopyAddress";
import Image from "next/image";
const PrivateKeyModal = ({ onClose}: any) => {
  const [otp, setOtp] = useState("");
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [error, setError] = useState(false);
  const { wallet }:any = useAppContext();

  const handleNext = () => {
    if (!otp) {
      setError(true);
    } else {
      setShowPrivateKey(true);
    }
  };


  return (
    <div className={styles.privateKeyModal}>
      <div className={styles.privateKeyModalContainer}>
        <div className={styles.privateKeyModal__content}>
          <div className={styles.privateKeyModal__header}>
            <div>
              <Image
                src="https://assets.gamingarcade.io//loading-images/wallet2.webp"
                alt=""
                width={30}
                height={20}
              />
              <h2>Show Private Key</h2>
            </div>
            <span onClick={onClose}>&times;</span>
          </div>

          <div className={styles.privateKeyModal__warning}>
            <div className={styles.privateKeyModal__warningImage}>
              <MdVisibilityOff fontSize="medium" style={{ color: "#FF0000" }} />
            </div>

            <div className={styles.privateKeyModal__warningText}>
              <p>
                Never disclose this key. Anyone with your privatekey can fully
                control your account, including transferring away any of your
                funds.
              </p>
            </div>
          </div>

          {showPrivateKey ? (
            <div className={styles.privateKeyModal__showPrivateKey}>
              <div>
                <h2>Your private key</h2>
                <p>
                  Copy to clipboard
                  <span>
                    <CopyAddress
                      textToCopy={wallet?.privatekey}
                      className={styles.settingIcon}
                    />
                  </span>
                </p>
              </div>
              <textarea value={wallet?.privatekey} />
            </div>
          ) : (
            <div className={styles.privateKeyModal__form}>
              <p>Enter OTP</p>
              <input
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {error && (
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginLeft: "10px",
                    fontWeight: "400",
                    marginTop: "5px",
                  }}
                >
                  Enter a valid OTP
                </p>
              )}
            </div>
          )}

          <div className={styles.privateKeyModal__importBtn}>
            {/* {!otp ? (
                        <>
                            <Button value="Next" className={styles.privateKeyModal__importButton} disabled/>
                        </>
                    ) : (
                    )} */}
            <Button
              value={showPrivateKey ? "Done" : "Next"}
              className={styles.privateKeyModal__importButton}
              onClick={showPrivateKey ? onClose : handleNext}
            />

            {/* <Button value={showPrivateKey ? "Done" : "Next"} className={styles.privateKeyModal__importButton} onClick={showPrivateKey ? onClose : handleNext} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateKeyModal;

{
  /* <CopyToClipboard text={wallet?.privatekey}>
    <ContentCopyIcon fontSize="small" style={{ cursor: "pointer" }} />
</CopyToClipboard> */
}
