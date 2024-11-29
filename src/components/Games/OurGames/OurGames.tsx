import Image from 'next/image';
import React from 'react';
import styles from './ourGames.module.scss';
import { glossBloom, inter, montserrat } from '@/app/layout';
function OurGames() {
  return (
    <div className={styles.container}>
      <section className={styles.exploreGames}>
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
          }}
        >
          <div>
            <h3 className={glossBloom.className}>Explore</h3>
            <h2 className={inter.className}>Our Games</h2>
            <p className={montserrat.className}>
              Play for free, create custom rooms, and open challenges. Dive into
              a diverse selection of hyper-casual games
            </p>
          </div>
          <div>
            <Image
              width={0}
              height={0}
              src={`https://assets.gamingarcade.io/Assets/games.webp`}
              alt="Hyper Casual Web3 Gaming"
              sizes="100vw"
              style={{ height: '400px', width: 'auto' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurGames;
