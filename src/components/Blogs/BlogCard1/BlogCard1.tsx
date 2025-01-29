import React from "react";
import styles from "./blogcard.module.scss";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { source_sans } from "@/app/layout";

const BlogCard1 = ({ blogsData }: any) => {
  function truncate(source: any, size: any) {
    return source?.length > size ? source.slice(0, size - 1) + "…" : source;
  }

  return blogsData?.map((data: any, index: any) => (
    <Link
      key={index}
      href={`/blogs/${data?.slug}`}
      className={styles.linkContainer}
    >
      <div className={styles.blogcardContainer} key={index}>
        <div className={styles.imageContainer}>
          <Image
            src={data?.header}
            // width={545}
            // height={320}
            fill
            style={{objectFit:"cover"}}
            className={styles.cardImage}
            alt="Untrade: Automated Crypto Trading AI Bot"
          />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentSection1}>
            <p className={styles.postdate}>
              {moment(data?.createdAt).format("MMMM D, YYYY")}
            </p>
            <p className={styles.blogcategory}>{data?.category[0]?.name}</p>
          </div>
          <div className={styles.contentSection2}>
            <p className={`${styles.blogdescription} ${source_sans.className}`}>
              {truncate(data?.description, 70)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  ));
};

export default BlogCard1;
