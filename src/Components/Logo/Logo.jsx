import React from 'react'
import './logo.css'

import { logo } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Logo = () => {
  return (
    <div className="logo my-[100px]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"2"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {logo.map((item, index) => (
          <SwiperSlide key={item.id || index}>
            <div className="img-logo  flex justify-center items-center">
              <img src={item.l_img} alt="" />
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow hidden">
            <i className="bx bxs-left-arrow-circle text-4xl border border-blue-50  rounded-[50%] text-orange-400"></i>
          </div>
          <div className="swiper-button-next slider-arrow  hidden">
            <i className="bx bxs-right-arrow-circle text-4xl border border-blue-50  rounded-[50%] text-orange-400"></i>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Logo