'use client';
import GameScreen from '@/components/GamePlay/GameScreen/GameScreen';
import LoadingScreen from '@/components/GamePlay/LoadingScreen/LoadingScreen';
import { useSearchParams } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useGamesContext } from '@/app/Context/GamesContext';
import useTournament from '@/hooks/tournamentService';

const Page = () => {
  const searchParams = useSearchParams();
  const game = searchParams.get('game');
  const rejoin = searchParams.get('rejoin');
  const twitter = searchParams.get('twitter');
  const serial = searchParams.get('serial');
  const entryFee = searchParams.get('entryFee');
  const [gameData, setGameData] = useState(null);
  const { fetchGameDetails, games } = useGamesContext();
  const { startGame, playTournament, playTournamentFree, setStartGame } =
    useTournament();
  useLayoutEffect(() => {
    setGameData(fetchGameDetails(game ?? '2048'));
  }, [games]);

  useEffect(() => {
    if (rejoin) {
      setStartGame(true);
    } else if (twitter) {
      playTournamentFree(serial);
    } else if (!startGame) {
      playTournament(serial, entryFee);
    }
  }, []);

  if (!startGame) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <GameScreen data={gameData} isTournament={true} />
    </div>
  );
};

export default Page;
