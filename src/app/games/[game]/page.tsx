import OneVsOne from '@/components/Games/OneVsOne/OneVsOne';
import OpenChallenges from '@/components/Games/OpenChallenges/OpenChallenges';
import PlayWithFriends from '@/components/Games/PlayWithFriends/PlayWithFriends';
import { fetchGameDetails, fetchGames } from '@/services/GameServices';

const GameStage: React.FC = async ({ params }: any) => {
  const games = await fetchGames();
  const gameDetails = await fetchGameDetails(params?.game);
  return (
    <main>
      <OpenChallenges />
      <OneVsOne />
      <PlayWithFriends games={games} gameDetails={gameDetails} />
    </main>
  );
};

export default GameStage;
