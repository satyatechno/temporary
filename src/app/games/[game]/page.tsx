// 'use client';

import OneVsOne from '@/components/Games/OneVsOne/OneVsOne';
import OpenChallenges from '@/components/Games/OpenChallenges/OpenChallenges';
import PlayWithFriends from '@/components/Games/PlayWithFriends/PlayWithFriends';

const GameStage = ({ params }: any) => {
  return (
    <main>
      {/* <h1>This is game details of {params?.game}</h1> */}
      <OpenChallenges />
      <OneVsOne />
      <PlayWithFriends />
    </main>
  );
};

export default GameStage;
