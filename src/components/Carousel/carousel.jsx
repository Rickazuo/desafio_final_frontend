import React, { useState } from "react";
import styles from "./carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectFade, Navigation } from "swiper/modules";
import DishCards from "../DishCards/dishCards";

export default function Carousel({ dishes }) {
  return (
    <div className={styles.carouselSwiper}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className={styles.mySwiper}
        loop={true}
        spaceBetween={50}
      >
        {dishes.map((item) => (
          <SwiperSlide>
            <DishCards
              id={item.id}
              title={item.title}
              img={item.img}
              description={item.description}
              liked={item.liked}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
