"use client";

import { useState } from "react";
import styles from "./copywalletaddress.module.scss";
import { IoCopy } from "react-icons/io5";
import { useAppContext } from "@/app/Context/AuthContext";

// interface DashboardProps {
//   userDetails: any | null;
// }

const CopyWalletAddress= () => {
  const [isCopied, setIsCopied] = useState(false);
  const { userData,wallet } = useAppContext();
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
          {/* <span>{userData?.userName}</span> */}
          <span>{wallet?.address}</span>
          {
            <IoCopy
              onClick={() => handleCopyClick(userData?.userName)}
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
