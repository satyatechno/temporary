import Image from "next/image";
import styles from "./community.module.scss";
import Link from "next/link";

const CommunityLink = ({header,socialData}:any) => {
  return (
    <div className={styles.community_container}>
      <h3 className={styles.community_header}>{header}</h3>
      {socialData?.map((data:any) => (
        <Link href={data?.link} key={data?.id} target="_blank">
          <div className={styles.main_container}>
            <div className={styles.upper_container}>
              <Image src={data?.iconLink} alt="logo" height={15} width={15} />
              <p>{data?.title}</p>
            </div>
            <p>{">"}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CommunityLink;
