"use client";
// import React, { useState } from 'react';
import QRCode from "react-qr-code";
import Button from "../../AnimatedButton/AnimatedButton";
import styles from "./walletdeposite.module.scss";
import { useAppContext } from "@/app/Context/AuthContext";
import Image from "next/image";
import CopyAddress from "../../CopyAddress/CopyAddress";

const WalletDeposite = ({ onClose, handleSubmit }: any) => {
  const { wallet }: any = useAppContext();

  console.log("address", wallet?.address);

  return (
    <div className={styles.otpVerificationModal}>
      <div className={styles.otpVerificationModal__content}>
        <div className={styles.otpVerificationModal__contentClose}>
          <p>Wallet</p>
          <span onClick={onClose}>&times;</span>
        </div>
        <hr />
        <div className={styles.otpVerificationModal__contentEmail}>
          <div>
            <p>Wallet Address</p>
            <p style={{display: 'flex'}}>
              <Image
                src="https://assets.gamingarcade.io/AssetspolygonChainIcon.webp"
                width={15}
                height={15}
                alt="exp-icon"
                style={{ margin: "0 5px" }}
              />
              {wallet?.address
                ? `${wallet?.address.substring(0, 10)}...`
                : "N/A"}
                <CopyAddress
              textToCopy={wallet?.address}
              className={styles.settingIcon}
            />
            </p>
            
          </div>
          <div>
            <p>
              Balance
              <Image
                src="https://assets.gamingarcade.io/Assets/exp-icon.webp"
                width={12}
                height={12}
                alt="exp-icon"
                style={{ margin: "0 5px" }}
              />
            </p>
            <p>
              0
              <Image
                src="https://assets.gamingarcade.io/Assets/matic.webp"
                width={15}
                height={15}
                alt="exp-icon"
                style={{ margin: "0 5px" }}
              />
            </p>
          </div>
        </div>

        <h3>
          <p>
            Copy wallet address or scan the QR code with any web3 wallet and
            send MATIC to this address to deposit in your wallet. Make sure to
            use Polygon Network.
          </p>
        </h3>
        <hr className={styles.custom_line} />
        <div className={styles.qr_code}>
          <QRCode
            size={50}
            style={{ height: "auto", maxWidth: "35%", width: "35%" }}
            value={wallet?.address || ""}
            viewBox={`0 0 256 256`}
          />
        </div>
        <div className={styles.otpVerificationModal__contentSave}>
          <Button
            value="Refresh"
            className={styles.otpVerificationModal__contentSaveBtn}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default WalletDeposite;
