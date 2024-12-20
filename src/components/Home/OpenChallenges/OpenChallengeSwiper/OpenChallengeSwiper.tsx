"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./openchallengeswiper.module.scss";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import OpenChallengesCard from "../OpenChallengesCard/OpenChallengesCard";

const OpenChallengesSwiperCarousel = ({ data }: any) => {
  console.log("datadata", data);
  //   const swiper = useSwiper();
  //   const swiperRef = useRef(null);
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
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        style={{ width: "90%" }}
      >
        {data?.map((details) => (
          <SwiperSlide className={styles.swiper_slide} key={details?._id}>
            <OpenChallengesCard
              name={details?.game?.name}
              stage={details?.stage}
              gameId={details?.gameId}
              betAmount={details?.betAmount}
              score={details?.player1?.score}
              medium={details?.medium}
              // customBetLength={customBets?.length}
              gameIcon={details?.game?.IconImage}
              loaderUrl={details?.buildUrl?.typeLoader}
              frameworkUrl={details?.buildUrl?.typeFramework}
              dataUrl={details?.buildUrl?.typeData}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OpenChallengesSwiperCarousel;
