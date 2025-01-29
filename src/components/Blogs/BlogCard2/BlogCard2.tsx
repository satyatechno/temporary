import React from "react";
import styles from "./blogcard.module.scss";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { source_sans } from "@/app/layout";

const BlogCard2 = ({detail}:any) =>{
    function truncate(source:any, size:any) {
        return source?.length > size ? source.slice(0, size - 1) + "…" : source;
    }
    return (
        <Link href={`/blogs/${detail?.slug}`} className={styles.linkContainer}>
        <div className={styles.blogcardContainer}>
        <div className={styles.imageContainer}>
          <Image src={detail?.header} width={355} height={208} className={styles.cardImage} alt="Untrade: Automated Crypto Trading AI Bot" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentSection1}>
            <p className={styles.postdate}>
            {moment(detail?.createdAt).format("MMMM D, YYYY")}
            </p>
            <p className={styles.blogcategory}>{detail?.category[0]?.name}</p>
          </div>
          <div className={styles.contentSection2}>
            <p className={`${styles.blogdescription} ${source_sans.className}` }>
            {truncate(detail?.description, 65)}
            </p>
          </div>
        </div>
      </div>
      </Link>

    )
}

export default BlogCard2;