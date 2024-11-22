"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { useSwiper } from "swiper/react";
import styles from "./swiper.module.scss";

// import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
// import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
// import required modules
import { Pagination, Navigation,Autoplay } from "swiper/modules";
// import TutorialCard from "@/components/Tutorials/TutorialCard/Index";
// import { poppins } from "@/app/layout";
import Image from "next/image";
import GamesCard from "../Cards/GamesCards/GamesCards";

const SwiperCarousel = ({ data }: any) => {
  //   const swiper = useSwiper();
  const swiperRef = useRef(null);
  return (
    <>
      <Swiper
        navigation={true} 
        autoplay={{
            delay: 5000, 
            disableOnInteraction: false, // Keep autoplay active after user interactions
          }}
        slidesPerView={4}
        spaceBetween={30}
        loop
        breakpoints={{
          1600: {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: false,
          },
          1440: {
            slidesPerView: 4,
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
            pagination: {
              // type: "fraction",
              dynamicBullets: true,
            },
          },
        }}

        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
        style={{ width: "90%" }}
      >
        {data?.map(
          (details: any) => (
            (
              <SwiperSlide className={styles.swiper_slide} key={details?._id}>
                <GamesCard detail={details} />
              </SwiperSlide>
            )
          )
        )}
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
