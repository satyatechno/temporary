import React from 'react';

import styles from './quitPopup.module.scss';
import config from '../../../../config';
import { poppins } from '@/app/layout';

interface TQuitPopup {
  open: boolean;
  quit: () => void;
  resume: () => void;
}

function QuitPopup({ open, quit, resume }: TQuitPopup) {
  if (!open) return null;
  return (
    <>
      <div className={styles.modal_overlay}>
        <div className={styles.quit}>
          <button className={styles.closeModal} onClick={resume}>
            <img
              src={`${config.imageDomain}Assets/corss-modal.webp`}
              alt={'Gaming Arcade'}
            />
          </button>
          <img
            src={`${config.imageDomain}Assets/warn.webp`}
            className={styles.warn}
            alt={'Gaming Arcade'}
          />
          <p className={poppins.className}>
            Are you Sure You want to quit this game?
          </p>
          <div className={styles.btnMainButton}>
            <button className={styles.blueBtn} onClick={() => quit()}>
              <img
                src={`${config.imageDomain}Assets/back.webp`}
                alt={'Gaming Arcade'}
              />{' '}
              Quit Game
            </button>
            <button className={styles.blueBtn} onClick={resume}>
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuitPopup;
