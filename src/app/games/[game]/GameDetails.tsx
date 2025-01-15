'use client';

// import { useAppContext } from '@/app/Context/AuthContext';
import { useGamesContext } from '@/app/Context/GamesContext';
import BackgroundIcons from '@/components/Games/BackgroundIcons/BackgroundIcons';
import OneVsOne from '@/components/Games/OneVsOne/OneVsOne';
import OpenChallenges from '@/components/Games/OpenChallenges/OpenChallenges';
import PlayWithFriends from '@/components/Games/PlayWithFriends/PlayWithFriends';
import React, { useEffect, useState } from 'react';

const GameDetails = ({ game }: any) => {
  // const router = useRouter();
  const [gameDetails, setGameDetails] = useState<any>(null);
  const { fetchGameDetails, games } = useGamesContext();
  // const { wallet } = useAppContext();
  useEffect(() => {
    const gameData = fetchGameDetails(game);
    if (gameData) {
      setGameDetails(gameData);
      console.log({ gameData });
    } else {
      //navigate to 404 page
      //   router.push('/NotFoundPage');
    }
  }, [games]);
  return (
    <>
      <BackgroundIcons img={gameDetails?.gameStageLayerIcon} />
      <OpenChallenges gameDetails={gameDetails} />
      <OneVsOne gameDetails={gameDetails} />
      <PlayWithFriends gameDetails={gameDetails} />
    </>
  );
};

export default GameDetails;
