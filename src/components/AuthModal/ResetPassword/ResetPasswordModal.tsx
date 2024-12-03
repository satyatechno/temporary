import React, { useState } from 'react';
import styles from './resetPassword.module.scss';
import axios from 'axios';
import config from '../../../../config';
import Button from '@/components/CommonComponent/AnimatedButton/AnimatedButton';

interface ResetPasswordModalProps {
  onClose: () => void;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear previous error messages
    setError('');

    // Form data to send via API
    const formData = {
      email: email,
      password: password,
    };

    try {
      // Make API call using Axios (replace with your actual API endpoint)
      const response = await axios.put(`${config.baseURL}user/update/password`, formData);
      if (response?.data?.statusCode === "10000") {
        onClose();
      }
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      console.log('Password update successful:', response?.data);
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <div className={styles.resetPasswordModal}>
      <div className={styles.resetPasswordModal__content}>
        <div className={styles.resetPasswordModal__contentClose}>
          <p>Reset Password</p>
          <span onClick={onClose}>&times;</span>
        </div>
        <hr />
        <div className={styles.resetPasswordModal__contentEmail}>
          <p>Forgot your password? Reset it here!</p>
          <div className={styles.resetPasswordModal__contentEmailForm}>
            <input
              placeholder="email@zeltatech.com"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Enter new Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Re-enter Password"
              value={confirmPassword}
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
        <div className={styles.resetPasswordModal__contentSave}>
          <Button
            value="Save"
            className={styles.resetPasswordModal__contentSaveBtn}
            onClick={()=>handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
