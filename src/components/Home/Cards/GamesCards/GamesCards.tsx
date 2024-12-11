import { useRouter } from 'next/navigation';
import styles from './gamescard.module.scss';
import Image from 'next/image';

const GamesCard = ({ detail }: any) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`games/${detail?.name}`)}
      className={styles.card_container}
    >
      <img src={detail?.thumbnail} alt={detail?.name} width={50} height={50} />
    </div>
  );
};

export default GamesCard;
