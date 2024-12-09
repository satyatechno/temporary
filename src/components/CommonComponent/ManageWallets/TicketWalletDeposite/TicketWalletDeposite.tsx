"use client";

import { useState } from "react";
import styles from "./ticketwalletdeposite.module.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../../AnimatedButton/AnimatedButton";
import axios from "axios";
import config from "../../../../../config";
import QRCode from "react-qr-code";
import { useAppContext } from "@/app/Context/AuthContext";


const TicketWalletDeposite = () => {
  const [address, setAddress] = useState(false);
  const [gasLoading, setGasLoading] = useState(false);
  const [gas, setGas] = useState("");
  const [amountText, setAmountText] = useState("");
  const [insufficientBalanceText, setInsufficientBalanceText] = useState("");
  const [isWithdraw, setIsWithDraw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");



  const { wallet }:any = useAppContext();

  const onAmountEnter = (event: any) => {
    setAmountText(event.target.value);
    console.log(event.target.value);
    // console.log(12345)
    handleGasEstimate(event.target.value);
    // if (amountText) {
    //   console.log(event.target.value)
    //   handleGasEstimate(1);
    // } else {
    //   setGas('');
    // }
  };
  
  const handleGasEstimate = async (amountValue: any) => {
    // const isValid = validate();
    // if (isValid) {
    try {
      setGasLoading(true);
      const formData = {
        to: address,
        amount: amountValue,
        address: wallet?.address,
      };
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      };
      const res = await axios.post(
        `${config.baseURL}user/wallet/estimateGasFees/withdraw`,
        formData,
        { headers }
      );
      // console.log(res);
      setGas(res.data?.data);
    } catch (error) {
      console.error("Error estimating gas", error);
    } finally {
      setGasLoading(false);
    }
    // }
  };

  const handleWithdraw = async () => {
    setIsWithDraw(true);
    try {
      setLoading(true);
      const formData = {
        amount: amountText,
        to: address,
        address: wallet?.address,
      };
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      };
      const res = await axios.post(
        `${config.baseURL}user/wallet/withdraw`,
        formData,
        { headers }
      );
      console.log("error message", res.data?.message);

      // await getActiveWalletDetails();
      //   await fetchActiveWallet();
      setAddress("");
      setAmountText("");
      setOtp("");
      setIsWithDraw(false);
      console.log("blank");
      //   onClose(true);
    } catch (error) {
      //   console.error("Error during withdrawal", error);
      //   console.log("error message", error?.response?.data?.message);
      setAddress("");
      setAmountText("");
      setOtp("");
      setInsufficientBalanceText(error?.response?.data?.message);
      setIsWithDraw(false);
      setTimeout(() => {
        setInsufficientBalanceText("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    // const isValid = validateOTP();
    // if (isValid) {
    setLoading(true);
    // const formData = {
    //   email: email,
    //   otp : "123456",
    //   type: "Withdraw",
    // };
    try {
      // const headers = {
      //   'Authorization': `Bearer ${localStorage.getItem("userToken")}`
      // };
      // const response = await axios.post(`${config.apiURL}user/verifyOtp`, formData, {headers});
      handleWithdraw();
    } catch (error) {
      setLoading(false);
      console.error("Error verifying OTP", error);
    }
    // }
  };

  return (
    <div className={styles.manageWallets__depositAndWithdraw}>
      <div className={styles.manageWallets__depositSection}>
        <p>Deposit</p>
        <hr />
        <div className={styles.manageWallet__scanner}>
          <div>
            <QRCode
              size={50}
              style={{ height: "auto", maxWidth: "35%", width: "35%" }}
              value={wallet?.address || ""}
              viewBox={`0 0 256 256`}
            />
          </div>
          <p>
            Copy the wallet address or scan the QR code to send MATIC using the
            Polygon Network.
          </p>
        </div>
        <hr />
      </div>

      <div className={styles.manageWallets__border} />

      <div className={styles.manageWallets__withdrawSection}>
        <p>Withdraw</p>
        <hr />
        <div className={styles.manageWallets__withdrawInputSection}>
          <div className={styles.manageWallets__addressInput}>
            <p>Wallet address</p>
            <input
              placeholder="Enter wallet address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <FaLongArrowAltRight fontSize="large" style={{ color: "white" }} />
          <div className={styles.manageWallets__amountInput}>
            <div>
              <p>Amount</p>
              <p>
                Gas fees{" "}
                <span>
                  {gasLoading ? "..." : parseFloat(gas).toFixed(5)}{" "}
                  <img src="" alt="" />
                </span>
              </p>
            </div>
            <input
              placeholder="Enter Amount"
              value={amountText}
              onChange={onAmountEnter}
              type="number"
            />
          </div>
          <FaLongArrowAltRight fontSize="large" style={{ color: "white" }} />
          <div className={styles.manageWallets__withdrawButton}>
            <div>
              <p>Total</p>
              <p>
                {gasLoading ? "..." : parseFloat(+amountText + +gas).toFixed(5)}{" "}
                <span>
                  <img src="" alt="" />
                </span>
              </p>
            </div>
            <div>
              {!address || !amountText ? (
                <Button
                  value="Withdraw"
                  className={styles.widthdrawBtn}
                  disabled
                />
              ) : (
                <>
                  <Button
                    value={isWithdraw ? "Processing..." : "Withdraw"}
                    className={styles.widthdrawBtn}
                    onClick={verifyOtp}
                  />
                </>
              )}
            </div>
          </div>
        </div>
        <div>
          <p
            style={{
              color: "red",
              marginLeft: "5px",
              marginTop: "10px",
            }}
          >
            {insufficientBalanceText}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default TicketWalletDeposite;
