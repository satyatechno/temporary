import React, { useState } from 'react';
import styles from "./importaccountmodal.module.scss";
import axios from 'axios';
import config from '../../../../../config';
import Button from '../../AnimatedButton/AnimatedButton';
import Cookies from 'js-cookie';
import Image from 'next/image';

const ImportAccountModal = ({ onClose }:any) => {

  const [privateKey, setPrivateKey] = useState("");
  const [name, setName] = useState("");

  const [errors, setErrors] = useState({
    privateKey: '',
    name: '',
  });

  const validate = () => {
    let isValid = true;
    const newErrors = {
      privateKey: '',
      name: '',
    };

    if (!privateKey) {
      newErrors.privateKey = 'Private Key is required';
      isValid = false;
    }

    if (!name) {
      newErrors.name = 'Wallet name is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
};

  const handleSubmit = async () => {
    // event.preventDefault();
    // Form data to send via API
    if (validate()) {
        const formData = {
            privateKey: privateKey,
            name: name,
        };
    
        try {
            // Make API call using Axios (replace with your actual API endpoint)
            const response = await axios.post(`${config.baseURL}user/wallet/ImportWallet`, formData, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get("userToken")}`  
                }
            });
            // setEmail("")
            console.log(response?.data);
            onClose();
            // Handle success (e.g., redirect user or show a success message)
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error (show error message to user)
        }
    }
  };

  return (
    <div className={styles.importAccountModal}>
        <div className={styles.importAccountModalContainer}>
            <div className={styles.importAccountModal__content}>
                <div className={styles.importAccountModal__header}>
                    <div>
                        <Image src={`${config.imageDomain}/loading-images/wallet2.webp`} alt="wallet2." height={20} width={20}/>
                        <h2>Import account</h2>
                    </div>
                    <span onClick={onClose}>&times;</span>
                </div>

                <div className={styles.importAccountModal__form}>
                    <div>
                        <p>Wallet Name</p>
                        <input placeholder="Wallet Name" value={name} onChange={(e) => setName(e.target.value)} /> 
                        {errors.name && <span className={styles.error}>{errors.name}</span>}
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <p>Paste your private key  string</p>
                        <textarea placeholder="eg. dsfdfetrsdgfsgsdgrhfsdfdf dsfdfetrsdgfsgsdgrhfsdfdf" value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} />
                        {errors.privateKey && <span className={styles.error}>{errors.privateKey}</span>} 
                    </div>
                </div>

                <div className={styles.importAccountModal__importBtn}>
                    <Button value="Import" className={styles.importAccountModal__importButton} onClick={handleSubmit} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ImportAccountModal;