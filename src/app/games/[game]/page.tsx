import GameDetails from './GameDetails';

const GameStage: React.FC = async ({ params }: any) => {
  return (
    <main>
      <GameDetails game={params?.game} />
    </main>
  );
};

export default GameStage;
