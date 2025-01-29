import React from "react";
import styles from "./trendingblog.module.scss";
// import girl from "../../Assets/Images/girl.png";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { poppins, source_sans } from "@/app/layout";

function truncate(source:any, size:any) {
  return source?.length > size ? source.slice(0, size - 1) + "…" : source;
}

const Trending = ({ data, thumbnail, href }:any) => {
  return (
    <Link href={`/blogs/${href}`}>
      <div className={styles.trendingCardContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={thumbnail}
            layout="responsive"
            width={200}
            height={200}
            alt="Trending Image"
          />
        </div>
        <div className={styles.contentContainer}>
          <p className={`${styles.postDate}`}>
          {moment(data?.createdAt).format("MMMM D, YYYY")}
          </p>
          <p className={`${styles.title} ${poppins.className}`}>
            {truncate(data?.title, 60)}
          </p>
          <p className={`${styles.description} ${source_sans.className}`}>
            {truncate(data?.description, 260)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Trending;
