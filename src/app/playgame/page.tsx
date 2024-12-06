'use client';
import GameScreen from '@/components/GamePlay/GameScreen/GameScreen';
import LoadingScreen from '@/components/GamePlay/LoadingScreen/LoadingScreen';
import { useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useGamesContext } from '../Context/GamesContext';

const PlayGame = () => {
  const searchParams = useSearchParams();
  const game = searchParams.get('game');
  const [loading, setLoading] = useState<boolean>(true);
  const [gameData, setGameData] = useState<any>(null);
  const { fetchGameDetails } = useGamesContext();
  useEffect(() => {
    setGameData(fetchGameDetails(game ?? '2048'));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <GameScreen data={gameData} />
    </div>
  );
};

export default PlayGame;
