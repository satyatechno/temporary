
import styles from './lastestP2eGames.module.scss';
import SwiperCarousel from '../SwiperCarousel/SwiperCarousel';
// import { useGamesContext } from '@/app/Context/GamesContext';

type GameData = {
  _id: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  IconImage: string;
  IconImageAlt: string;
  name: string;
};

type HomeCarouselProps = {
  gamesData?: GameData[];
};

const LatestP2EGames:React.FC<HomeCarouselProps>= ({gamesData}:any) => {
  // const { games } = useGamesContext();

  return (
    <div className={styles.main_container}>
      <h3 className={styles.heading}>Latest P2E Games</h3>
      <div>
        <SwiperCarousel data={gamesData} />
      </div>
    </div>
  );
};

export default LatestP2EGames;
