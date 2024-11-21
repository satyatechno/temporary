"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";
import styles from "./style.module.scss";
// import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
// import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
// import TutorialCard from "@/components/Tutorials/TutorialCard/Index";
// import { poppins } from "@/app/layout";
import Image from "next/image";

const SwiperCarousel = ({ data }:any) => {
  const swiper = useSwiper();
  const swiperRef = useRef(null);
  return (
    <>
      <div className={styles.topSection}>
        <div className={styles.topHeading}>
          <div className={styles.rectangleDiv} />
          <p className={`${styles.heading2}`}>
            Related Tutorial
          </p>
          <Image
            src="https://assets.untrade.io/test/flash.webp"
            alt="flash"
            height={30}
            width={30}
          />
        </div>
        {/* <div className={styles.arrowContainer}>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={styles.arrowContainerBackward}
          >
            <ArrowBackOutlinedIcon />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={styles.arrowContainerForward}
          >
            <ArrowForwardOutlinedIcon />
          </button>
        </div> */}
      </div>

      <Swiper
        onSwiper={(swiper) => {
        //   swiperRef.current = swiper;
        }}
        slidesPerView={3}
        spaceBetween={30}
        loop
        breakpoints={{
            1440:{
              slidesPerView: 3,
              spaceBetween: 30,
              pagination: false,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 5,
              pagination: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              pagination: false,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
              pagination: false,
            },
            340: {
              slidesPerView: 1.2,
              spaceBetween: 5,
              pagination:{
                // type: "fraction",
                dynamicBullets: true,
              }
            },
          }}
        // navigation={true}
      
        modules={[Pagination,Navigation]}
        className="mySwiper"
        style={{ width: "100%", maxWidth: "1115px" }}
      >
        {data?.map((details:any) => (
          <SwiperSlide className={styles.swiper_slide} key={details?.slug}>
            {/* <TutorialCard detail={details} key={details?.slug} /> */}
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
};

export default SwiperCarousel;
