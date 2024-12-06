import styles from './gameLoading.module.scss';

function GameLoading({
  percent,
  gameData,
}: {
  percent: number;
  gameData: any;
}) {
  return (
    <>
      <section className={styles.container}>
        <img
          className={styles.backgroundImage}
          src={gameData?.loadingImage}
          alt="loading background"
        />
        <div className={styles.logoContainer}>
          <img
            src={gameData?.thumbnail}
            alt="Gaming Arcade Logo"
            className={styles.logo}
          />
          <div className={styles.loading}>
            <span
              style={{
                width: percent > 100 ? '100' : percent.toString() + '%',
              }}
            ></span>
          </div>
          <p className={styles.percent}>{percent > 100 ? 100 : percent} %</p>
          <div className={styles['tips-main']}>
            <span className={styles['tips-heading']}>Tips</span>
            {/* <span className="tips-text">This game is less about luck and more about correctstrategy. Learn from good players.</span> */}
            <span className={styles['tips-text']}>{gameData?.tips?.[0]}</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default GameLoading;
