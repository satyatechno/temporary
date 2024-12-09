import Image from "next/image";
import styles from "./socialhandle.module.scss";
import config from "../../../../config";
import Link from "next/link";
import { socialLinks } from "@/utils/Utils";

const SocialHandles = () => {
  
  return (
    <div className={styles.socialMedia}>
      <div className={styles.row}>
        {socialLinks.map(({ name, url, image }, index) => (
          <div className={styles.col} key={index}>
            <Link href={url} style={{textDecoration:"none",color:"white"}}>
              <div className={styles.imgSoc}>
                <Image
                  height={150}
                  width={150}
                  src={`${config.imageDomain}Assets/${image}`}
                  alt={`Gaming Arcade - ${name}`}
                  className={styles.img}
                />
                <h3 className={styles.name}>{name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialHandles;
