import React, { useState } from 'react';
import config from '../../../../config';
import styles from './controlDesk.module.scss';
const ControlMenu = ({
  scoreToBeat = '',
  tips = ['Tip1', 'Tip2'],
  actions,
}: any) => {
  const [sound, setSound] = useState(true);
  const [mode, setMode] = useState(false);
  const muteUnmute = () => {
    setSound((current) => !current);
    actions.darkMode(mode, !sound, false);
  };
  const modeChanger = () => {
    setMode((current) => !current);
    actions.darkMode(!mode, sound, false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.scoreContainer}>
        {scoreToBeat ? (
          <div className={styles.best}>
            <img
              src={`${config.imageDomain}Assets/trophyDesk.webp`}
              alt="vs-icon"
            />

            <div className={styles.scoreDiv}>
              <h4>Score to beat</h4>
              <h2>{scoreToBeat}</h2>
            </div>
          </div>
        ) : null}
      </div>
      <div className={styles.howplay}>
        <h3 className={styles.gradTxt}>How to play:</h3>
        <p>{tips?.[1]}</p>
      </div>
      <div className={styles.btnAll}>
        <div
          className={styles.listBtnS}
          onClick={() => actions.quit(mode, sound, true)}
        >
          <img src={`${config.imageDomain}Assets/backDesk.png`} alt="vs-icon" />
        </div>
        <div className={styles.listBtnS} onClick={modeChanger}>
          {true ? (
            <img
              src={`${config.imageDomain}Assets/lightDesk.webp`}
              alt="vs-icon"
            />
          ) : (
            <img
              src={`${config.imageDomain}Assets/nightDesk.webp`}
              alt="vs-icon"
            />
          )}
        </div>
        <div className={styles.listBtnS} onClick={muteUnmute}>
          {true ? (
            <img
              src={`${config.imageDomain}Assets/unmuteDesk.webp`}
              alt="vs-icon"
            />
          ) : (
            <img
              src={`${config.imageDomain}Assets/muteDesk.webp`}
              alt="vs-icon"
            />
          )}
        </div>
        <div className={styles.listBtnS}>
          <img
            src={`${config.imageDomain}Assets/fullDesk.webp`}
            alt="vs-icon"
            onClick={() => actions.fullScreen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default ControlMenu;
