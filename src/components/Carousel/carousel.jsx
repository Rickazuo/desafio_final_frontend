import React, { useState } from "react";
import styles from "./carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Carousel({ images }) {
  return (
    <div style={{ width: 900 }}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        loop={true}
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
