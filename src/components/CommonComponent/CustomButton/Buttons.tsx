import React from "react"; 
import styles from "./button.module.scss"
const Buttons = (props:any) => {
  return (
    <div className={styles.button_container}>
        <button className={styles.button}>
            Play Now
        </button>

    </div>
  )

};
export default Buttons;
