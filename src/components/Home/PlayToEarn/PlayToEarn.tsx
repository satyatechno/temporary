import Image from "next/image";
import styles from "./playtoearn.module.scss";
import config from "../../../../config";


const PlayToEarn=()=>{
    return (
        <div className={styles.section6}>
            <div className={styles.section6__top}>
                <div className={styles.section6__topLeft}>
                    <p>Play to Earn</p>
                    <h3>Mechanics</h3>
                </div>
                <div className={styles.section6__topRight}>
                    <p>
                        Stake Matic, conquer global challenges, and seize your portion of the prize pool.
                        Dive into free weekly tournaments for exciting rewards from our weekly prize pools,
                        making gaming an absolute thrill!
                    </p>
                </div>
            </div>
            <div className={styles.sectin6__bottom}>
                {/* <Zoom> */}
                    <Image 
                        src={`${config.imageDomain}/loading-images/playToEarnImage.webp`}
                        alt="Game"
                        height={0}
                        width={0}
                        sizes="100vw"
                        style={{ height: "100%", width: "100%" }}
                    />
                {/* </Zoom> */}
                <div className={styles.section6__bottomContent}>
                    <p>Integrate Crypto Wallet</p>
                    <p>Play Games</p>
                    <p>Earn Rewards</p>
                </div>
            </div>
        </div>
      )
}

export default PlayToEarn;