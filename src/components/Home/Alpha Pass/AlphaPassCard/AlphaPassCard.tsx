import React from 'react';
import styles from "./AlphaPassCard.module.scss";
import Image from 'next/image'

function AlphaPassCard({ text, img, height }:any) {
  return (
    <div className={styles.alphaPassCard}>
        <div className={styles.alphaPassCard__container}>
            <Image 
              src={img}
              alt=""
              height={0}
              width={0}
              sizes='100vw'
              style={{ height: height, width: "auto", marginRight: "20px", marginTop: "-30px" }}
            />
            <p>{text}</p>
        </div>
    </div>
  )
}

export default AlphaPassCard;