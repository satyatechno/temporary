'use client'
import React, { useState } from "react";
import Draggable from "react-draggable";

import styles from "./dragablemenu.module.scss";

import { IoIosArrowDown } from "react-icons/io";
import "./dragablemenu.module.scss"
import config from "../../../../config";

const DragableMenu = ({ actions, scoreToBeat }:any) => {
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState(false);
  const [sound, setSound] = useState(true);


  const muteUnmute = () => {
    setSound((current) => !current);
    actions.darkMode(mode, !sound, false);
  };
  const modeChanger = () => {
    setMode((current) => !current);
    actions.darkMode(!mode, sound, false);
  };



  return (
    <div className={styles.dropdownDrag}>
      <Draggable
        axis="y"
        handle=".handleDropBtn"
        onStop={() => setActive(!active)}
        defaultPosition={{ x: 0, y: 0 }}
      >
        <div className={styles.dropdownD}>
          <button className={styles.handleDropBtn}>
            <img
              src={`${config.imageDomain}Assets/smLogo.webp`}
              alt="vs-icon"
            />
            <IoIosArrowDown style={{ color: "black", marginTop: "-20px" }} />
          </button>

          <ul className={active ? styles.activeDropDown : styles.inactiveDD}>
            <li onClick={modeChanger}>
              {mode ? (
                <img
                  src={`${config.imageDomain}Assets/light.webp`}
                  alt="vs-icon"
                />
              ) : (
                <img
                  src={`${config.imageDomain}Assets/dark.webp`}
                  alt="vs-icon"
                />
              )}
            </li>
            <li onClick={muteUnmute}>
              {sound ? (
                <img
                  src={`${config.imageDomain}Assets/volume.webp`}
                  alt="vs-icon"
                />
              ) : (
                <img
                  src={`${config.imageDomain}Assets/mute.webp`}
                  alt="vs-icon"
                />
              )}
            </li>
            <li onClick={() => actions.quit(mode, sound, true)}>
              <img
                src={`${config.imageDomain}Assets/quit.webp`}
                alt="vs-icon"
              />
              <span>Quit</span>
            </li>
            <li onClick={()=>actions.fullScreen()}>
              <img src={`${config.imageDomain}Assets/quit.webp`} alt="vs-icon" />
              <span>Full</span>
            </li>
          </ul>
        </div>
      </Draggable>
     {scoreToBeat? <Draggable
        axis="y"
        defaultPosition={{ x: 0, y: 0 }}
      >
        <div className={`${styles.scoreBeat} ${styles.handleDropBtn}`}>
          <h4 className={styles.scoreBeat_h4}>To Beat:</h4>
          <p className={styles.scoreBeat_p}>{Number(scoreToBeat) > 0 ? scoreToBeat: "0"}</p>
        </div>
      </Draggable>:null}
    </div>
  );
};
export default DragableMenu;
