import React from 'react';
import config from '../../../../config';
import styles from './loadingScreen.module.scss';
import { poppins } from '@/app/layout';
interface LoadingScreenProps {
  text?: string;
  errImage?: string;
}

function LoadingScreen({
  text = 'Loading...',
  errImage = `${config.imageDomain}Assets/error-img3.webp`,
}: LoadingScreenProps) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        {/* <span className="error-cancel"></span> */}
        <div className={styles.loadingContainer}>
          <img
            src={`${config.imageDomain}Assets/error-loader-img.webp`}
            alt="error"
          />
        </div>
        <div className={styles.title}>
          <h2 className={poppins.className}>{text}</h2>
        </div>
        <div className={styles.icon}>
          <img src={errImage} alt="wallet" />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
