import GameGrid from '@/components/Games/GamesGrid/GamesGrid';
import JoinCommunity from '@/components/Games/JoinCommunity/JoinCommunity';
import OurGames from '@/components/Games/OurGames/OurGames';

const ExploreGames = async () => {
  return (
    <main>
      <GameGrid />
      <JoinCommunity />
      <OurGames />
    </main>
  );
};

export default ExploreGames;
