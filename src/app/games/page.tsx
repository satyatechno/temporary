'use client';

import GameCard from '@/components/Games/GameCard/GameCard';
import GameGrid from '@/components/Games/GamesGrid/GamesGrid';
import { fetchGames } from '@/services/GameServices';
import { useEffect, useState } from 'react';

const ExploreGames = () => {
  return (
    <main>
      {/* <h1>This is Explore Games</h1> */}
      <GameGrid />
    </main>
  );
};

export default ExploreGames;
