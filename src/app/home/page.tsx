import AlphaPass from '@/components/Home/Alpha Pass/AlphaPass';
import CommingSoon from '@/components/Home/Comming Soon/CommingSoon';
import HomeCarousel from '@/components/Home/HomeCarousel/HomeCarousel';
import LatestP2EGames from '@/components/Home/LatestP2EGames/LatestP2EGames';
import MostPlayed from '@/components/Home/MostPlayed/MostPlayed';
import OpenChallenges from '@/components/Home/OpenChallenges/OpenChallenges';
import PlayBigWinBig from '@/components/Home/PlayBigWinBig/PlayBigWinBig';
import PlayToEarn from '@/components/Home/PlayToEarn/PlayToEarn';
import TopArcadian from '@/components/Home/TopArcadian/TopArcadian';

// import config from '../../../config';

// type HomeData = {
//   games?: any;
// };
// export async function fetchHomeData(): Promise<HomeData | null> {
//   const baseUrl = config.baseURL;
//   try {
//     const response = await fetch(`${baseUrl}games`, { cache: 'no-store' }); // Use `no-store` to avoid caching if needed
//     if (!response.ok) {
//       throw new Error('Failed to fetch home data');
//     }
//     const data = await response.json();
//     return data?.data;
//   } catch (error) {
//     console.error('Error fetching home data:', error);
//     return null;
//   }
// }

const HomePage: React.FC = async () => {
  // const games = await fetchHomeData();
  return (
    <main>
      <HomeCarousel />
      <OpenChallenges />
      <LatestP2EGames />
      <AlphaPass />
      <MostPlayed />
      <PlayToEarn />
      <CommingSoon />
      <TopArcadian />
      <PlayBigWinBig />
    </main>
  );
};

export default HomePage;
