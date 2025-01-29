"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./blogdetailscarousel.module.scss";
import { FaArrowCircleLeft,FaArrowCircleRight } from "react-icons/fa";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { poppins } from "@/app/layout";
import BlogCard2 from "../BlogCard2/BlogCard2";

const RelatedTutorialSlider = ({ blogs }:any) => {
//   const swiper = useSwiper();
  const swiperRef = useRef<any>(null);
  return (
    <>
      <div className={styles.topSection}>
        <div className={styles.topHeading}>
          {/* <div className={styles.rectangleDiv} /> */}
          <p className={`${styles.heading2} ${poppins.className}`}>
            More <span className={styles.blogs_heading}>blogs</span>
          </p>
        </div>
        <div className={styles.arrowContainer}>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={styles.arrowContainerBackward}
          >
            <FaArrowCircleLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={styles.arrowContainerForward}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper:any) => {
          swiperRef.current = swiper; // Store the swiper instance
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
        {blogs?.map((details:any) => (
          <SwiperSlide className={styles.swiper_slide} key={details?.slug}>
            <BlogCard2 detail={details} key={details?.slug} />
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
};

export default RelatedTutorialSlider;
