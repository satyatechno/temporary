"use client";

import { useState } from "react";
import styles from "./copywalletaddress.module.scss";
import { IoCopy } from "react-icons/io5";


interface DashboardProps {
    userDetails: any | null;
  }

const CopyWalletAddress:React.FC<DashboardProps> = ({userDetails}) => {

  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    // Hide the "Copied to Wallet address!" message after 3 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <>
      <div
        className={`${styles.sunWrap} ${styles.wallet}`}
        style={{ marginBottom: "35px" }}
      >
        <span className={styles.sunChild}>
          <span>priyeshsoni_297</span>
          {
            <IoCopy
              onClick={() => handleCopyClick("priyeshsoni_297")}
              style={{ cursor: "pointer", color: "#fbc400" }}
            />
          }
        </span>
      </div>
      <div className={styles.copiedRow}>
        {isCopied ? <p className="text-warning">Wallet Address Copied!</p> : ""}
      </div>
    </>
  );
};

export default CopyWalletAddress;
