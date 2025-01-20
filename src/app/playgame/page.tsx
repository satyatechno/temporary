'use client';
import GameScreen from '@/components/GamePlay/GameScreen/GameScreen';
import LoadingScreen from '@/components/GamePlay/LoadingScreen/LoadingScreen';
import { useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/router';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useGamesContext } from '../Context/GamesContext';
import useGameModule from '@/hooks/challengeService';

const PlayGame = () => {
  const searchParams = useSearchParams();
  const game = searchParams.get('game');
  // const [loading, setLoading] = useState<boolean>(false);
  const [gameData, setGameData] = useState(null);
  const { fetchGameDetails, games } = useGamesContext();
  const { playGame, setPlayGame, scoreToBeat } = useGameModule();
  const { playChallenge } = useGameModule();

  useLayoutEffect(() => {
    setGameData(fetchGameDetails(game ?? '2048'));
  }, [games]);

  useEffect(() => {
    setPlayGame(true);
    if (searchParams.get('paymenySynced')) {
      setPlayGame(true);
    } else {
      playChallenge({
        betAmount: searchParams.get('value'),
        type: searchParams.get('gameType'),
        directJoin: searchParams.get('direct'),
        game: searchParams.get('name'),
        isCustomBet: searchParams.get('isCustomBet'),
        gameId: searchParams.get('gameId'),
        medium: searchParams.get('medium'),
        stage: searchParams.get('stage'),
        code: searchParams.get('code'),
        betData: JSON.parse(searchParams.get('betData') ?? ''),
      });
    }
  }, []);

  // if (loading || !playGame) {
  //   return <LoadingScreen />;
  // }
  if (!playGame) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <GameScreen data={gameData} scoreToBeat={scoreToBeat} />
    </div>
  );
};

export default PlayGame;
