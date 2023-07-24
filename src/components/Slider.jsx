import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import SwiperCore from 'swiper'; // Import SwiperCore and the necessary modules
import styles from '../style';
import { clients } from '../constants';


// Install the Swiper modules
// SwiperCore.use([Navigation, Pagination]);

const Slider = () => { 
    const responsive = {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }; 
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Swiper
        spaceBetween={50}
        slidesPerView={7}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <section className={`${styles.flexCenter} my-4`}>
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div  responsive={responsive} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-1`}>
                <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain img" />
              </div>
            </SwiperSlide>
          ))}
        </section>
      </Swiper> 
    </div>
  </div>
  );
};

export default Slider;
