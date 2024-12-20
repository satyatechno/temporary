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
      <Image src={detail?.thumbnail} alt={detail?.name ||"latestP2E-games"} fill />
    </div>
  );
};

export default GamesCard;
