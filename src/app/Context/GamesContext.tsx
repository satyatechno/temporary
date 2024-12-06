'use client';
import { fetchGames } from '@/services/GameServices';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface GamesContextType {
  games: Array<any>;
  gamesLoading: boolean;
  fetchGameDetails: (game: string) => any;
}

const GamesContext = createContext<GamesContextType | null>(null);

export const GamesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [games, setGames] = useState<Array<any>>([]);
  const [gamesLoading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const games = await fetchGames();
      setGames(games);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchGameDetails = (game: string) => {
    const gameDetails = games.find((item) => item?.name === game);
    return gameDetails;
  };
  return (
    <GamesContext.Provider value={{ games, gamesLoading, fetchGameDetails }}>
      {children}
    </GamesContext.Provider>
  );
};

export const useGamesContext = () => {
  const context = useContext(GamesContext);
  if (!context) {
    throw new Error('useGamesContext must be used within an GamesProvider');
  }
  return context;
};
