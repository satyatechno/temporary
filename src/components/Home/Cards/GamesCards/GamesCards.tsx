import styles from "./gamescard.module.scss";
import Image from "next/image";

const GamesCard = ({ detail }: any) => {
  console.log("detaildetail", detail);
  return (
    <div className={styles.card_container}>
      <img src={detail?.thumbnail}  alt={detail?.name} width={50} height={50}/>
    </div>
  );
};

export default GamesCard;
