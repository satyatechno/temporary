'use client';

import { useCallback, useEffect, useState } from 'react';
import styles from './history.module.scss';
import DynamicTable from '../CommonComponent/DynamicTable/DynamicTable';
import {
  challengeHistoryApi,
  tournamentHistoryData,
} from '@/services/challenge';
import { useAppContext } from '@/app/Context/AuthContext';

const History = () => {
  const [activeTab, setActiveTab] = useState<'left' | 'right'>('left');
  const [tournamentHistory, setTournamentHistory] = useState([]);
  const [gameHistory, setGameHistory] = useState([]);

  const headers = ['GameId', 'Game', 'Score', 'Result'];
  const headers2 = ['Trmt No', 'Game', 'Rank', 'Result'];

  const [isLoading, setIsLoading] = useState(true);
  const { medium } = useAppContext();

  const fetchGameHistoryData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await challengeHistoryApi({
        medium: medium
      });
      setGameHistory(res?.data?.data?.game ?? []);
      setIsLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    fetchGameHistoryData();
  }, [fetchGameHistoryData]);

  const fetchTournamentHistoryData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await tournamentHistoryData({
        medium: 'currency',
      });
      setTournamentHistory(res?.data?.data?.game ?? []);
      setIsLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    fetchTournamentHistoryData();
  }, []);

  const handleTabClick = (direction: 'left' | 'right') => {
    if (activeTab !== direction) {
      setActiveTab(direction);
    }
  };

  return (
    <main className={styles.main_container}>
      <div className={styles.wrapper}>
        <div
          className={`${styles.taebSwitch} ${
            activeTab === 'left' ? styles.left : styles.right
          }`}
        >
          <div
            className={`${styles.taeb} ${
              activeTab === 'left' ? styles.active : ''
            }`}
            onClick={() => {
              handleTabClick('left');
              fetchGameHistoryData();
            }}
          >
            Game History
          </div>
          <div
            className={`${styles.taeb} ${
              activeTab === 'right' ? styles.active : ''
            }`}
            onClick={() => {
              handleTabClick('right');
              fetchTournamentHistoryData();
            }}
          >
            Tournament History
          </div>
        </div>
      </div>

      {activeTab === 'right' ? (
        <DynamicTable
          headers={headers2}
          data={tournamentHistory}
          isLoading={isLoading}
        />
      ) : (
        <DynamicTable
          headers={headers}
          data={gameHistory}
          isLoading={isLoading}
        />
      )}
    </main>
  );
};

export default History;
