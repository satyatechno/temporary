import GameGrid from '@/components/Games/GamesGrid/GamesGrid';
import JoinCommunity from '@/components/Games/JoinCommunity/JoinCommunity';
import OurGames from '@/components/Games/OurGames/OurGames';
import { fetchGames } from '@/services/GameServices';

const ExploreGames = async () => {
  const games = await fetchGames();

  return (
    <main>
      <GameGrid gameData={games} />
      <JoinCommunity />
      <OurGames />
    </main>
  );
};

export default ExploreGames;
