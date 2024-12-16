import React from 'react';
import styles from './backgroundIcons.module.scss';
import Image from 'next/image';
const BackgroundIcons = ({ img }: { img: string }) => {
  return (
    <div className={styles.container}>
      <Image
        src={img}
        alt="game-icon"
        height={120}
        width={120}
        className={styles.icon}
      />
      <Image
        src={img}
        alt="game-icon"
        height={120}
        width={120}
        className={styles.icon1}
      />
      <Image
        src={img}
        alt="game-icon"
        height={120}
        width={120}
        className={styles.icon2}
      />
      <Image
        src={img}
        alt="game-icon"
        height={120}
        width={120}
        className={styles.icon3}
      />
      <Image
        src={img}
        alt="game-icon"
        height={120}
        width={120}
        className={styles.icon4}
      />
    </div>
  );
};

export default BackgroundIcons;
