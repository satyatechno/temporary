import styles from "./animatedButton.module.scss";


const AnimatedButton = ({text}:any) => {
  return (
    <section className={styles.buttons}>
      <div className={styles.container}>
        <h3 className={`${styles.btn} ${styles.btn_effect} ${styles.disableBtn}`}>
          <span>{text}</span>
        </h3>
      </div>
    </section>
  );
};


export default AnimatedButton;