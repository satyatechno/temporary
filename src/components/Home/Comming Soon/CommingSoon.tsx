import Image from "next/image";
import styles from "./commingsoon.module.scss";
import config from "../../../../config";

const CommingSoon = () => {
  return (
    <div className={styles.section9}>
      <div className={styles.section9__top}>
        <h3 className={styles.heading}>Coming Soon!</h3>
      </div>
      <div className={styles.section9__bottom}>
        {CommingSoondata?.map((value) => (
          <Image
            src={`${config.imageDomain}${value?.srcLink}`}
            alt={value?.alt}
            height={0}
            width={0}
            sizes="100vw"
            style={{ height: "400px", width: "100%", borderRadius: "30px",margin:"2rem" }}
            key={value?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CommingSoon;

const CommingSoondata = [
  {
    id: 1,
    alt: "Gaming Arcade",
    srcLink: "/Assets/spaceDefy.webp",
  },
  {
    id: 2,
    alt: "Game fi",
    srcLink: "/Assets/hoopShots.webp",
  },
  {
    id: 3,
    alt: "Play to earn",
    srcLink: "/Assets/bomberThumbnail.webp",
  },
];
