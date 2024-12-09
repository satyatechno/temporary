"use client";

import { useState } from "react";
import { IoCopy } from "react-icons/io5";

const CopyAddress = ({ textToCopy, className }: any) => {
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
    <div style={{ display: "flex" ,width:"100%",flexDirection:"column"}}>
      <IoCopy
        onClick={() => handleCopyClick(textToCopy)}
        style={{ cursor: "pointer" }}
        className={className}
      />
      {isCopied && <p style={{ color: "white",fontSize:"10px",margin:'10px' }}>Copied !</p>}
    </div>
  );
};

export default CopyAddress;
