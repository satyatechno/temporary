import Image from "next/image";
import styles from "./PlayBigWinBig.module.scss";
import config from "../../../../config";

const PlayBigWinBig=()=>{

    return (
        <div className={styles.section11}>
            <div className={styles.section11__left}>
              {/* <Bounce> */}
                <Image 
                  src={`${config.imageDomain}/Assets/handsWithJoystick.png`}
                  alt=""
                  height={0}
                  width={0}
                  sizes="100vw"
                  style={{ height: "450px", width: "auto", marginLeft: "-80px", marginTop: "-100px" }}
                />
                {/* <img src="${config.imageDomaing}/Assets/handsWithJoystick.png" alt="" /> */}
              {/* </Bounce> */}
            </div>
            <div className={styles.section11__middle}>
                <Image 
                  src={`${config.imageDomain}/loading-images/moneyWithRainbow.webp`}
                  alt="Game fi"
                  height={0}
                  width={0}
                  sizes="100vw"
                  style={{ height: "80%", width: "80%", opacity: "0.4" }}
                />
                {/* <img src={`${config.imageSource}/loading-images/moneyWithRainbow.webp`} alt="Game fi" /> */}
                <p>Play Big, Win Bigger!</p>
                <h3>Elevate Your Game, <br /> Elevate Your Gains!</h3>
                {/* <Button value="Get Started" onClick={() => navigate.push("/games")} /> */}
            </div>
            <div className={styles.section11__right}>
              {/* <Bounce> */}
                <Image 
                  src={`${config.imageDomain}/Assets/handsWithDiamond.png`}
                  alt=""
                  height={0}
                  width={0}
                  sizes="100vw"
                  style={{ height: "350px", width: "auto", marginRight: "-100px" }}
                />
                {/* <img src="${config.imageDomaing}/Assets/handsWithDiamond.png" alt="" /> */}
              {/* </Bounce> */}
            </div>
        </div>
      )
}

export default PlayBigWinBig;