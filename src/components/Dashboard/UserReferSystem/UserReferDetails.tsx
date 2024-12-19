import Image from "next/image";
import styles from "./usereferdetails.module.scss";
import config from "../../../../config";
import Button from "@/components/CommonComponent/AnimatedButton/AnimatedButton";
import Link from "next/link";

const UserReferDetails = () => {
  return (
    <div className={styles.refer_container}>
      <div className={styles.refer_section1}>
        <div className={styles.refer_section_heading}>
          <h3 className={styles.heading_h3}>
            Refer More <br /> to <br /> level up &
          </h3>
          <h2 className={styles.heading_h2}>Earn Big</h2>
          <div className={styles.image_container}>
            <Image
              height={20}
              width={20}
              src={`${config.imageDomain}Assets/exp-icon.webp`}
              alt="Gmaing Arcade"
            />
            <p className={styles.how_refer_works}>How Referral Works?</p>
          </div>
        </div>
      </div>
      <div className={styles.levelBar_container}>
        <Image
          // height={300}
          // width={350}
          fill
          src={`${config.imageDomain}/loading-images/newlevelBar.webp`}
          alt="Gaming Arcade"
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.responsive_image}
        />
      </div>

      <div className={styles.refer_section3_container}>
        <div className={styles.refer_section3}>
          <span className={styles.refer_container1}>
            <p>0</p>
            <p>Total Referral Earnings</p>
            <div className={styles.referal_image_container}>
              <Image
                src={`${config.imageDomain}/loading-images/paidCoin.webp`}
                alt="arcade"
                fill

                // width={50}
                // height={50}
              />
            </div>
          </span>
          <span className={styles.refer_container2}>
            <p>0</p>
            <p>Total Referrals</p>
            <span>
              <Image
                src={`${config.imageDomain}/loading-images/paidCycle.webp`}
                alt="arcade"
                width={50}
                height={50}
              />
            </span>
          </span>
        </div>

        <div className={styles.refer_section4}>
          <div>
            <Image
              src={`${config.imageDomain}/Assets/gameController.webp`}
              alt="arcade"
              width={100}
              height={100}
            />
          </div>
          <p className={styles.section4_text}>
            Play a Paid game to generate Referral link and Invitation Code.
          </p>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Link href="/games">
              <Button value="Play Now" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReferDetails;
