import React from "react";
import "./client.css";

import { client } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Clients = () => {
  return (
    <div id="client" className="clients my-[100px]">
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
        {client.map((item, index) => (
          <SwiperSlide key={item.id || index}>
            <div className="img-container  flex justify-center items-center">
              <img src={item.c_img} alt="" />
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow hidden">
            <i className="bx bxs-left-arrow-circle text-4xl border  bg-white border-blue-50  rounded-[50%] text-black"></i>
          </div>
          <div className="swiper-button-next slider-arrow  hidden">
            <i className="bx bxs-right-arrow-circle text-4xl border bg-white border-blue-50  rounded-[50%] text-black"></i>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Clients;
