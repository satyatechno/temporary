'use client';
import { useState } from 'react';
import {
  challange1v1Api,
  createChallengeApi,
  joinChallengeApi,
  joinRoomApi,
} from '../services/challenge';
import { useAppContext } from '@/app/Context/AuthContext';
import useTransaction from './useTransaction';

type TJoin = {
  address: string;
  gameId: number | string;
};

export const joinOpenBet = async (data: TJoin) => {
  // join api
  try {
    const res = await joinChallengeApi(data);
    if (res.data) {
    }
    // medium=ticket + sync=true ==> play //
    // medium=currency + sync=false ==> payment flow // sync true ==> play
    return res.data?.data?.game;
  } catch (error: any) {}
};
type TJoinRoom = {
  address: string;
  code: number | string;
};
export const joinRoom = async (data: TJoinRoom) => {
  // join api
  try {
    const res = await joinRoomApi(data);
    return res.data?.data?.game;
    // medium=ticket + sync=true ==> play //
    // medium=currency + sync=false ==> payment flow // sync true ==> play
  } catch (error: any) {}
};

type TCreateCustom = {
  address: string;
  type: 'PlayWithFriend' | 'OneVSOne';
  betAmount: number | string;
  game: string;
  stage: number | string;
  medium: 'ticket' | 'currency';
  isCustomBet: boolean | string;
};
export const createChallenge = async (data: TCreateCustom) => {
  // join api
  try {
    const res = await createChallengeApi(data);
    if (data.type == 'PlayWithFriend') {
      // show room code
    }
    // sync =  false  + medium=currnecy =>make payment & play
    //  sync = true => play
    return res.data?.data?.game;
  } catch (error: any) {}
};
type TFetch = {
  type: 'PlayWithFriend' | 'OneVSOne';
  address: string;
  game: string;
  betAmount: number | string;
  stage: number | string;
  medium: 'ticket' | 'currency';
  isCustomBet: boolean | string;
};
export const findChallenge = async (data: TFetch) => {
  // join api
  try {
    const res = await challange1v1Api(data);
    // medium=ticket + sync=true ==> play //
    // medium=currency + sync=false ==> payment flow // sync true ==> play
    return res.data?.data?.game;
  } catch (error: any) {}
};

type TUrl = {
  typeData: string;
  typeFramework: string;
  typeLoader: string;
  typeWasm: string;
};
type TGameModule = {
  type: 'PlayWithFriend' | 'OneVSOne';
  betAmount: number | string;
  game: string;
  stage: number | string;
  medium: 'ticket' | 'currency';
  isCustomBet: boolean | string;
  gameId?: number | string;
  directJoin: boolean | string;
  code?: number | string;
  pause?: boolean;
  betData?: any;
};
const useGameModule = () => {
  const [playGame, setPlayGame] = useState(false);
  const [betData, setBetData] = useState<any>();
  const [scoreToBeat, setScoreToBeat] = useState<any>();
  const { wallet, userData } = useAppContext();
  const { fetchUser } = useAppContext();
  const { estimateGas } = useTransaction();
  const playChallenge = async ({
    type,
    stage,
    betAmount,
    game,
    gameId,
    medium,
    directJoin,
    isCustomBet,
    code,
    pause = false,
    betData,
  }: TGameModule | any) => {
    stage = stage?.toString();
    let bet: any = undefined;
    if (betData) {
      bet = betData;
    } else {
      if (isCustomBet == 'true') {
        if (type == 'PlayWithFriend' && directJoin == 'true' && code) {
          // join room
          bet = await joinRoom({ address: wallet?.address, code });
        } else if (type == 'OneVSOne' && directJoin == 'true' && gameId) {
          // join open challenge
          bet = await joinOpenBet({ address: wallet?.address, gameId: gameId });
        } else {
          // create custom/playwithfriend bet
          bet = await createChallenge({
            game,
            address: wallet?.address,
            betAmount,
            type,
            stage,
            isCustomBet,
            medium,
          });
          if (pause) {
            setBetData(bet);
          }
        }
      } else if (type == 'OneVSOne' && isCustomBet == 'false') {
        // create/join oneVsOne
        bet = await findChallenge({
          game,
          address: wallet?.address,
          betAmount: parseFloat(betAmount),
          medium,
          isCustomBet: JSON.parse(isCustomBet),
          stage,
          type,
        });
      }
    }

    console.log('bet detials==>', bet);
    if (!pause) {
      localStorage.setItem('gameId', bet?.gameId?.toString());
      let player = '';
      let oppenent = '';
      if (bet?.player1?.uuid == userData?.uuid) {
        player = 'player1';
        oppenent = 'player2';
      } else {
        player = 'player2';
        oppenent = 'player1';
      }

      if (bet?.[oppenent].status == 'Played') {
        setScoreToBeat(bet?.[oppenent].score);
      }
      switch (bet?.medium) {
        case 'currency':
          if (bet?.[player]?.sync) {
            // play
            setPlayGame(true);
          } else {
            estimateGas({
              address: wallet?.address,
              method: 'createOrJoinGame',
              type: 'challenge',
              args: {
                gameId: bet?.gameId,
                address: userData?.refree_address
                  ? userData?.refree_address
                  : '0x0346edeC853bCC92657734cE99045Eb0BA7B90Fb',
                value: bet?.betAmount,
              },
            });
            // Transaction
          }
          return;
        case 'ticket':
          if (bet?.[player]?.sync) {
            // play
            fetchUser();
            setPlayGame(true);
          } else {
            // play
          }
          return;
      }
    }
  };
  return {
    playChallenge,
    playGame,
    setPlayGame,
    betData,
    scoreToBeat,
  };
};
export default useGameModule;
