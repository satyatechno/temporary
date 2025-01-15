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

const GameScreen = ({ data, scoreToBeat }: { data: any; scoreToBeat: any }) => {
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
  });
  const devicePixelRatio = useUnityDevicePixelRatio();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { userData, wallet } = useAppContext();
  const [isGameOver, setIsGameOver] = useState(false);
  const [popupValue, setPopupValue] = useState(false);
  const [isNavigate, setIsNavigate] = useState(true);
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
    const gameId = localStorage.getItem('gameId');
    try {
      let data: any = {};
      const res = await gameScoreApi(gameId);
      data = { ...res.data?.data?.game };
      let player = '';
      let oppenent = '';
      if (res.data?.data?.game?.player1?.uuid == userData?.uuid) {
        player = 'player1';
        oppenent = 'player2';
      } else {
        player = 'player2';
        oppenent = 'player1';
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
      // const params = new URLSearchParams();
      //@ts-ignore
      router.replace(`/playgame/${data?.status}?data=${JSON.stringify(data)}`);
    } catch (error) {
      console.log("errorrr",error)
    }
  };

  const handleGameOver = (score: any, enc_score: any) => {
    const score_obj = { enc_score: enc_score, score: score };
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
  const handleQuitGame = (score: any, enc_score: any) => {
    const score_obj = { enc_score: enc_score, score: score };
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
      const data = {
        address: wallet?.address,
        tourId: '',
        gameId: gameId,
        gameMode: true ? 'FreePlay' : 'OneVSOne',
        entryId: '',
        baseUrl: 'alpha.gamingarcade.io/api/v1',
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
