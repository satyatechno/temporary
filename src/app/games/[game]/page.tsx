import OneVsOne from '@/components/Games/OneVsOne/OneVsOne';
import OpenChallenges from '@/components/Games/OpenChallenges/OpenChallenges';
import PlayWithFriends from '@/components/Games/PlayWithFriends/PlayWithFriends';

const GameStage: React.FC = async ({ params }: any) => {
  return (
    <main>
      <OpenChallenges game={params?.game} />
      <OneVsOne game={params?.game} />
      <PlayWithFriends game={params?.game} />
    </main>
  );
};

export default GameStage;
