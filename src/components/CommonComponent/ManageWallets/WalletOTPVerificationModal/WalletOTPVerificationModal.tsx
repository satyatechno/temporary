import React, { useState } from 'react';
import styles from "./walletoptverificationmodal.module.scss";
import Button from '../../AnimatedButton/AnimatedButton';


const WalletOTPVerificationModal = ({ onClose, handleSubmit }:any) => {

    // const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
{
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     // Form data to send via API
    //     const formData = {
    //         email: email,
    //         otp: otp,
    //         type: type
    //     };

    //     try {
    //         // Make API call using Axios (replace with your actual API endpoint)
    //         const response = await axios.post(`${config.apiURL}user/verifyOtp`, formData);
    //         // setEmail("")
    //         // setOtp("")
    //         if (response?.data?.statusCode === "10000") {
    //             console.log("close modal")
    //             onClose();
    //         }
    //         console.log('Signup successful:', response?.data);
    //         // Handle success (e.g., redirect user or show a success message)
    //     } catch (error) {
    //         console.error('Error signing up:', error);
    //         // Handle error (show error message to user)
    //     }
    // };
}
  return (
    <div className={styles.otpVerificationModal}>
        <div className={styles.otpVerificationModal__content}>
            <div className={styles.otpVerificationModal__contentClose}>
                <p>OTP Verification</p>
                <span onClick={onClose}>&times;</span>
            </div>
            <hr />
            <div className={styles.otpVerificationModal__contentEmail}>
                <p>Enter OTP sent on your mail address</p>
                <div className={styles.otpVerificationModal__contentEmailForm}>
                    {/* <input placeholder="email@zeltatech.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
                    <input placeholder="OTP" type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
                </div>
            </div>
            <h3>Didn’t receive the code? <span>RESEND</span></h3>
            <div className={styles.otpVerificationModal__contentSave}>
                <Button value="Verify OTP" className={styles.otpVerificationModal__contentSaveBtn} onClick={handleSubmit} />
            </div>
        </div>
    </div>
  );
};

export default WalletOTPVerificationModal;