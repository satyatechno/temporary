import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./home/page";

export default function Home() {
  return (
    <div className={styles.body}>
      {/* <h1>chalein shuru krte hai</h1> */}
      <HomePage/>
    </div>
  );
}
