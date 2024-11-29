import React from 'react';
import styles from './joinCommunity.module.scss';
import { glossBloom, inter, montserrat } from '@/app/layout';
import { Inter } from 'next/font/google';
const JoinCommunity = () => {
  return (
    <section className={styles.joinTextSection}>
      <h3 className={glossBloom.className}>Join Our</h3>
      <h1 className={inter.className}>Thriving Community</h1>

      <p style={{ fontSize: '16px' }} className={montserrat.className}>
        Dive into 1v1 battles, craft custom rooms, or throw down an open
        challenge for all to join! Level up your gaming experience! Your skills
        are the key to unlocking exclusive rewards
      </p>
      <div
        style={{
          position: 'absolute',
          top: '0',
          width: '50%',
          left: '25%',
        }}
      >
        <img
          src="https://assets.gamingarcade.io/Assets/monkey1.webp"
          alt="monkey"
          className={styles.person1}
        />
        <img
          src="https://assets.gamingarcade.io/Assets/women1.webp"
          alt="women"
          className={styles.person2}
        />
      </div>
    </section>
  );
};

export default JoinCommunity;
