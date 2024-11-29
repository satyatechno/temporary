import Image from "next/image";
import styles from "./usereferdetails.module.scss";
import config from "../../../../config";

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

      <div>
        <Image
          height={300}
          width={350}
          src={`${config.imageDomain}/loading-images/newlevelBar.webp`}
          alt="Gaming Arcade"
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
          <span>
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
            <button>Play Now</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserReferDetails;