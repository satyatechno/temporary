
import styles from "./homeCarousel.module.scss";
import Image from "next/image";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import CustomGameCarousel from "./CustomGameCarousel";
import Link from "next/link";



const GameCarousel = ({gamesData}:any) => {
  return (
    <CustomGameCarousel >
      {gamesData?.map((data: any) => (
        <div key={data._id}>
          <div className={styles.image_container}>
            <Image
              src={data.backgroundImage}
              alt={data.backgroundImageAlt || "games-image"}
              fill
              quality={75}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.icon_image_container}>
            <Image
              src={data.IconImage}
              alt={data.IconImageAlt || "game-icons"}
              fill
            />
        </div>
          <div className={styles.playButton}>
            <Link href={`games/${data?.name}`}>
              <Button value="Play Now" />
            </Link>
          </div>
        </div>
      ))}
    </CustomGameCarousel>
  );
};

export default GameCarousel;
