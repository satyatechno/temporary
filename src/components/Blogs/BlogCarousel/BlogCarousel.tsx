import React from "react";
import CustomGameCarousel from "@/components/Home/HomeCarousel/CustomGameCarousel";
import Trending from "../TrendingBlog/TrendingBlog";


const CarouselComponent = ({ trending = [] }:any) => {

  return (
      <div>
        <CustomGameCarousel>
          {trending?.map((data:any, index:any) => {
            return (
              <div key={index}>
                <Trending
                  data={data}
                  thumbnail={data?.header}
                  href={data?.slug}
                />
              </div>
            );
          })}
          </CustomGameCarousel>
    </div>
  );
};

export default CarouselComponent;
