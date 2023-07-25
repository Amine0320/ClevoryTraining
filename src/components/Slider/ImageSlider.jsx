import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import './ImageSlider.css';
import { FU  } from '../../constants';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = FU.length;
  const slidesToShow = 3;
//   const slidesToScroll = 1;

//   const nextSlide = () => {
//     setCurrent((prevCurrent) =>
//       prevCurrent === length - 1 ? 0 : prevCurrent + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrent((prevCurrent) =>
//       prevCurrent === 0 ? length - 1 : prevCurrent - 1
//     );
//   }; 
  const goToSlide = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < length) {
      setCurrent(slideIndex);
    }
  };

  if (!Array.isArray(FU) || FU.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <div
        className='slides-container'
        style={{ transform: `translateX(-${current * (100 / slidesToShow)}%)` }}
      >
        {FU.map((F, index) => {
          return (
            <div className='slide' key={index}>
              <img src={F.img} alt='client logo' className='image' />
            </div>
          );
        })}
      </div>
      <div className='navigation-dots'>
        {FU.map((_, index) => (
          <FaCircle 
            key={index}
            className={index === current ? 'dot active' : 'dot'}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
