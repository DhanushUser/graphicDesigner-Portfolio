import React, { useEffect } from "react";
import "./social.css";
import { social } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


import AOS from 'aos';
import 'aos/dist/aos.css';

const SocialMedia = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id="social" className="social my-[100px]">
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
        {social.map((item, index) => (
          <SwiperSlide key={item.id || index}> 
            <div data-aos="zoom-in"
               className="img-container  flex justify-center items-center">
              <img src={item.s_img} alt="" />
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow hidden">
          <i className='bx bxs-left-arrow-circle text-4xl border bg-white border-blue-50  rounded-[50%] text-black'></i>
          </div>
          <div className="swiper-button-next slider-arrow  hidden">
          <i className='bx bxs-right-arrow-circle text-4xl border bg-white border-blue-50  rounded-[50%] text-black'></i>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SocialMedia;
