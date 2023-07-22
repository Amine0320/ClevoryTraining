import React from "react";
// import 'swiper/swiper-bundle.css';
// import 'swiper/swiper-bundle.min.css'; 
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { ACTIA, MIN } from "../assets/CLIENTS";
import { VMAEC } from "../assets/Partenaires";
SwiperCore.use([Navigation, Autoplay]); 
const Slider = () => {
  return ( 
<Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 5000,  
        disableOnInteraction: false, 
      }}
    >
      <SwiperSlide>
        <img src={ACTIA} alt="Slide 1" /> 
      </SwiperSlide>

      <SwiperSlide>
        <img src={MIN} alt="Slide 2" />  
      </SwiperSlide>

      <SwiperSlide>
        <img src={VMAEC} alt="Slide 3" /> 
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;  