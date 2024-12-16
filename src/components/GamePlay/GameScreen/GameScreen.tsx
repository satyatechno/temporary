'use client';

import useUnityDevicePixelRatio from '@/hooks/useUnityDevicePixelRatio';
import { useEffect, useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import ControlMenu from '../ControlMenu/ControlMenu';
import GameLoading from '../GameLoading/GameLoading';
import styles from './gameScreen.module.scss';
import QuitPopup from '../QuitPopPup/QuitPopup';
import { useRouter } from 'next/navigation';

const GameScreen = ({ data }: { data: any }) => {
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
  const router = useRouter();
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
      sendMessage('LoadLevelManager', 'LoadLevel', parseInt('1'));
    }
  }, [isLoaded, window.innerWidth]);

  const freeScoreSubmit = async (score: any) => {
    const gameId = localStorage.getItem('gameId');
    setIsNavigate(true);
    // try {
    // await  scoreFreeGame(
    //     gameId,
    //     {enc_score: score === undefined ? 0 : score}
    //   )
    //   setIsNavigate(true)
    // } catch (err) {
    //   setIsNavigate(true)
    // }
  };

  const scoreSumbitter = async (score: any, enc_score: any) => {
    // const gameId = localStorage.getItem("gameId");
    // console.log(gameId)
    // try {
    //   if (gameId !== -1) {
    //   await  callApi(
    //       gameId,
    //       {
    //         /* API to submit score from frontend is currently off */
    //         // player_id: userId,
    //         player_id: wallet?.address,
    //         // score: score === undefined ? 0 : score,
    //         enc_score: score === undefined ? 0 : score,
    //         practice:
    //           props.practice && props.practice === "true" ? true : false,
    //       },
    //       props.practice && props.practice === "true" ? true : false
    //     );
    //   }
    //   localStorage.setItem("transaction", false);
    //   setTransaction(false);
    //   if (gameId > 0) {
    //     setGameType("oneVone");
    //   }
    //   if (entryId > 0) {
    //     setGameType("tournament");
    //   }
    //   localStorage.setItem("gameId", -1);
    //   localStorage.setItem("entryId", -1);
    // setIsNavigate(true)
    // } catch (err) {
    //   setIsNavigate(true)
    // }
  };
  const handleGameOver = (score: any, enc_score: any) => {
    let score_obj = { enc_score: enc_score, score: score };
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
    router.replace('/playgame/1');
    setTimeout(() => {
      if (
        true
        // props.practice === "true"
      ) {
        // console.log(scoreState?.score)
        freeScoreSubmit(score);
      } else {
        scoreSumbitter(score, enc_score);
      }
    }, 3000);
  };

  const handleGameEnd = () => {
    setPopupValue(false);
    unload();
    setIsGameOver(true);
    setIsNavigate(false);
    // setTransaction(false);
    router.replace('/playgame/1');
    setTimeout(() => {
      if (true) {
        // freeScoreSubmit(scoreState?.score);
      } else {
        // scoreSumbitter(scoreState?.score, scoreState.enc_score);
      }
    }, 3000);
  };
  const handleQuitGame = (score: any, enc_score: any) => {
    let score_obj = { enc_score: enc_score, score: score };
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
      let data = {
        address: 'wallet?.address',
        tourId: '',
        gameId: 1,
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
    let data = { darkmode: mode, sound: mute, quit: quit };
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
    router.replace('/playgame/1');
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
              actions={{
                fullScreen: requestFullscreen,
                quit: (param1: any, param2: any, param3: any) =>
                  mode(param1, param2, param3),
                darkMode: (param1: any, param2: any, param3: any) =>
                  mode(param1, param2, param3),
              }}
            />
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
