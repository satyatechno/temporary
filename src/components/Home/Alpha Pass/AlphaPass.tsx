import config from "../../../../config";
import AlphaPassCard from "./AlphaPassCard/AlphaPassCard";
import styles from "./alphapass.module.scss";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";

const AlphaPass = () => {
  return (
    <div className={styles.alpha_container}>
      <h3 className={styles.alpha_heading}>NFTs</h3>
      <div className={styles.content_container}>
        <div className={styles.container_top}>
          <div className={styles.content_text}>
            <h3 className={styles.alpha_pass_h3}>Alpha Pass</h3>
            <p className={styles.alpha_pass_p}>
              Players can collect unique NFTs that can be used in-game, traded
              on NFT Marketplaces or staked to receive steady rewards.
            </p>
            {/* <AnimatedButton text="Comming soon" /> */}
            <Button value="Comming soon" />

          </div>

          <div className={styles.alpha_pass_gif}>
            {/* <Lottie autoplay animationData={`${config.imageDomain}/Assets/lottie/alpha-pass.json`} /> */}
          </div>
          <div className={styles.section8__alphaPassPercent}></div>
        </div>

        <div className={styles.container_bottom}>
          <div className={styles.cards_top}>
            {topCard?.map((value) => (
              <AlphaPassCard
                img={`${config.imageDomain}${value.img}`}
                text={value?.text}
                height={value?.height}
                key={value?.id}
              />
            ))}
          </div>
          
          <div className={styles.cards_bottom}>
            {bottomCard?.map((value) => (
              <AlphaPassCard
                img={`${config.imageDomain}${value.img}`}
                text={value?.text}
                height={value?.height}
                key={value?.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlphaPass;

const topCard = [
  {
    id: 1,
    text: "100k passes only",
    height: "100px",
    img: "/loading-images/alphaPassClock.webp",
  },
  {
    id: 2,
    text: "Free Entry in Paid Tournaments",
    height: "60px",
    img: "/loading-images/alphaPassAssets.webp",
  },
  {
    id: 3,
    text: "Daily Winning of $10,000",
    height: "60px",
    img: "/loading-images/alphaPassWinnings.webp",
  },
];

const bottomCard = [
  {
    id: 1,
    text: "Game Data recorded on NFT to increase experience",
    height: "80px",
    img: "/loading-images/alphaPassData.webp",
  },
  {
    id: 2,
    text: "Upcoming In game Asset Airdrops",
    height: "60px",
    img: "/loading-images/alphaPassFreeEntry.webp",
  },
];
