"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./swiper.module.scss";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { PiGreaterThanBold } from "react-icons/pi"; // Greater-than icon
import { TbMathLower } from "react-icons/tb";  // Lower-than icon

// import Image from "next/image";
import GamesCard from "../Cards/GamesCards/GamesCards";

const SwiperCarousel = ({ data }: any) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.swiper_wrapper}>
        {/* Custom navigation buttons */}
        <div ref={prevRef} className={`${styles.nav_button} ${styles.prev}`}>
          <TbMathLower size={24} />
        </div>
        <div ref={nextRef} className={`${styles.nav_button} ${styles.next}`}>
          <PiGreaterThanBold size={24} />
        </div>

        {/* Swiper carousel */}
        <Swiper
          navigation={{
            prevEl: prevRef.current, // Use custom navigation buttons
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={30}
          loop
          breakpoints={{
            1600: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            340: {
              slidesPerView: 1.2,
              spaceBetween: 5,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          style={{ width: "90%" }}
          onBeforeInit={(swiper: any) => {
            // Pass custom navigation buttons to Swiper
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
        >
          {data?.map((details: any) => (
            <SwiperSlide className={styles.swiper_slide} key={details?._id}>
              <GamesCard detail={details} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperCarousel;
