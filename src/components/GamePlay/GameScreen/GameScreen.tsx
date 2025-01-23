'use client';

import useUnityDevicePixelRatio from '@/hooks/useUnityDevicePixelRatio';
import { useEffect, useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import ControlMenu from '../ControlMenu/ControlMenu';
import GameLoading from '../GameLoading/GameLoading';
import styles from './gameScreen.module.scss';
import QuitPopup from '../QuitPopPup/QuitPopup';
import { useRouter, useSearchParams } from 'next/navigation';
import { gameScoreApi } from '@/services/GameServices';
import { useAppContext } from '@/app/Context/AuthContext';
import { tournamentScoreApi } from '@/services/tournament';
import useTournament from '@/hooks/tournamentService';

const GameScreen = ({
  data,
  scoreToBeat,
  isTournament = false,
}: {
  data: any;
  scoreToBeat?: any;
  isTournament?: boolean;
}) => {
  console.log('game screen data', data);
  const {
    unityProvider,
    isLoaded,
    unload,
    addEventListener,
    removeEventListener,
    sendMessage,
    loadingProgression,
    requestFullscreen,
    UNSAFE__unityInstance,
  } = useUnityContext({
    loaderUrl: data?.buildUrl?.typeLoader,
    dataUrl: data?.buildUrl?.typeData,
    frameworkUrl: data?.buildUrl?.typeFramework,
    codeUrl: data?.buildUrl?.typeWasm,
    webglContextAttributes: { preserveDrawingBuffer: true },
    ...(data?.streamingAssets
      ? {
          streamingAssetsUrl: data?.streamingAssets?.replace(
            'https://storage.googleapis.com/ga-site-assets',
            'https://games.gamingarcade.io'
          ),
        }
      : {}),
  });
  const devicePixelRatio = useUnityDevicePixelRatio();
  const searchParams = useSearchParams();
  const { setStartGame } = useTournament();
  const router = useRouter();
  const { userData, wallet } = useAppContext();
  const [setIsGameOver] = useState<any>(false); //need to add in future
  const [popupValue, setPopupValue] = useState(false);
  const [setIsNavigate] = useState<any>(true); //need to add in future
  useEffect(() => {
    //@ts-ignore
    window.unityInstance = UNSAFE__unityInstance;
    return () => {
      //@ts-ignore
      window?.unityInstance?.Quit().then(function () {});
      unload();
    };
  }, [UNSAFE__unityInstance?.Module]);
  useEffect(() => {
    if (isLoaded === true) {
      sendMessage(
        'LoadLevelManager',
        'LoadLevel',
        searchParams?.get('stage') ?? 1
      );
    }
  }, [isLoaded, window.innerWidth]);

  const scoreSumbitter = async () => {
    if (!isTournament) {
      const gameId = localStorage.getItem('gameId');
      try {
        let data: any = {};
        const res = await gameScoreApi(gameId);
        data = { ...res.data?.data?.game };
        let player = '';

        // let oppenent = '';
        if (res.data?.data?.game?.player1?.uuid == userData?.uuid) {
          player = 'player1';
          // oppenent = 'player2';
        } else {
          // oppenent = 'player1';
          player = 'player2';
        }
        if (res.data?.data?.game?.winner) {
          if (res.data?.data?.game?.winner?.uuid == userData?.uuid) {
            data.status = 'win';
            data.score = res.data?.data?.game?.player2?.score;
          } else {
            data.status = 'loose';
            data.score = res.data?.data?.game?.player2?.score;
          }
        } else {
          data.score = res.data?.data?.game?.[player]?.score;
          data.status = 'pending';
        }
        const queryString = new URLSearchParams(data).toString();
        //@ts-ignore
        router.replace(`/playgame/${data?.status}?${queryString}`);
      } catch (error) {
        console.log('errorrr', error);
      }
    } else {
      const entryId = localStorage.getItem('entryId');

      try {
        const body = {
          player_id: wallet?.address,
          score: '',
          enc_score: '',
          tournament: searchParams?.get('serial'),
          entryId: entryId,
        };
        console.log('tournament submit score', body);
        const res = await tournamentScoreApi(body);
        console.log('result tournament response', JSON.stringify(res.data));

        setTimeout(() => {
          // navigate('/leaderboard');
          router.push(
            `/tournament/${searchParams?.get(
              'game'
            )}?tournament=${searchParams?.get('serial')}`
          );
          setStartGame(false);
        }, 2000);
      } catch (e: any) {
        setTimeout(() => {
          // navigate('/home');
          setStartGame(false);
        }, 2000);

        console.log('error ', e);
        console.log('error response ', e?.response);
        console.log('error data', e?.response?.data);
      }
    }
  };

  const handleGameOver = () =>
    // score: any, enc_score: any
    {
      // const score_obj = { enc_score: enc_score, score: score };
      unload();
      // setScore(score_obj);
      // const gameId = localStorage.getItem("gameId");
      // const entryId = localStorage.getItem("entryId");
      // setPopupValue(false);
      //@ts-ignore
      window?.unityInstance?.Quit();
      setIsGameOver(true);
      setIsNavigate(false);
      // setTransaction(false);

      setTimeout(() => {
        scoreSumbitter();
      }, 3000);
    };

  const handleGameEnd = () => {
    setPopupValue(false);
    unload();
    setIsGameOver(true);
    setIsNavigate(false);
    // setTransaction(false);
    setTimeout(() => {
      scoreSumbitter();
    }, 3000);
  };
  const handleQuitGame = () =>
    // score: any, enc_score: any
    {
      //commenting unnecessary code

      // const score_obj = { enc_score: enc_score, score: score };
      // setScore(score_obj);
      setPopupValue(true);
      // setTransaction(false);
    };
  useEffect(() => {
    addEventListener('GameOver', handleGameOver);
    addEventListener('QuitGame', handleQuitGame);
    addEventListener('GameEnd', handleGameEnd);
    return () => {
      removeEventListener('GameOver', handleGameOver);
      removeEventListener('QuitGame', handleQuitGame);
      removeEventListener('GameEnd', handleGameEnd);
    };
  }, []);
  useEffect(() => {
    if (isLoaded === true) {
      console.log('address at game screen', wallet);
      const gameId = localStorage.getItem('gameId');
      const tourId = localStorage.getItem('tournamentId');
      const entryId = localStorage.getItem('entryId');
      const data = {
        address: wallet?.address,
        baseUrl: 'alpha.gamingarcade.io/api/v1',
        ...(isTournament
          ? {
              tourId: tourId,
              gameId: '',
              gameMode: 'Tournament',
              entryId: entryId,
            }
          : {
              gameId: gameId,
              gameMode: 'OneVSOne',
              tourId: '',
              entryId: '',
            }),
      };

      sendMessage('UnityReceiver', 'PlayerDetails', JSON.stringify(data));
      // console.log(window?.unityInstance, "unity instance");
      // console.log(userId, 0.001)
    }
  }, [isLoaded]);
  const mode = (mode: any, mute: any, quit: any) => {
    const data = { darkmode: mode, sound: mute, quit: quit };
    //@ts-ignore
    window.unityInstance.SendMessage(
      'ReactHelper',
      'SendMsg',
      JSON.stringify(data)
    );
  };
  const resumeAgain = () => {
    setPopupValue(false);
    //@ts-ignore
    window.unityInstance.SendMessage('PauseGameHandler', 'ResumeGame', 'true'); // resume
  };

  const quitGame = () => {
    // const gameId = localStorage.getItem("gameId");
    // const entryId = localStorage.getItem("entryId");
    setPopupValue(false);
    //@ts-ignore
    window.unityInstance.SendMessage('PauseGameHandler', 'ResumeGame', 'false'); // quit
    setTimeout(() => {
      scoreSumbitter();
    }, 3000);

    // unload();
    // setIsGameOver(true);
    // setIsNavigate(false);
    // setTransaction(false);
    // setTimeout(() => {
    //   if (props.practice === "true") {
    //     freeScoreSubmit(scoreState?.score);
    //   } else {
    //     scoreSumbitter(scoreState?.score, scoreState.enc_score);
    //   }

    // }, 3000);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gameContainer}>
          <div className={styles.gameView}>
            <Unity
              unityProvider={unityProvider}
              style={{ width: '100%', height: '100%' }}
              devicePixelRatio={devicePixelRatio}
            />
          </div>
          <div className={styles.controlBar}>
            <ControlMenu
              scoreToBeat={scoreToBeat}
              tips={data?.tips}
              actions={{
                fullScreen: requestFullscreen,
                quit: (param1: any, param2: any, param3: any) =>
                  mode(param1, param2, param3),
                darkMode: (param1: any, param2: any, param3: any) =>
                  mode(param1, param2, param3),
              }}
            />
          </div>

          <div className={styles.DragableMenu}>
            {/* <Draggable/> */}
            {/* <DragableMenu
              scoreToBeat={scoreToBeat}
              actions={{
                // fullScreen: requestFullscreen,x
                quit: (param1: any, param2: any, param3: any) =>
                  mode(param1, param2, param3),
                darkMode: (param1: any, param2: any, param3: any) =>
                  mode(param1, param2, param3),
              }}
            /> */}
          </div>

          {!isLoaded && (
            <div className={styles.loading}>
              <GameLoading
                gameData={data}
                percent={Math.round(loadingProgression * 100)}
              />
            </div>
          )}
        </div>
      </div>
      <QuitPopup
        open={popupValue}
        resume={() => resumeAgain()}
        quit={() => quitGame()}
      />
    </>
  );
};

export default GameScreen;
