import {  parts  } from "../../constants"; 
import styles from "../../style";
import React , {useState} from 'react';  
import { FaCircle } from 'react-icons/fa'; 
import '../../index.css' ;  
import './Partenaires.css' ; 

 function Partenaires() {  
  const [current, setCurrent] = useState(0);
  const length = parts.length;
  const maxDotsToShow = 2;  
  const slidesToShow = Math.min(length, maxDotsToShow);
  
  const goToSlide = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < length) {
      setCurrent(slideIndex);
    }
  };
  
  if (!Array.isArray(parts) || parts.length <= 0) {
    return null;
  } 
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`${styles.flexCenter} my-4 slider`}> 
          <div className={`${styles.flexCenter} flex-wrap w-full`}>
            <h2 className={`${styles.heading2} Titre1  text-black `}>
              Nos partenaires éditeurs <br className="sm:block hidden" />
            </h2>
            <div className='slides-container'style={{ transform: `translateX(-${current * (100 / slidesToShow)}%)` }}>
              {parts.map((part, index) => {
                return (
                  <div className='slide' key={index}>
                    <img src={part.logo} alt='client logo' className='image' />
                  </div>
                );
              })} 
            </div>
            <div className='navigation-dots'>
              {parts.map((_, index) => (
                index < slidesToShow && (
                  <FaCircle
                    key={index}
                    className={index === current ? 'dot active' : 'dot'}
                    onClick={() => goToSlide(index)}
                  />
                )
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  ); 
};  
export default Partenaires ;   