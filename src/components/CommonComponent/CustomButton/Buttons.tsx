import React from 'react';
import styles from './button.module.scss';
const Buttons = ({ onClick }: any) => {
  return (
    <div className={styles.button_container}>
      <button onClick={onClick} className={styles.button}>
        Play Now
      </button>
    </div>
  );
};
export default Buttons;
